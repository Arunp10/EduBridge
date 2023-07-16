import { createContext, useState, useEffect } from "react";
import { getRequest, baseUrl, postRequest } from "../utils/server";
import { useCallback } from "react";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState(null);
  const [userChatLoading, setuserChatLoading] = useState(null);
  const [userChatError, setuserChatError] = useState(null);
  const [potentialChats, setpotentialChats] = useState(null);
  const [currentChats, setcurrentChats] = useState(null);
  
  useEffect(() => {
    const getUserChats = async () => {
      setuserChatLoading(true);
      setuserChatError(null);

      if (user?._id) {
        const response = await getRequest(`${baseUrl}/chats/${user?._id}`);
        setuserChatLoading(false);
        if (response.error) {
          return setuserChatError(response);
        }
        setUserChats(response);
      }
    };

    getUserChats();
  }, [user]);

  //UseEffect for getAllUsers
  useEffect(() => {
    const getUsers = async () => {
      const response = await getRequest(`${baseUrl}/users/getAllUsers`);
      if (response.error) {
        return console.log("Error fetching users...", response);
      }
      const pChats = response.filter((u) => {
        let isChatCreated = false;
        if (user._id === u._id) return false;

        if (userChats) {
          isChatCreated = userChats?.some((chat) => {
            return chat.members[0] === u._id || chat.members[1] === u._id;
          });
        }
        return !isChatCreated;
      });
      setpotentialChats(pChats);
    };

    getUsers();
  }, [userChats]);

  //Fetch the Current Chat
  const updateCurrentChat = useCallback((chat)=>{
    setcurrentChats(chat)
  },[])

  const createChat = useCallback(async(firstId,secondId)=>{
    const response = await postRequest(`${baseUrl}/chats`,{
      firstId,secondId
    });
    if(response.error){
      return console.log("Error cheating Chat",response);
    }
    setUserChats((prev)=>[...prev,response])

  },[])
  return (
    <ChatContext.Provider
      value={{
        userChats,
        userChatLoading,
        userChatError,
        potentialChats,
        createChat,
        updateCurrentChat
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
