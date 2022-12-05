import React, {Component} from 'react'
import './Join.css'

export default class Join extends Component{

    componentDidMount(){
        fetch("http://localhost:7000/join", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*"
            }, 
            body: JSON.stringify({
             token: window.localStorage.getItem("token"),
            }),
          }).then((res) => res.json())
          .then((data) => {
            console.log(data, "userData");
            alert('Sign up succesful')
          })
            
    }
  render() {
  return (
    
    <div className='join-container'>


 <header>
 <h1>ChatApp</h1>
 </header>
 <div className='main'>
    <form className="chat.html">
    <div classname ="form-control">
        <label for="username">Username</label>
        <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter username..."
            required
        />
    </div>
    <div classname="form-control">
        <label for="room">Room</label>
        <select name="room" className='select' id="room">
            <option value="Room 1">Room 1</option>
            <option value="Room 2">Room 2</option>
            <option value="Room 3">Room 3</option>
            <option value="Room 4">Room 4</option>
        </select>
    </div>

    <button type="submit" className="btn">Join Chat</button>
				</form>

    </div>
    
    </div>
    )
      }
}




