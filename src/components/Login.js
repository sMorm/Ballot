import React, { Component } from 'react';

import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

import './styles/Login.css'

class Login extends Component {
  constructor(){
    super();
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onRegister = this.onRegister.bind(this);
    this.state = {
      username: '',
      password: '',
      newUser: false,
    }
  }
  onSubmit(event){
    event.preventDefault();
    console.log(this.state)
  }
  onChange(event){
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
  onRegister(){
    this.setState({ newUser: !this.state.newUser })
  }
  render(){
    return(
      <div>
        {
          this.state.newUser
          ?
            <RegisterForm 
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            onRegister={this.onRegister}/>
          :
            <LoginForm 
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            onRegister={this.onRegister}/>
        }
      </div>
    )
  }

}
export default Login

/*

*/