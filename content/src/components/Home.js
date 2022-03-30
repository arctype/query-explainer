import React from 'react'
import { Component } from 'react'
import Display from './Display'
import '../css/Home.css';
import { Container, Row, Col, Card} from 'react-bootstrap'
import mainImg from '../mainImg.png'
import QueryExplainer from './QueryExplainer'


class Home extends Component {
  render() {
    return(
      <div>
          <Card className="text-white hero curve">
            <Card.ImgOverlay>
              <br/>
              <Card.Title><h1>Query Explainer</h1></Card.Title>
              <Card.Text>Use AI to explain a SQL query in plain english! <br/><br/>
              <QueryExplainer />
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
          <br/>
          <br/>

      </div>
    )
  }
}

export default Home
