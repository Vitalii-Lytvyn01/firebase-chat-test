import { useRef, useState } from 'react';
import './App.css';
import { Auth } from './components/Auth';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function App() {
  const [isAuth,setIsAuth] = useState(cookies.get(('auth-token')));
  const [roomId,setRoomId] = useState(null);

  const roomInputRef = useRef(null);

  return (
    <>
    <Auth setIsAuth={setIsAuth}/>
    </>
  )
}

export default App
