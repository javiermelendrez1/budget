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
                <button onClick={this.handleClick}>Register</button>
                {this.state.isRegisterVisible ? <Register /> : null}
            </div>
        );
    }
}
export default GuestGreeting;