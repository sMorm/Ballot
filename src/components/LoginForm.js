import React from 'react';

const LoginForm = (props) => {
  return(
    <div className='loginContainer'>
      <h1> Login </h1>
      <form onSubmit={props.onSubmit}>
        <input 
        type='text' 
        name='username' 
        placeholder='Username'
        onChange={props.onChange}
        required/>

        <input 
        type='text'
        name='password'
        placeholder='Password' 
        onChange={props.onChange}
        required/>

        <p onClick={props.onRegister}>New User?</p>

        <button>Login</button>
      </form>
    </div>
  )
}

export default LoginForm;