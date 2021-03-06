import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    this.state = {
      students: [],
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
    .then(res => this.setState({ students: res.data}));
  }

  render() {
    const students = this.state.students.map((student, i) => (
      <Link to={`/student/${student.id}`}>
        <h3 key={i}>{student.first_Name} {student.last_name}</h3>
      </Link>
    ));

    return (
      <div className="box">
        <h1></h1>
        <h2>ClassList:</h2>
        {students}
        <Link to='/'>
          <button>Go Home</button>
        </Link>
      </div>
    )
  }
}