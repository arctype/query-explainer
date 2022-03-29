import React from 'react'
import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Card, Button, Nav} from 'react-bootstrap'

class Display extends Component {
  render() {
    const { header, title, text, theLink} = this.props

    return(
      <div>
        <Card>
          <Card.Header as="h5">{header}</Card.Header>
          <Card.Body>
            <Card.Title><p>{title}</p></Card.Title>
            <Card.Text>
              <p>{text}</p>
            </Card.Text>
            <Nav.Link href={theLink}>
              <Button variant="primary">Go somewhere</Button>
            </Nav.Link>
          </Card.Body>
        </Card>
      </div>
    )
  }
}

export default Display
