import styled from "styled-components";

const VejaMais = styled.button`

          background: #FAAB89;
          border: none;
          padding: 2%;
          border-radius: 6px;

          a{
            text-decoration: none;
            color: #420238;

          }
`

const BotaoVejaMais = () =>{
    return(
        <VejaMais>Veja mais</VejaMais>
    )
}
export default BotaoVejaMais;