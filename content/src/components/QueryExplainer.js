import React from 'react'
import { Component } from 'react'
import { Container, Form, Button, Card } from 'react-bootstrap'
import { v4 as uuid } from 'uuid'
import Spinner from "./Spinner"
const { Configuration, OpenAIApi} = require("openai");


class QueryExplainer extends Component {

  constructor(){
    super()
    // starting state on page reload
    this.state = {
      heading: 'The response from the AI will be shown here',
      image: '',
      response: 'Submit a query using the input above'
    }
  }
  onFormSubmit = e => {
    // prevent default (page resetting)
    e.preventDefault()

    const formData = new FormData(e.target),
    formDataObj = Object.fromEntries(formData.entries())

    // OPENAI function goes here
    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const userid = uuid();

    this.setState({
      heading: 'Processing...',
      image:
            <div className="pos-center">
                <Spinner />
            </div>,
      response: 'Processing...'
    })


    // Input to content filter
    openai.createCompletion("content-filter-alpha",{
      prompt:"<|endoftext|>"+`Write a detailed, smart, informative, professional explanation of this SQL query: ${formDataObj.queryName}`+"\n--\nLabel:",
      temperature: 0,
      max_tokens: 1,
      top_p: 0,
      user: `${userid}`
    })
    .then((response)=>{
      console.log("input score: " + response.data.choices[0].text);
      console.log("logprobs: "+ response.data.choices[0].logprobs);
      if(response.data.choices[0].text >= 2){
        this.setState({
          heading: `AI explanation`,
          image:'',
          response: `Inappropriate input - please try again with a different prompt.`
        })
      }
      else{
        // content filter result to davinci
        openai.createCompletion("text-davinci-002",{
          prompt:`Write a detailed, smart, informative, professional explanation of this SQL query: ${formDataObj.queryName}`,
          temperature: 0.8,
          max_tokens: 200,
          top_p: 1,
          frequency_penalty: 0,
          presence_penalty: 0,
          user: `${userid}`
        })
        .then((response)=>{
          console.log("result to test: " + `${response.data.choices[0].text}`);
          openai.createCompletion("content-filter-alpha",{
            prompt:"<|endoftext|>"+`${response.data.choices[0].text}`+"\n--\nLabel:",
            temperature: 0,
            max_tokens: 1,
            top_p: 0,
            user: `${userid}`
          })
          .then((response)=>{
            console.log("input score: " + response.data.choices[0].text);
            console.log("logprobs: "+ response.data.choices[0].logprobs);
            if(response.data.choices[0].text >= 2){
              this.setState({
                heading: `AI explanation`,
                image:'',
                response: `Inappropriate generated text - please try to generate again.`
              })
            }
            else{
              this.setState({
                heading: `AI explanation`,
                image:'',
                response: `${response.data.choices[0].text}`
              })
            }
        })
      })
    }
  });

  }

  render() {
    return(
      <div>
        <Container>
          <Form onSubmit={this.onFormSubmit}>
            <Form.Group className="mb-3" controlId = "formBasicEmail">
              <Form.Label>
                What query would you like to get an exaplanation for?
              </Form.Label>
              <Form.Control
                as="textarea"
                rows="5"
                name = "queryName"
                placeholder= "SELECT * FROM users WHERE firstName = `Test`"
                />
            </Form.Group>

            <Button variant = "primary" size ="lg" type = "submit">
              Get explanation
            </Button>
          </Form>

          <br/>
          <br/>

          <Card>
            <Card.Body>
            <Card.Title>{this.state.heading}</Card.Title>

            <br/>
              <Card.Text>
                  {this.state.response}
                  <br/><br/>
                  {this.state.image}
                  <br/>

              </Card.Text>
            </Card.Body>
          </Card>

        </Container>
        <br/>
      </div>
    )
  }
}

export default QueryExplainer
