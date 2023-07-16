import React, { useContext } from 'react'
import { ChatContext } from '../context/chatContext'

function Chat() {
    const { userChats,userChatLoading,userChatError} = useContext(ChatContext);

    console.log("UserChats",userChats);

  return (
    <h1>Hello World</h1>
  )
}

export default Chat