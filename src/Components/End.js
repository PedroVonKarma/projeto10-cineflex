import styled from "styled-components"
import { useNavigate } from "react-router-dom"
export default function End(props){
    const assentos = props.assentos
    const navigate = useNavigate()
    function reiniciar(){
        navigate('/')
        window.location.reload();
    }
    return (
        <>
        <Titulo><p>Pedido feito com sucesso!</p></Titulo>
        <Parag data-test="movie-info"><h1>Filme e sessão</h1><p>{props.movieName}</p><p>{props.day} {props.hour}</p></Parag>
        <Parag data-test="seats-info"><h1>Ingressos</h1>{assentos.map((i) => <p key={i} >Assento {i}</p>)}</Parag>
        <Parag data-test="client-info"><h1>Comprador</h1><p>Nome: {props.name}</p><p>CPF: {props.cpf}</p></Parag>
        <But><button data-test="go-home-btn" onClick={reiniciar}>Voltar pra Home</button></But>
        </>
    )
}

const Titulo = styled.div`
margin-top: 97px;
width: 100%;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.04em;
color: #247A6B;
}`


const Parag = styled.div`
width:100%;
padding-inline: 8%;
h1{font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.04em;
color: #293845;
margin-bottom: 13px;
margin-top: 30px;
}
p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
letter-spacing: 0.04em;
color: #293845;
margin-block: 3px;
}
`
const But = styled.div`
display:flex;
justify-content: center;
width: 100%;
button{width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 0.04em;
color: #FFFFFF;
border: none;}
margin-block: 70px;
`