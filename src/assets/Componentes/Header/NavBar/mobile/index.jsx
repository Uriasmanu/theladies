import styled, { keyframes } from 'styled-components';
import logo from '/logo.png';
import shop from "/compra.svg";
import menu from "/menu.svg";
import close from "/close.svg";
import { useMenuContext } from '../../../../Context';
import { useEffect } from 'react';

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

const ContainerNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menuIcon {
    z-index: 3;
    position: relative;
  }

  .menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #FFFAFA;
    animation: ${({ $estaAberto }) => ($estaAberto ? slideIn : slideOut)} 0.3s ease-in-out;
    display: ${({ $isAnimating, $estaAberto }) => (!$estaAberto && !$isAnimating ? 'none' : 'flex')};
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
    z-index: 2;
    align-items: flex-start;
  }
`;

const NavBar = () => {
  const { estaAberto, abrirMenu, isAnimating, setIsAnimating } = useMenuContext();

  useEffect(() => {
    if (!estaAberto && isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300); // Duração da animação

      return () => clearTimeout(timer);
    }
  }, [estaAberto, isAnimating, setIsAnimating]);

  return (
    <ContainerNavBar $estaAberto={estaAberto} $isAnimating={isAnimating}>
      <img src={logo} alt="logo" />
      <div>
        <img src={shop} alt="icone de bolsa de compra" />
        <img
          src={estaAberto ? close : menu}
          alt="icone do menu"
          onClick={abrirMenu}
          className="menuIcon"
        />
      </div>
      <div className="menu"></div>
    </ContainerNavBar>
  );
};

export default NavBar;
