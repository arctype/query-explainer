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
