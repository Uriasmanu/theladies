import styled from "styled-components";
import CarrosselCards from "../../CarrosselCards";

const ContainerDestaques = styled.div`
    display: flex;
    background: #fff;
    position: relative;
    left: -21px;
    width: 100vw;
    height: auto;
    padding: 5% 0;

    h2{
        font-size: 2rem;
        font-weight: 700;
        color: #420238;
        font-family: "Arbutus Slab", serif;
        margin-top: 20%;
        display: flex;
        width: 100%;
        justify-content: center;
        margin-bottom: 10%;
    }

    @media screen and (max-width: 738px) {
        flex-direction: column;
    }

`

const Destaques = () => {
    return (
        <ContainerDestaques>
            <h2>--- Destaques ---</h2>
            <CarrosselCards/>
        </ContainerDestaques>
    )
}

export default Destaques;