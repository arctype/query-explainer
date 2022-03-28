import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
const { Configuration, OpenAIApi} = require("openai");


class QueryWriter extends Component {

  constructor(){
    super()
    // starting state on page reload
    this.state = {
      heading: 'The response from the AI will be shown here',
      response: '... awaiting the response. 1 moment please.'
    }
  }
  onFormSubmit = e => {
    // prevent default (page resetting)
    e.preventDefault()

    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())
    console.log(formDataObj.queryName)

    // OPENAI function goes here
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    // run the function then wait for the response (then update the state)
    openai.createCompletion("text-davinci-002",{
      prompt:`Write a detailed, smart, informative, professional explanation of this SQL query: ${formDataObj.queryName}`,
      temperature: 0.8,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((response)=>{
      this.setState({
        heading: `AI explanation: ${formDataObj.queryName}`,
        response: `${response.data.choices[0].text}`
    })
  });
  // should add some error catching here

  }

  render() {
    return(
      <div>
        <Container>
        <br/>
        <br/>
          <h1> Query Explainer</h1>
          <p> Use AI to explain a SQL query in plain english. </p>
          <br/>
          <Form onSubmit={this.onFormSubmit}>
            <Form.Group className="mb-3" controlId = "formBasicEmail">
              <Form.Label>
                <p>What query would you like to get an exaplanation for? (Enter as much information as you can for more accurate descriptions.)</p>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                name = "queryName"
                placeholder = "SELECT * FROM users WHERE name = 'Test';" />
            </Form.Group>

            <Button variant = "primary" size ="lg" type = "submit">
              Get explanation
            </Button>
          </Form>

          <br/>
          <br/>

          <Card>
            <Card.Body>
            <Card.Title><h1>{this.state.heading}</h1></Card.Title>
            <hr/>
            <br/>
              <Card.Text><p>
                  {this.state.response}</p>
              </Card.Text>
            </Card.Body>
          </Card>

        </Container>
        <br/>
      </div>
    )
  }
}

export default QueryWriter
