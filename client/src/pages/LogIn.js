import {React, useState} from 'react'
import './LogIn.css'

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

const handleSubmit = async (e) => {
  e.preventDefault()

  console.log(email, password);

  fetch("http://localhost:7000/login", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*"
    }, 
    body: JSON.stringify({
     email,
      password
    }),
  }).then((res) => res.json())
  .then((data) => {
    if(data.status==="ok"){
      window.localStorage.setItem("token", data.data)
      window.location.href="/join";
    } else {
     
      document.getElementById('slim').innerHTML="Email or Password Mismatch!!"
    }
  })
}

  return (
    <div className='login-container'>
    

    <div className="main">
  <form className="Login" onSubmit={handleSubmit}>
  <header><h1>Log In</h1>
  
  <p style={{
  color: "red"
}} id='slim'></p>
</header>

<label>Email:</label>
<input
type="email"
onChange={(e) => setEmail(e.target.value)}
value={email}
/>


<label>Password:</label>
<input
type="password"
onChange={(e) => setPassword(e.target.value)}
value={password}
 />

<button  className='btn'>Sign In</button>
  </form>
  </div>
    </div>
  )
}

export default Login