import React from 'react';

const RegisterForm = (props) => {
  return(
    <div className='loginContainer'>
      <h1> Register </h1>
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

        <p onClick={props.onRegister}>Existing User?</p>

        <button>Create an account</button>
      </form>
    </div>
  )
}

export default RegisterForm;