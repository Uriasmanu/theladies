
import styled from 'styled-components';
import logo from '/logo.png';
import shop from "/compra.svg";
import menu from "/menu.svg"

const ContainerNavBar = styled.div`
    display: flex;
    justify-content: space-between;
`

const NavBar = () => {
    return (
        <ContainerNavBar>
            <img src={logo} alt="logo" />
            <div>
                <img src={shop} alt="icone de bolsa de compra" />
                <img src={menu} alt="icone do menu" />
            </div>
        </ContainerNavBar>
    )
}

export default NavBar;