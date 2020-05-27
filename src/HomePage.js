import React, { Component } from 'react';
import Nav1 from './Nav';
import './App.css'
import Background from './Background';

class HomePage extends Component {
    constructor(props) {
        super(props);    
      }
   render(){
    return (
        <div>
            <Nav1 />
            <Background />
        </div>
    )
   }
    }
export default HomePage