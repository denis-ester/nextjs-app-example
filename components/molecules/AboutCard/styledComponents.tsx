import styled from 'styled-components';

import { Column, Image } from './../../atoms';

const Card = styled(Column)`
  @media screen and (max-width: 576px) {
    margin-bottom: 30px;
  }
`;

const CardImageWrapper = styled.div`
  position: relative;
  padding-bottom: calc(242 / 406 * 100%);
  margin-bottom: 23px;

  @media screen and (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

const CardImage = styled(Image)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardTitle = styled.h4`
  font-family: ${props => props.theme.type.sans};
  font-style: normal;
  font-weight: bold;
  font-size: 22px;
  line-height: 27px;
  letter-spacing: 0.75px;
  padding-right: 10px;
  margin: 0;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export { Card, CardImageWrapper, CardImage, CardTitle };
