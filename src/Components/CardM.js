import styled from "styled-components"
import { useNavigate } from "react-router-dom"
export default function CardM(props){
    const id = props.id
    const name = props.name
    const setMovieName = props.setMovieName
    const setMovieURL = props.setMovieURL
    const navigate = useNavigate()
    function select(){
        setMovieName(name)
        setMovieURL(props.url)
        navigate(`/sessoes/${id}`)
    }
    
    return (
        <Poster data-test="movie" onClick={select}><img src={props.url} alt='Poster do filme'></img></Poster>
    )
}

const Poster = styled.div`
width: 145px;
height: 209px;
margin-inline: 30px;
margin-block: 7px;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
border-radius: 3px;
display: flex;
justify-content: center;
align-items: center;
img{
    width: 129px;
height: 193px;
object-fit: cover;
}
`