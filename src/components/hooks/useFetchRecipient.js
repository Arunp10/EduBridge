import { useState, useEffect } from "react";
import { baseUrl, getRequest } from "../utils/server";

export const useFetchRecipientUser = (chat, user) => {
  const [RecipientUser, setRecipientUser] = useState(null);
  const [error, seterror] = useState(null);

  const recipientId = chat?.members.find((id) => id !== user?._id);

  useEffect(() => {
    const getUser = async () => {
      if (!recipientId) return null;
      const response = await getRequest(`${baseUrl}/users/find/${recipientId}`);

      if (response.error) {
        return seterror(error);
      }

      setRecipientUser(response);
    };
    getUser();
  }, [RecipientUser]);
  return { RecipientUser };
};
