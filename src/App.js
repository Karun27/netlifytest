import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import LoginPage from './LoginPage';  // or whatever the location is
// import Result from './Result'; // or whatever the location is
// import Register from './Register';
// import Data from './axios/Data';
import HomePage from'./HomePage';
// import ProjectInfo from './ProjectInfo';
import About from './About';
import Form from './Form'
import Submission from './Submission'
class App extends Component {
  render() {
    return (      
<BrowserRouter>
    <Switch>
      <Route exact path="/" component={HomePage} exact/>
      <Route path="/About" component={About}/>
      <Route path="/Form" component={Form}/>
      <Route path="/Submission" component={Submission}/>
    </Switch>
</BrowserRouter>
    )};  
}
export default App;
