import styled from 'styled-components';
import Cards from './Cards';
import { useCarouselScroll } from '../../Context';
import infos from '../../Infos/infos.json';


const ContainerCarrossel = styled.div`
  display: flex;
  flex-direction: column;

  .TituloTrabalhos {
    h2 {
      font-size: 350%;
      margin: 5% 18%;
    }
  }

  .CarroselCards {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;

    width: 100%;
  }

  .CarroselCards::-webkit-scrollbar {
    display: none; /* Ocultar barra de rolagem */
  }
`;

const CardWrapper = styled.div`
  flex: 0 0 auto; 
  margin-right: 20px; 
`;

const CarrosselCards = () => {
  const { carrosselRef } = useCarouselScroll();


  return (
    <ContainerCarrossel id="container-Carrossel">
    <div className="CarroselCards" ref={carrosselRef}>
      {infos.cards.map((card, index) => (
        <CardWrapper key={`card-${index}`}>
          <Cards title={card.titulo} description={card.descricao} image={card.imagem} link={card.link} />
        </CardWrapper>
      ))}
    </div>
  </ContainerCarrossel>
  );
};

export default CarrosselCards;
