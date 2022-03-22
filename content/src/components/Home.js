import React from 'react'
import { Component } from 'react'
import Display from './Display'
import { Container, Row, Col, Card} from 'react-bootstrap'
import mainImg from '../mainImg.png'


class Home extends Component {
  render() {
    return(
      <div>
          <Card className="bg-dark text-white">
            <Card.Img src={mainImg} alt="Card image" />
            <Card.ImgOverlay>
              <br/>
              <Card.Title><h1>Query explainer</h1></Card.Title>
              <Card.Text><p>
                I am ai.
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
