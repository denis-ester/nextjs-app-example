import styled from 'styled-components';
import Imgix from 'react-imgix';

const ItemCard = styled.div`
  position: relative;

  a {
    background-color: ${props => props.theme.colors.gray};
    display: block;
  }

  .lazyload,
  .lazyloading {
    opacity: 0;
  }

  .lazyloaded {
    border: 1px solid ${props => props.theme.colors.gray};
    opacity: 1;
    transition: opacity 0.7s;
  }
`;

const Image = styled(Imgix)`
  display: block;
  max-width: 100%;
  width: 100%;
  height: auto;
  box-sizing: border-box;
`;

export { ItemCard, Image };
