import styled from "styled-components"
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Form(props){
    const navigate = useNavigate()
    const setName = props.setName
    const setCpf = props.setCpf
    function prosseguir(event){
        event.preventDefault();
        if(props.reservas.length === 0){
            alert('Selecione pelo menos 1 assento')
            return
        }
        const ccc = props.cpf.replace('.', '')
        const ddd = ccc.replace('-', '')
        const obj = {
            ids: props.reservas,
            name: props.name,
            cpf: ddd
        }
        const promise = axios.post('https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many', obj)
        promise.then(() => navigate('/sucesso'))
    }
    return(
    <Furm onSubmit={prosseguir}>
        <p>Nome do comprador:</p>
        <input data-test="client-name" value={props.name} onChange={(e) => setName(e.target.value)} required type='text' placeholder="Digite seu nome..."/>
        <p>CPF do comprador:</p>
        <input data-test="client-cpf" value={props.cpf} onChange={(e) => setCpf(e.target.value)} required type="text" name="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" title="Digite um CPF no formato: xxx.xxx.xxx-xx" placeholder="Digite seu CPF..."/>
        <button data-test="book-seat-btn">Reservar assento(s)</button>
    </Furm>
    )
}

const Furm = styled.form`
p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #293845;
margin-top: 10px;
}
input{
    width: 327px;
height: 51px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
border-radius: 3px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #000000;
padding-left: 18px;
margin-bottom: 7px;
margin-top: 3px;
::placeholder{font-family: 'Roboto';
font-style: italic;
font-weight: 400;
font-size: 18px;
line-height: 21px;
color: #AFAFAF;}
:focus{outline: none;}
}
button{
    width: 225px;
height: 42px;
background: #E8833A;
border-radius: 3px;
border: none;
margin-block: 50px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 0.04em;
margin-inline: auto;
color: #FFFFFF;
}
margin-bottom:100px;
padding-inline: 24px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
& p:nth-child(1){
    position: relative;
    left: -79px;
  }
& p:nth-child(3){
    position: relative;
    left: -87px;
  }
`
