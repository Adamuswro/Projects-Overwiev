import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Course from './Course/Course';

class App extends Component {
  state = {
    courseStatus: [
      {status: 'Finished'},
      {status: 'In progress'},
      {status: 'Just started'}
    ]
  }

  switchStateHandler = () => {
    //console.log('Clicked!');
    this.setState ( {
      courseStatus: [
        {status: 'Refactoring'},
        {status: 'In progress'},
        { status: 'Just started' }
      ] }
    )
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    
    return (
      <div>
        <button style={style} onClick={this.switchStateHandler}>Switch state</button>
        <Course 
        name='End Of Line Performance Tool' 
        description = 'Web application allows to visualize the results of hydraulic motors end of line tests.' 
        status = {this.state.courseStatus[0].status}> FINISHED </Course>
        <Course 
        click = {this.switchStateHandler}
        name='BOM Comparator' 
        description = 'Desktop application for easy BOM (Bill Of Material) analysis.'
        status = {this.state.courseStatus[1].status} />
        <Course 
        name='Ski Jump' 
        description = 'Ski Jumping mobile game.' 
        status = {this.state.courseStatus[2].status} />
      </div>
    );
  }
}

export default App;
