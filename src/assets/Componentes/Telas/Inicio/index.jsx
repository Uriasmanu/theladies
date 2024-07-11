import styled from "styled-components";
import Header from "../../Header";
import Main from "../../Main";
import Footer from "../../Footer";


const ContainerInicio = styled.div`
display: flex;
flex-direction: column;
`



const Inicio = () => {
    return (
        <ContainerInicio>
            <Header />
            <Main />
            <Footer />
        </ContainerInicio>
    )
}

export default Inicio;