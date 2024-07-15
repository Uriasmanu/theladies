import styled from 'styled-components';
import logo from '/logo.png';
import menu from "/menu.svg";
import close from "/close.svg";
import { useMenuContext } from '../../../../Context';
import MenuAberto from './MenuAberto';


const ContainerNavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .menuIcon {
    z-index: 3;
    position: relative;
  }
`;

const NavBar = () => {
  const { estaAberto, abrirMenu } = useMenuContext();

  return (
    <ContainerNavBar>
      <img src={logo} alt="logo" />
      <div>
        <img
          src={estaAberto ? close : menu}
          alt="icone do menu"
          onClick={abrirMenu}
          className="menuIcon"
        />
      </div>
      <MenuAberto />
    </ContainerNavBar>
  );
};

export default NavBar;
