import styled from "styled-components";
import CarrosselCards from "../../CarrosselCards";
import PropTypes from 'prop-types';

const ContainerDestaques = styled.div`
    display: flex;
    background: ${({ cor }) => cor};
    position: relative;
    left: -21px;
    width: 100vw;
    height: auto;
    padding: 5% 0;
    flex-direction: column;

    h2{
        font-size: 2rem;
        font-weight: 700;
        color: #420238;
        font-family: "Arbutus Slab", serif;
        display: flex;
        width: 100%;
        justify-content: center;
        margin-bottom: 10%;
    }


`

const Secoes = ({ titulo, cor }) => {
    return (
        <ContainerDestaques cor={cor}>
            <h2>--- {titulo} ---</h2>
            <CarrosselCards/>
        </ContainerDestaques>
    )
}

export default Secoes;

Secoes.propTypes = {
    titulo: PropTypes.node.isRequired,
    cor: PropTypes.string,
  };