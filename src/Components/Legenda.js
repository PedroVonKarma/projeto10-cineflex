import styled from "styled-components"
export default function Legenda(){
    return (
    <DivM>
        <DivB cor='#1AAE9E' borda='#0E7D71'><button></button><p>Selecionado</p></DivB>
        <DivB cor='#C3CFD9' borda='#7B8B99'><button></button><p>Disponível</p></DivB>
        <DivB cor='#FBE192'borda='#F7C52B'><button></button><p>Indisponível</p></DivB>
    </DivM>
    )
}

const DivM = styled.div`
display: flex;
justify-content: center;
width: 100%;
height: 70px;
margin-block: 25px;
`
const DivB = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-inline: 10px;

button{
    width: 25px;
height: 25px;
background: ${props => props.cor};
border: 1px solid ${props => props.borda};
border-radius: 17px;
}
p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 15px;
letter-spacing: -0.013em;
color: #4E5A65;
margin-top: 7px;
}
`
