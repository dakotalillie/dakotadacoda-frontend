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

import { determineButtonClass, determineButtonIcon } from './utils';
import './contact.scss';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: {
        name: '',
        email: '',
        subject: '',
        text: '',
      },
      formErrors: {
        name: false,
        email: false,
        subject: false,
        text: false,
      },
      status: null,
      errorMessage: '',
      buttonHover: false
    };
    this.form = null;

    this.setFormRef = e => {
      this.form = e;
    };
  }

  findEmptyFields = () => {
    const emptyFields = [];
    for (const field of Object.keys(this.state.formValues)) {
      if (this.state.formValues[field].length === 0)
        emptyFields.push(field);
    }
    if (emptyFields.length > 0) {
      const newFormErrors = { ...this.state.formErrors };
      emptyFields.forEach(field => {
        newFormErrors[field] = true;
      });
      this.setState({
        formErrors: newFormErrors,
        status: 'error',
        errorMessage: 'Every field must be filled in.'
      });
    }
    return emptyFields;
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      const newState = { ...prevState };
      newState.formValues[name] = value;
      return newState;
    });
  };

  handleFocus = e => {
    const name = e.target.name;
    if (this.state.formErrors[name]) {
      const newFormErrors = { ...this.state.formErrors };
      newFormErrors[name] = false;
      this.setState({ formErrors: newFormErrors, status: null });
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    if (!this.state.status || this.state.status === 'error') {
      const emptyFields = this.findEmptyFields();
      if (!emptyFields.length) {
        this.setState({ status: 'loading' }, () => {
          this.sendEmail();
        });
      }
    }
  };

  sendEmail = () => {
    fetch('http://smtp.dakotadacoda.com/api/v1/', {
      method: 'POST',
      body: JSON.stringify(this.state.formValues),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(this.handleResponse)
      .catch(this.handleError);
  }

  handleResponse = res => {
    if (res.status === 200) {
      this.setState({ status: 'success' });
    } else {
      this.handleError();
    }
  }

  handleError = () => {
    this.setState({
      status: 'error',
      errorMessage: 'Oops! Something went wrong. Please try again later.'
    });
  }

  render() {
    return (
      <div className="contact section">
        <Container>
          <Row>
            <Col>
              <h2>Get In Touch</h2>
            </Col>
          </Row>
          <Form
            className="contact_form"
            onSubmit={this.handleSubmit}
            innerRef={this.setFormRef}
          >
            <Row>
              <Col sm="6">
                <FormGroup>
                  <Label for="name">Name</Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Jane Doe"
                    className={this.state.formErrors['name'] ? 'error' : ''}
                    value={this.state.formValues.name}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="your@email.com"
                    className={this.state.formErrors['email'] ? 'error' : ''}
                    value={this.state.formValues.email}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="subject">Subject</Label>
                  <Input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Your Subject"
                    className={this.state.formErrors['subject'] ? 'error' : ''}
                    value={this.state.formValues.subject}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                  />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Label for="text">Message</Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="text"
                    placeholder="Hello World!"
                    className={this.state.formErrors['text'] ? 'error' : ''}
                    value={this.state.formValues.text}
                    onChange={this.handleChange}
                    onFocus={this.handleFocus}
                  />
                </FormGroup>
              </Col>
            </Row>
            {this.state.status === 'error'
              ? <p className="error_text">{this.state.errorMessage}</p>
              : null
            }
            <div className="button_div">
              <Button
                outline
                size="lg"
                color="primary"
                className={determineButtonClass(this.state.status)}
                type="submit"
                onMouseEnter={() => this.setState({ buttonHover: true })}
                onMouseLeave={() =>
                  this.setState({
                    buttonHover: false
                  })
                }
              >
                {determineButtonIcon(this.state.status, this.state.buttonHover)}
              </Button>
            </div>
          </Form>
        </Container>
      </div>
    );
  }
}
