import { render } from 'react-dom';
import Register from './Register.js'
import React from "react"
class  GuestGreeting extends React.Component {
    constructor(props){
        super(props);
        this.state = {isRegisterVisible: false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState({isRegisterVisible: true});
    }
    render(){
        return(
            <div>
                <h1>Sign In</h1>
                <label>Username</label>
                <input type="text" placeholder="enter username"></input>
                <label>Password</label>
                <input type="password" placeholder="enter password"></input>
                <button>Log In</button>
                <button onClick={this.handleClick}>Register</button>
                {this.state.isRegisterVisible ? <Register /> : null}
            </div>
        );
    }
}
export default GuestGreeting;