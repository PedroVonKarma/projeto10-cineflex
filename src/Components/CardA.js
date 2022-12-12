import styled from "styled-components"
export default function CardA(props){
    return (
        <Butan disabled={!props.av} av={props.av}>{props.n}</Butan>
    )
}

const Butan = styled.button`
width: 26px;
height: 26px;
background: ${props => props.av ? '#C3CFD9' : '#FBE192'};
border: 1px solid ${props => props.av ? '#7B8B99' : '#F7C52B'};
border-radius: 12px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 11px;
line-height: 13px;
letter-spacing: 0.04em;
color: #000000;
margin-inline: 4px;
margin-block: 9px;
`