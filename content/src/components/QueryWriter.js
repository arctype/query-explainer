import React from 'react'
import { Component } from 'react'
import Display from './Display'
import '../css/Home.css';
import { Container, Row, Col, Card} from 'react-bootstrap'
import mainImg from '../mainImg.png'
import QueryWriterComponent from './QueryWriterComponent'


class QueryWriter extends Component {
  render() {
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
