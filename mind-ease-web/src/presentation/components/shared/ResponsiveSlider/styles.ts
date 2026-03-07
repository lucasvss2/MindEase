import { styled } from "@linaria/react";

export const ResponsiveSliderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  && .ant-slider {
    width: 85%;
  }

  /* Rail — trilho de fundo */
  && .ant-slider-rail {
    background-color: var(--color-sliderBG) !important;
    border: 1px solid var(--color-sliderBorder) !important;
    height: 6px !important;
    border-radius: 3px !important;
  }

  /* Track — parte preenchida (à esquerda do handle) */
  && .ant-slider-track {
    background-color: var(--color-sliderHandle) !important;
    height: 6px !important;
    border-radius: 3px !important;
  }

  /* Handle — no AntD 5 o círculo visível é o ::after */
  && .ant-slider-handle {
    &::after {
      background-color: var(--color-sliderHandle) !important;
      box-shadow: 0 0 0 2px var(--color-sliderHandle) !important;
      margin-top: 1px !important;
    }
  }

  && .ant-slider-dot {
    background-color: var(--color-sliderBG) !important;
    border: 1px solid var(--color-sliderBorder) !important;
    margin-top: 1px !important;
  }

  /* Estado hover */
  && .ant-slider:hover .ant-slider-handle::after {
    box-shadow: 0 0 0 3px var(--color-sliderHandle) !important;
  }
`
