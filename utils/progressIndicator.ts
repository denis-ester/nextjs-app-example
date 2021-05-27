import Router from "next/router";
import NProgress from 'nprogress';

// configure the progress bar
NProgress.configure({
  showSpinner: true,
  easing: 'easeInOutSine',
  trickle: true,
});

const handleStart = (url:string) => {
  (url !== Router.pathname) && NProgress.start();
}

const handleComplete = () => NProgress.done();

export const enableProgressIndicator = () => {
  Router.events.on('routeChangeStart', handleStart)
  Router.events.on('routeChangeComplete', handleComplete)
  Router.events.on('routeChangeError', handleComplete)
}
