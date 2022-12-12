import styled from "styled-components"
import axios from "axios"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CardH from "./CardH"
import Footer from "./Footer"
export default function Sections(props){
    const [sessoes, setSessoes] = useState([])
    const { idFilme } = useParams();
    useEffect(() => {
        const requisicao = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`);

        requisicao.then(res => {
            setSessoes(res.data.days);
        });
    }, [])
    if (sessoes.length === 0) {
        return (<Titulo><p>Carregando horários...</p></Titulo>)
    }

    return (
    <>
    <Titulo><p>Selecione o horário</p></Titulo>
    {sessoes.map((i) => <CardH setDay={props.setDay} setHour={props.setHour} key={i.id} w={i.weekday} d={i.date} fh={i.showtimes[0].name} sh={i.showtimes[1].name} fid={i.showtimes[0].id} sid={i.showtimes[1].id}/>)}
    <Footer img={props.movieURL} name={props.movieName}/>
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