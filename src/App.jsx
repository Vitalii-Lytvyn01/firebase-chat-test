import { useRef, useState } from 'react';
import './App.scss';
import { Auth } from './components/Auth';
import { Chat } from './components/Chat/Chat';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function App() {
  const [isAuth,setIsAuth] = useState(cookies.get(('auth-token')));
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const roomInput = useRef(null);

  function handleRoomSelect() {
    console.log(roomInput.current.value);
    setSelectedRoomId(roomInput.current.value);
  }

  if(!isAuth) {
    return (
      <Auth setIsAuth={setIsAuth}/>
    )
  }

  return <>
    {
      !selectedRoomId ?
        <div className="room-select">
          <p>
            Input room ID
          </p>
          <input
            ref={roomInput}
            type="text"
            name="room-input"
            id="room-input"
            className='room-input'
            />
            <div
              className="room-button"
              onClick={handleRoomSelect}
            >Select</div>
        </div>
      :
      <Chat roomId={selectedRoomId}/>
    }
  </>

}

export default App
