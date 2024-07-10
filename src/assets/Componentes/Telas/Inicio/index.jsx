import styled from "styled-components";
import NavBar from "../../Header/NavBar/mobile";
import Titulo from "../../Header/Titulo";

const ContainerInicio = styled.div`
display: flexbox;
flex-direction: column;
`



const Inicio = () => {
    return (
        <ContainerInicio>
            <NavBar />
            <Titulo />
        </ContainerInicio>
    )
}

export default Inicio;