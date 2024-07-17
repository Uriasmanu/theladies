import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { productsInfo } from '../../../../../Infos/infos';
import { useMenuContext } from '../../../../../Context';

const slideIn = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 200%;
  background: #FFFAFA;
  animation: ${({ $estaAberto }) => ($estaAberto ? slideIn : slideOut)} 0.3s ease-in-out;
  display: ${({ $isAnimating, $estaAberto }) => (!$estaAberto && !$isAnimating ? 'none' : 'flex')};
  flex-direction: column;
  padding: 9% 5%;
  z-index: 2;
  align-items: flex-start;

  .group {
    display: flex;
    line-height: 28px;
    align-items: center;
    position: relative;
    max-width: 230px;
  }

  .input {
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    width: 100%;
    padding-left: 2.5rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #FCDCCD;
    color: #0d0c22;
    box-shadow: 0 0 5px #fff0e9, 0 0 0 10px #f5f5f5eb;
    transition: .3s ease;
  }

  .input::placeholder {
    color: #B57D62;
  }

  .icon {
    position: absolute;
    left: 1rem;
    fill: #B57D62;
    width: 1rem;
    height: 1rem;
  }

  .pesquisa{
    .cardBusca{
      display: flex;
      margin-top: 10%;
      gap: 5%;
      width: 90vw;
      align-items: center;

      img{
        width: 40%;
        height: auto;
      }

      .containerInform{
        display: flex;
        flex-direction: column;

        h2{
          color: #420238;
          margin-bottom: 6%;
        }

        p{
          color: #B97FB0;
          margin-bottom: 6%;

        }

        button{
          background: #FAAB89;
          border: none;
          padding: 2%;
          border-radius: 6px;

          a{
            text-decoration: none;
            color: #420238;

          }
        }

      }
    }
  }
`;

const MenuAberto = () => {
  const { estaAberto, isAnimating, setIsAnimating } = useMenuContext();
  const [buscar, setBuscar] = useState("");
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const resultados = productsInfo.cards.filter(produto =>
      produto.titulo.toLowerCase().includes(buscar.toLowerCase())
    );
    setProdutos(resultados);
  }, [buscar]);

  useEffect(() => {
    if (!estaAberto && isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Duração da animação

      return () => clearTimeout(timer);
    }
  }, [estaAberto, isAnimating, setIsAnimating]);

  return (
    <MenuContainer $estaAberto={estaAberto} $isAnimating={isAnimating}>
      <div className="group">
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21 19.56l-5.75-5.75a7.5 7.5 0 1 0-1.41 1.41L19.56 21a1 1 0 0 0 1.41-1.41zM10 16a6 6 0 1 1 0-12 6 6 0 0 1 0 12z"></path>
          </g>
        </svg>
        <input
          type="text"
          className="input"
          placeholder="Buscar produtos..."
          value={buscar}
          onChange={(e) => setBuscar(e.target.value)}
        />
      </div>
      <div className='pesquisa'>
        {buscar && produtos.map(produto => (
          <div key={produto.titulo} className='cardBusca'>
            <img src={produto.imagem} alt={produto.titulo} />
            <div className='containerInform'>
              <h2>{produto.titulo}</h2>
              <p>{produto.descricao}</p>
              <button>
                <a href={produto.link}>Ver mais</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </MenuContainer>
  );
};

export default MenuAberto;
