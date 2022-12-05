import React from 'react'
import './Chat.css'


function Chat() {
  return (
    <div class="chat-container">
    <header class="chat-header">
      <h1> ChatApp</h1>
      <a href="/join" class="btn">Leave Room</a>
    </header>
    <div class="chat-main">
      <div class="chat-sidebar">
        <h3><i class="fas fa-comments"></i> Room Name:</h3>
        <h2 id="room-name"></h2>
        <h3><i class="fas fa-users"></i> Users</h3>
        <ul id="users">
         
        </ul>
      </div>
      <div class="chat-messages">
					
      </div>
    </div>
    <div class="chat-form-container">
      <form id="chat-form">
        <input
          id="msg"
          type="text"
          placeholder="Enter Message"
          required
          autocomplete="off"
        />
        <button class="btn"><i class="fas fa-paper-plane"></i> Send</button>
      </form>
    </div>
  </div>
  )
}

export default Chat