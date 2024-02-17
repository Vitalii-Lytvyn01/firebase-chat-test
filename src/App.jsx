import { useRef, useState } from 'react';
import './App.scss';
import { Auth } from './components/Auth';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function App() {
  const [isAuth,setIsAuth] = useState(cookies.get(('auth-token')));
  const [selectedRoomId, setSelectedRoomId] = useState(null);
  const roomId = useRef(null);

  const roomInputRef = useRef(null);

  function handleRoomInput(e) {
    roomInputRef.current = e.target.value;
  }

  function handleRoomSelect() {
    console.log(roomInputRef.current);
    setSelectedRoomId(roomInputRef.current);
  }

  if(!setIsAuth) {
    return (
      <>
      <Auth setIsAuth={setIsAuth}/>
      </>
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
            value={roomId.current}
            onChange={(e) => handleRoomInput(e)}
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
      "Chat"
    }
  </>

}

export default App
