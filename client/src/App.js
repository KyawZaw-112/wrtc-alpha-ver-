import LobbyScreen from './screen/Lobby.jsx';
import {Routes,Route} from "react-router-dom"
import './App.css';
import RoomPage from './screen/Room.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LobbyScreen/>} />
        <Route path="/room/:roomId" element={<RoomPage/>} />
      </Routes>
    </div>
  );
}

export default App;
