import styled from "styled-components"
export default function CardA(props){
    const reservas = props.reservas
    const setReservas = props.setReservas
    const assentos = props.assentos
    const setAssentos = props.setAssentos
    function selectSeat(){
        if(!props.av){
            alert("Esse assento não está disponível")
            return;
        }
        if(reservas.includes(props.id)){
            const rer = reservas.filter(i => i!==props.id)
            const rer2 = assentos.filter(j => j!==props.n)
            setReservas(rer)
            setAssentos(rer2)
            return;
        }
        setReservas([ ...reservas, props.id])
        setAssentos([ ...assentos, props.n])
    }
    if(reservas.includes(props.id)){
        return (<Butani data-test="seat" onClick={selectSeat}>{props.n}</Butani>)
    }
    return (
        <Butan data-test="seat" onClick={selectSeat} av={props.av}>{props.n}</Butan>
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
const Butani = styled.button`
width: 26px;
height: 26px;
background: #1AAE9E;;
border: 1px solid #0E7D71;
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