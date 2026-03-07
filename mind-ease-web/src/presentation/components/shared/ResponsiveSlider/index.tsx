import { Slider } from "antd";
import * as S from "./styles";
import { SliderSingleProps } from "antd/es/slider";

interface ResponsiveSliderProps extends SliderSingleProps {

}

export function ResponsiveSlider({ ...props }: ResponsiveSliderProps) {
  return (
    <S.ResponsiveSliderContainer>
      <Slider
        {...props}
      />
    </S.ResponsiveSliderContainer>
  )
}
