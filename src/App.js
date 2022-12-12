import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movies from "./Components/Movies";
import Sections from "./Components/Sections";
import { useState } from "react";
import Seats from "./Components/Seats";
function App() {
  const [id, setId] = useState('');
  const [movieName, setMovieName] = useState('');
  const [movieURL, setMovieURL] = useState('')
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Movies setMovieURL={setMovieURL} setId={setId} setMovieName={setMovieName}/>}/>
      <Route path='/sessoes/:idFilme' element={<Sections movieURL={movieURL} movieName={movieName}/>}/>
      <Route path='/assentos/:idSessao' element={<Seats/>}/>
      {/*<Route path='/sucesso' element={}/> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
