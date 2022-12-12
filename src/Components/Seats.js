import styled from "styled-components"
import { useParams } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import Footer2 from "./Footer2"
import CardA from "./CardA"
import Legenda from "./Legenda"
import Form from "./Form"
export default function Seats(props){
    const [assent, setAssent] = useState([])
    const { idSessao } = useParams();
    const [listaAssentos, setListaAssentos] = useState([])
    const [reservas, setReservas] = useState([])
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);

        requisicao.then(res => {
            setAssent(res.data);
            setListaAssentos(res.data.seats);
        });
    }, [])
    if (assent.length === 0) {
        return (<Titulo><p>Carregando assentos...</p></Titulo>)
    }
    
    return(
        <>
        <Titulo><p>Selecione o(s) assento(s)</p></Titulo>
        <Assentos>{listaAssentos.map((i) => <CardA assentos={props.assentos} setAssentos={props.setAssentos} reservas={reservas} setReservas={setReservas} key={i.id} id={i.id} n={i.name} av={i.isAvailable}/>)}</Assentos>
        <Legenda/>
        <Form reservas={reservas} name={props.name} cpf={props.cpf} setName={props.setName} setCpf={props.setCpf}/>
        <Footer2 img={assent.movie.posterURL} name={assent.movie.title} w={assent.day.weekday} h={assent.name}/>
        </>
    )
}

const Titulo = styled.div`
margin-top: 67px;
width: 100%;
height: 110px;
display: flex;
justify-content: center;
align-items: center;
p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.04em;
color: #293845;
}`

const Assentos = styled.div`
width: 100%;
height: 200px;
display: flex;
justify-content: center;
flex-wrap: wrap;
padding-inline: 24px;
`