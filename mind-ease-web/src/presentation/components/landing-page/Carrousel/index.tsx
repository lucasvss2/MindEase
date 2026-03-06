import { Carousel } from 'antd';
import Carrousel1 from '@/assets/images/carrousel-1.png'
import Carrousel2 from '@/assets/images/carrousel-2.png'
import Carrousel3 from '@/assets/images/carrousel-3.png'
import Carrousel4 from '@/assets/images/carrousel-4.png'
import * as S from './styles'

export function LandingPageCarrousel() {

  return (
    <S.CarouselContainer>
      <Carousel autoplay dots>
        <div>
          <S.Content>
            <img src={Carrousel1} alt="MindEase-logo" />
            <S.TextContainer>
              <strong>Sua mente parece sobrecarregada?</strong> Dê o primeiro passo para desfazer o nó da ansiedade e do caos mental.
            </S.TextContainer>
          </S.Content>
        </div>
        <div>
          <S.Content>
            <img src={Carrousel2} alt="MindEase-logo" />
            <S.TextContainer>
              <strong>Transforme confusão em foco. </strong> Nossas ferramentas ajudam a organizar seus pensamentos e encontrar clareza em meio à tempestade.
            </S.TextContainer>
          </S.Content>
        </div>
        <div>
          <S.Content>
            <img src={Carrousel3} alt="MindEase-logo" />
            <S.TextContainer>
              <strong>Cultive o equilíbrio duradouro. </strong> Alcance um estado de serenidade onde sua mente pode florescer com tranquilidade.
            </S.TextContainer>
          </S.Content>
        </div>
        <div>
          <S.Content>
            <img src={Carrousel4} alt="MindEase-logo" />
            <S.TextContainer>
              <strong>Bem-estar ao seu alcance, em qualquer lugar. </strong> Integre a calma à sua rotina diária. O Mindease está disponível agora para <strong>Android e iOS</strong>.
            </S.TextContainer>
          </S.Content>
        </div>
      </Carousel>
    </S.CarouselContainer>
  );
}
