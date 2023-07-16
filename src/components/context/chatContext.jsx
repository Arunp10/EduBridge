import { createContext, useState, useEffect } from "react";
import { getRequest, baseUrl, postRequest } from "../utils/server";

export const ChatContext = createContext();

export const ChatContextProvider = ({ children, user }) => {
  const [userChats, setUserChats] = useState(null);
  const [userChatLoading, setuserChatLoading] = useState(null);
  const [userChatError, setuserChatError] = useState(null);

  useEffect(() => {
    const getUserChats = async () => {
      setuserChatLoading(true);
      setuserChatError(null);
      
      if (user?._id) {
        const response = await getRequest(`${baseUrl}/chats/${user?._id}`);
        setuserChatLoading(false);
        if (response.error)  {
          return setuserChatError(response);
        }
        setUserChats(response);
      }
    };

    getUserChats();
  }, [user]);

  return (
    <ChatContext.Provider
      value={{
        userChats,
        userChatLoading,
        userChatError,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};
