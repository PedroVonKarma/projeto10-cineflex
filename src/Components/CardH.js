import styled from "styled-components"
import { useNavigate } from "react-router-dom"
export default function CardH(props){
    const id1 = props.fid
    const id2 = props.sid
    const setDay = props.setDay
    const setHour = props.setHour
    const navigate = useNavigate()
    function selectSection(id, h){
        setDay(props.d)
        setHour(h)
        navigate(`/assentos/${id}`)
    }
    return(<Card data-test="movie-day"><p>{props.w} - {props.d}</p><button data-test="showtime" onClick={() => selectSection(id1, props.fh)}>{props.fh}</button> <button data-test="showtime" onClick={() => selectSection(id2, props.sh)}>{props.sh}</button></Card>)
}

const Card = styled.div`
width: 100%;
padding: 24px;
p{
    font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 20px;
line-height: 23px;
letter-spacing: 0.02em;
color: #293845;
margin-bottom: 25px;
}
button{
    width: 82px;
height: 43px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: inline;
align-items: center;
text-align: center;
letter-spacing: 0.02em;
color: #FFFFFF;
margin-inline: 5px;
background: #E8833A;
border-radius: 3px;
border: none;

}
`
