import React from 'react'

function Success() {
  return (
    
    <div style={{
        textAlign: 'center',
        maxWidth: 500,
	margin: '80px auto',
	color: 'black'
    }}>
        <div className="main">
        <h1>Sign Up Successful</h1>

       <a href="/login"><button className='btn' style={{
            	marginTop: 20,
                width: '70%',
                height: 50,
                border: '1px solid rgb(179, 230, 179)',
                backgroundColor:  'rgb(179, 230, 179)',
                fontSize: 'large'
        }}>Sign In</button></a> 
        </div>
        </div>
  )
}

export default Success