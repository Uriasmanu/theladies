import styled from "styled-components";

const ContainerTitulo = styled.div`
    h1{
        font-size: 3rem;
        font-weight: 700;
        color: #420238;
        font-family: "Arbutus Slab", serif;
    }

    p{
        font-size: 1.5rem;
        color: #420238;
        font-family: "Arbutus Slab", serif;

    }
`

const Titulo = () => {
    return (
        <ContainerTitulo>
            <h1>Essência</h1>
            <p>Para mulheres autênticas e poderosa</p>
        </ContainerTitulo>
    )
}

export default Titulo;