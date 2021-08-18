import React from "react";
import ReactDOM from "react-dom";

const App = props => {
    return <NumberOfStudents/>;
}

class NumberOfStudents extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            enrolledStudents: 0,
            waitListedStudents: 0,
            newStudents: 0,
            holdStudents: 0
        };
    }
    increment() {
        this.setState({
          enrolledStudents: this.state.enrolledStudents + this.state.newStudents,
        });
      }
      add() {
        this.setState({
          waitListedStudents: this.state.waitListedStudents + this.state.holdStudents,
        });
      }
      render(){
          return(
              <div>
              <h3>Enrolled Students: {this.state.enrolledStudents}</h3>
              <input 
              type="number" 
              onChange={event => this.setState({newStudents: parseInt(event.target.value)})}
             value={this.state.newStudents}/>
             <button onClick={this.increment.bind(this)}>Increase Students</button>
             
             <h3>Waitlisted Students: {this.state.waitListedStudents}</h3>
              <input 
              type="number" 
              onChange={event => this.setState({holdStudents: parseInt(event.target.value)})}
             value={this.state.holdStudents}/>
             <button onClick={this.add.bind(this)}>Increase Students</button>
             </div>
          );
      }
    }
    ReactDOM.render(<App />, document.getElementById('root'));