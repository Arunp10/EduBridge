import React, { useContext } from "react";
import { ChatContext } from "../context/chatContext";

function PotentialChats(props) {
  const { potentialChats, createChat, onlineUsers } = useContext(ChatContext);
  const { user } = props;

  return (
    <div className="all-users">
      {potentialChats &&
        potentialChats.map((u, index) => {
          return (
            <div
              className="single-user"
              key={index}
              onClick={() => createChat(user._id, u._id)}
            >
              {u.firstName} {u.lastName}
              <span
                className={
                  onlineUsers?.some((user) => user?.userId === u?._id)
                    ? "user-online"
                    : ""
                }
              ></span>
            </div>
          );
        })}
    </div>
  );
}

export default PotentialChats;
