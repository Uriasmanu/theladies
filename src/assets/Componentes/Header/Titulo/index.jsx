import styled from "styled-components";

const ContainerTitulo = styled.div`
    margin-bottom: 15%;
    z-index: 1;

    h1{
        font-size: 3rem;
        font-weight: 700;
        color: #420238;
        font-family: "Arbutus Slab", serif;
        margin-top: 10%;
    }

    p{
        font-size: 1.5rem;
        color: #420238;
        font-family: "Arbutus Slab", serif;
        margin-bottom: 20%;
    }

    .rosa{
        background: #FCAFA6;
        width: 100vw;
        height: 3.5rem;
        overflow: hidden;
        position: absolute;
        right: 0;
        border-radius: 0 0 25px 25px;
    }
`

const Titulo = () => {
    return (
        <ContainerTitulo>
            <h1>Essência</h1>
            <p>Para mulheres autênticas e poderosa</p>
            <div className="rosa"></div>
        </ContainerTitulo>
    )
}

export default Titulo;