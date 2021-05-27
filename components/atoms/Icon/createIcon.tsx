import React from 'react';

import Icon from './styledComponents';

const createIcon = ({ path, viewBox }: any) => (props: any) => (
  <Icon viewBox={viewBox} path={path} {...props} />
);

export default createIcon;
