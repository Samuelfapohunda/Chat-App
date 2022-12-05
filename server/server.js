const express = require("express");
const http = require('http');
const app = express();
const PORT = 7000;
const routes = require("./routes/auth");
const chatDB = require("./database/db")
const cors = require("cors")
const bodyParser = require("body-parser")
const server = http.createServer(app);
const socketio = require ('socket.io');
const io = socketio(server);
const path = require('path');



const JWT_SECRET =  "decryptpassword1111"


app.use(cors())

app.use(bodyParser.json());
app.use(routes)



//Run when client connects 
io.on('connection', socket => {
    socket.on('joinRoom', ({ username, room}) => {
 
     const user = userJoin(socket.id,username, room);
     socket.join(user.room)
 
 
 
 
   //Welcome Current user(to single client connecting)
   socket.emit('message', formatMessage(botName, 'Welcome to ChatCord'));
 
 
 
   //Broadcast when a user connects(to everyone except the client connecting)
   socket.broadcast.to(user.room).emit('message',  formatMessage(botName, `${user.username} has joined the chat`));
 
 
    //Send users and room info
    io.to(user.room).emit('roomUsers', {
     room: user.room,
     users: getRoomUsers(user.room)
   });
 
    });
 
 
   
 
 
 
   
      //Listen for chatMessage
         socket.on('chatMessage', msg => {
             const user = getCurrentUser(socket.id)
             io.to(user.room).emit('message', formatMessage(user.username , msg));
     });
 
      //Runs when client disconnects (all clients)
     socket.on('disconnect', () => {
         const user = userLeave(socket.id);
 
         if(user) {
                io.to(user.room).emit('message', formatMessage(botName, `${user.username} has left the chat`));
                  
                
                //Send users and room info
      io.to(user.room).emit('roomUsers', {
         room: user.room,
         users: getRoomUsers(user.room)
          })
         }
 
      
 
     })
 
 
 });
 



chatDB().then(() => {
    app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});
});