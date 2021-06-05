import React from "react"
import Greeting from './Greeting.js';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {isLoggedIn: true};
  }
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    return(
      <Greeting isLoggedIn={isLoggedIn}/>
    );
  }
}
export default App;