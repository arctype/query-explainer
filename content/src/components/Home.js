import React from 'react'
import { Component } from 'react'
import Display from './Display'
import '../css/Home.css';
import { Container, Row, Col, Card} from 'react-bootstrap'
import mainImg from '../mainImg.png'


class Home extends Component {
  render() {
    return(
      <div>
          <Card className="text-white hero curve">
            <Card.ImgOverlay>
              <br/>
              <Card.Title><h1>Query explainer</h1></Card.Title>
              <Card.Text><p>
              Arctype is a free, collaborative SQL editor for developers. Subscribe to get our changelog in your inbox every few weeks.
                </p>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>

          <Container>
          <br/>
          <br/>
          <Row>
            <Col>
            <Display
              header = "Query Explainer"
              title = "title goes here"
              text = "How to use text goes here"
              theLink = "/query-explainer" />
            </Col>



          </Row>
          </Container>
          <br/>
          <br/>

      </div>
    )
  }
}

export default Home
