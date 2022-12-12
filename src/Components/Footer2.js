import styled from "styled-components"
export default function Footer2(props){
    return(
        <Fut><div><img src={props.img} alt='Poster'/></div><p>{props.name}<br/>{props.w} - {props.h}</p></Fut>
    )
}
const Fut = styled.div`
position: fixed;
width: 100%;
height: 117px;
left: 0px;
bottom: 0px;
background: #DFE6ED;
border-top: 1px solid #9EADBA;
display: flex;
align-items: center;
z-index: 1;
div{
    width: 64px;
height: 89px;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
display: flex;
align-items: center;
justify-content: center;
margin-inline:10px;
img{
    width: 48px;
height: 72px;
object-fit: cover;
}
}
p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
color: #293845;
margin-inline:4px;
}
`