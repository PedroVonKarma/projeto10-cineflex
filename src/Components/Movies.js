import axios from "axios"
import { useState, useEffect } from "react"
import styled from "styled-components"
import CardM from "./CardM"
export default function Movies(props) {
    const [items, setItems] = useState([])
    useEffect(() => {
        const requisicao = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies");

        requisicao.then(res => {
            setItems(res.data);
        });
    }, [])

    if (items.length === 0) {
        return (<Titulo><p>Carregando filmes...</p></Titulo>)
    }

    return (
        <>
            <Titulo><p>Selecione o filme</p></Titulo>
            <Films>{items.map((i) => <CardM setMovieURL={props.setMovieURL} setId={props.setId} setMovieName={props.setMovieName} id={i.id} name={i.title} key={i.id} url={i.posterURL}/>)}</Films>
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
}
`
const Films = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
`


