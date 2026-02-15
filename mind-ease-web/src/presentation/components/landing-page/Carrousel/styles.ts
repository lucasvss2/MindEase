import { styled } from "@linaria/react";


export const Content = styled.div`
  margin: 0;
  width: 100%;
  height: 100%;
  color: var(--color-text);
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const TextContainer = styled.p`
  color: var(--color-activeDotColor);
  position: absolute;
  top: 60px;
  left: 60px;
  max-width: 500px;
  text-align: left;
  z-index: 10;
  background-color: #000000B3;
  padding: 16px;
  border-radius: 8px;
`;

export const CarouselContainer = styled.div`
  width: 100%;
  height: 90vh;

  .ant-carousel,
  .slick-slider,
  .slick-list,
  .slick-track,
  .slick-slide,
  .slick-slide > div {
    height: 100% !important;
  }

  .slick-dots li button {
    background: var(--color-inactiveDotColor) !important;
    opacity: 1 !important;
  }

  .slick-dots li.slick-active button {
    background: var(--color-activeDotColor) !important;
    opacity: 1 !important;
  }
`;