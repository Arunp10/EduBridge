const { Server } = require("socket.io");

const io = new Server({cors: "http://localhost:3000"});
let onlineUser = []

io.on("connection", (socket) => {
    console.log("New Connection",socket.id)

    //Listen to new Connection
    socket.on("addNewUser",(userId)=>{
        !onlineUser.some(user=>user.userId === userId) &&
        onlineUser.push({
            userId,
            socketId : socket.id
        })
        console.log("Online Users",onlineUser);
        io.emit("getOnlineUsers",onlineUser)
    });
    

});



io.listen(5000);