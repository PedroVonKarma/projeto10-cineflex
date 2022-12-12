import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Components/Movies";
import Sections from "./Components/Sections";
import { useState } from "react";
import Seats from "./Components/Seats";
import End from "./Components/End";
function App() {
  const [movieName, setMovieName] = useState('');
  const [movieURL, setMovieURL] = useState('')
  const [name, setName] = useState('')
  const [cpf, setCpf] = useState('')
  const [assentos, setAssentos] = useState([])
  const [day, setDay] = useState('')
  const [hour, setHour] = useState('')
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Movies setMovieURL={setMovieURL} setMovieName={setMovieName}/>}/>
      <Route path='/sessoes/:idFilme' element={<Sections setDay={setDay} setHour={setHour} movieURL={movieURL} movieName={movieName}/>}/>
      <Route path='/assentos/:idSessao' element={<Seats assentos={assentos} setAssentos={setAssentos} name={name} cpf={cpf} setName={setName} setCpf={setCpf} />}/>
      <Route path='/sucesso' element={<End name={name} cpf={cpf} assentos={assentos} movieName={movieName} day={day} hour={hour}/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
