import { Production } from '../classes/Production';

export const getMetaDescriptionFromProductions = (production: Production) => {
  const { synopsis, work_name } = production;

  let metaDescription;

  if (synopsis && synopsis.length) {
    metaDescription = synopsis.substring(0, synopsis.indexOf('. ') + 1);
  } else {
    metaDescription = work_name;
  }

  return metaDescription;
};
