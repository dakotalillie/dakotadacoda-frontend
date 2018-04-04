import React from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row
} from 'reactstrap';
import './contact_preview.css';

class ContactPreview extends React.Component {
  state = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => {
      let newState = { ...prevState };
      newState[name] = value;
      return newState;
    });
  };

  render() {
    return (
      <div className="contact_preview section">
        <Container>
          <Row>
            <Col>
              <h2>Get In Touch.</h2>
            </Col>
          </Row>
          <Form className="contact_form">
            <Row>
              <Col sm="6">
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jane Doe"
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="janedoe@email.com"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="subject">Subject</Label>
                  <Input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Hello There!"
                    value={this.state.subject}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="message">Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    placeholder="Say hello!"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
          <Button size="lg" className="submit_button">
            Submit
          </Button>
        </Container>
      </div>
    );
  }
}

export default ContactPreview;
