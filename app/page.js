// "use client"
// import {socketclient} from './socketclient'
// import ChatApp from './ChatApp.js';
import Topheader from './UIcomponents/Topheader'
import Secondheader from './UIcomponents/Secondheader'
import ChatScreen from './UIcomponents/ChatScreen'
import Chatbg from './UIcomponents/Chatbg'
function Home(){
  return(
    <div>
      <Topheader/>
      <Secondheader/>
      <ChatScreen/>
      {/* <Chatbg/> */}
    </div>
  )
}

export default Home;