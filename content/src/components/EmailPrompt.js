import React from 'react'
import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Card, Button, Nav} from 'react-bootstrap'

class EmailPrompt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.state = {isAuthed: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
    this.setState({isAuthed: true});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <p>Explain</p>
        <label>
          Email:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <Button type="submit" value="Submit" >Submit</Button>
      </form>
    );
  }
}

export default EmailPrompt
