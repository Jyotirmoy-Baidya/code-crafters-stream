import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'

import AgoraRTC, {
  AgoraRTCProvider,
  useRTCClient,
} from "agora-rtc-react";

import LiveVideo from './components/LiveVideo';
import ConnectForm from './components/ConnectFrom';

function App() {
  const navigate = useNavigate()
  const agoraClient = useRTCClient(AgoraRTC.createClient({ codec: "vp8", mode: "rtc" })); // Initialize Agora Client

  const handleConnect = (channelName) => {
    navigate(`/via/${channelName}`) // on form submit, navigate to new route
  }

  return (
    <Routes>
      <Route path='/' element={<ConnectForm connectToVideo={handleConnect} />} />
      <Route path='/via/:channelName' element={
        <AgoraRTCProvider client={agoraClient}>
          <LiveVideo />
        </AgoraRTCProvider>
      } />
    </Routes>
  )
}

export default App