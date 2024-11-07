
import Header from './Components/Header'
import MovieCard from './Components/MovieCard'
import Login from './Components/Login'
import './App.css'
import { useEffect, useState } from 'react'
import Movies from './Components/Movies'


function App() {

  const [userName, setUserName] = useState("");


  return (
    <> 
      <Header user={userName} usName={userName} lgOut={setUserName}/>


      {
        userName ? <Movies/> : <Login setUser={setUserName}/>
      }
     

    </>
  );
}

export default App
