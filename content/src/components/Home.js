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
              <Card.Title><h1>Tools</h1></Card.Title>
              <Card.Text><p>
              Use the Arctype toolbox to write better SQL and master the art of good database design.
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
              title = "SQL 	&#10145; plain text"
              text = "Use AI to explain a SQL query in plain english"
              theLink = "/query-writer" />
            </Col>

            <Col>
            <Display
              header = "Query Writer"
              title = "Plain text 	&#10145; SQL"
              text = "Use AI to write a SQL query based on your description"
              theLink = "/query-writer" />
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
