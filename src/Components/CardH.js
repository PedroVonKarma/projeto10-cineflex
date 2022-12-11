import styled from "styled-components"
export default function CardH(props){
    return(<Card><p>{props.w} - {props.d}</p><button>{props.fh}</button> <button>{props.sh}</button></Card>)
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
