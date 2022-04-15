import React from 'react'
import { Component } from 'react'
import Display from './Display'
import '../css/Home.css';
import { Container, Row, Col, Card, Button} from 'react-bootstrap'
import mainImg from '../mainImg.png'
import QueryWriterComponent from './QueryWriterComponent'

class QueryWriter extends Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.state = {isLoggedIn: false};
    this.state = {value: ''};

  }
  handleLoginClick(event) {
   this.setState({value: event.target.value});
   event.preventDefault();
   this.setState({isLoggedIn: true});

 }

 handleChange = event => {
   this.setState({value: event.target.value});
 }

 render() {
    const isLoggedIn = this.state.isLoggedIn;
    let inputArea;
    if (isLoggedIn) {
      inputArea = <QueryWriterComponent />;
    } else {
      inputArea =
      <form onSubmit={this.handleSubmit}>
        <p>Explain</p>
          <label>
            Email:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <Button type="submit" value="Submit" onClick={this.handleLoginClick}>Submit</Button>
      </form>
    }

    return(
      <div>
          <Card className="text-white hero curve">
            <Card.ImgOverlay>
              <br/>
              <Card.Title><h1>Query Writer</h1></Card.Title>
              <Card.Text>Use AI to write a SQL query from your plain-english description! <br/><br/>
              <QueryWriterComponent/>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
          <br/>
          <br/>

      </div>
    )
  }
}

export default QueryWriter
