import {React, useState} from 'react'
import './SignUp.css'


function SignUp() {

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

const handleSubmit = async (e) => {
  e.preventDefault()

  console.log( firstname, lastname, email, password);
  fetch("http://localhost:7000/signup", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "Access-Control-Allow-Origin": "*"
    }, 
    body: JSON.stringify({
      firstname,
      email,
      lastname,
      password
    }),
  }).then((res) => res.json())
  .then((data) => {

    if(data.status==="ok"){
    console.log(data, "user registered");
     }else{
      console.log("User Already Exists")
     }
   
    if(data.status==="ok"){
      window.location.href="/successful";  
    } if(data.status ==="error"){
     
      document.getElementById('slime').innerHTML="Something went wrong!!"
    }
  })
    
  
  }

  return (
    <div className='signup-container'>
 
    <div className="main">
    <form className="signup" onSubmit={handleSubmit}>
      <header><h1>Sign Up</h1>
      <div>
<p style={{
  color: "red"
}} id='slime'></p>

</div>
      </header>
   


<div className="form-control">
  <label>First Name:</label>
<input
type="firstname"
onChange={(e) => setFirstname(e.target.value)}
value={firstname}
/>
</div>

    <div className="form-control">
      <label>Last name:</label>
<input
type="lastname"
onChange={(e) => setLastname(e.target.value)}
value={lastname}
/>
    </div>


    <div className="form-control">
      <label>Email:</label>
<input
type="email"
onChange={(e) => setEmail(e.target.value)}
value={email}
/>
      </div>



      <div className="form-control">
      <label>Password:</label>
<input
type="password"
onChange={(e) => setPassword(e.target.value)}
value={password}
 />
      </div>


<button  className='btn'>Sign Up</button>

<div style={{
   textAlign: 'right',
   width: '104%',
   marginTop: 5,
  
}}>
  <a href="/login" style={{
    color: 'green',
    fontSize: 'large'
  }}>Sign In</a>
</div>


  </form>

    </div>
 
    </div>
  )
}

export default SignUp