import React from 'react';

const RegisterForm = (props) => {
  return(
    <div className='loginContainer'>
      <h1> Register </h1>
      <form onSubmit={props.onSubmit}>
        <input 
        type='text' 
        name='username' 
        placeholder='E-Mail'
        onChange={props.onChange}
        required/>

        <input 
        type='password'
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