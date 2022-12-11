import styled from "styled-components"
export default function Header(){
    return (
        <HeaderStyle><p>CINEFLEX</p></HeaderStyle>
    )
}

const HeaderStyle = styled.div`
position: fixed;
width: 100%;
height: 67px;
background: #C3CFD9;
left: 0px;
top: 0px;
z-index: 1;
p{font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 40px;
color: #E8833A;}
display: flex;
justify-content: center;
align-items: center;
`