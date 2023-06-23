// "use client"
// import {socketclient} from './socketclient'
// import ChatApp from './ChatApp.js';
import Topheader from './UIcomponents/Topheader'
import Secondheader from './UIcomponents/Secondheader'
import ChatScreen from './UIcomponents/ChatScreen'
function Home(){
  return(
    <div>
      <Topheader/>
      <Secondheader/>
      <ChatScreen/>
    </div>
  )
}

export default Home;