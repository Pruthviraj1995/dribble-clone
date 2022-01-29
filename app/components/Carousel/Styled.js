import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

export const CarouselWrapper = styled(Carousel)`
  .control-arrow:hover {
    background: none !important;
  }

  .control-arrow:before {
    // background: red !important;
  }

  .thumbs {
    display: flex;
    justify-content: center;
    height: 100px !important;
    margin-top: 10px !important;
  }

  .thumb {
    border-radius: 8px !important;
    margin-right: 24px !important;
    height: 60px !important;
    padding: 0 !important;
    width: 80px !important;
    border: none !important;

    img {
      height: 100%;
      width: 100%;
      border-radius: 8px !important;
    }

    :hover {
      border: 0 !important;
      box-shadow: 0 0 0 4px rgb(0 0 0 / 10%);
    }
  }

  .thumb.selected {
    border: 2px solid #ea4c89 !important;
  }
`;
