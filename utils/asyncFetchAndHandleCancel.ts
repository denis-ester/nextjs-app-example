/**
 * this function should be used to make async API requests within useEffect(). all API requests in
 * render functions should use useEffect() instead of putting them. this function handles the case
 * of the user navigating to another page before we finished loading the data.
 *
 * TODO: could this be rewritten as a react hook?
 *
 * Usage:

useEffect(() => {
  // this would be the place to check if the user is authenticated, if necessary
  // return is needed!
  return asyncFetchAndHandleCancel(
    async () => {
      // make API requests and return the data
      // return await api.getLiveProductions(false)

      // you can also return a custom object with any data in it, which is an easy way to group
      // multiple API requests in one useEffect() block
      return {
        productions: await api.getLiveProductions(false),
        digital: await api.getLiveDigitalProductions(),
        tags: await api.getTags(),
        someNumber: 14
      }
    },
    (response) => {
      // this is where you can set state variables based on the response! response will be whatever
      // you returned in the previous function (feel free to derefernce the variables, or just use
      // the response variable directly)
      // setProductions(response)
      setProductions(response.productions)
      setDigital(response.digital)
      setTags(response.tags)
      setSomeNumber(response.someNumber)
    })
},
// make sure to set the dependencies array to tell next.js not to re-run the effect on every render
// see https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects
[])

 * @link https://github.com/facebook/react/issues/14326#issuecomment-472043812
 * @param requestFunc
 * @param responseFunc
 */
export const asyncFetchAndHandleCancel = (requestFunc:() => Promise<{}>, responseFunc:(response: any) => void) => {
  let didCancel = false;
  async function fetch() {
    const response = await requestFunc();

    // ignore if we started fetching another page
    if (response && !didCancel) {
      responseFunc(response);
    }
  }

  fetch();

  // this is a cleanup function for the useEffect() hook, which sets our flag if the user changes
  // pages
  return () => {
    didCancel = true;
  };
}
