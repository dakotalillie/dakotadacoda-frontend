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
import Loader from 'react-loader-spinner';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import checkMark from '@fortawesome/fontawesome-free-solid/faCheck';
import './contact_preview.css';

class ContactPreview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formValues: { name: '', email: '', _subject: '', message: '' },
      status: null,
      buttonHover: true
    };
    this.form = null;

    this.setFormRef = e => {
      this.form = e;
    };
  }

  handleChange = e => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState(prevState => {
      let newState = { ...prevState };
      newState.formValues[name] = value;
      return newState;
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ status: 'loading' }, () => {
      fetch('https://formspree.io/dakota.lillie@icloud.com', {
        method: 'POST',
        body: JSON.stringify(this.state.formValues),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (res.status === 200) {
          this.setState({ status: 'success' });
        }
      });
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
          <Form
            className="contact_form"
            action="https://formspree.io/dakota.lillie@icloud.com"
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
                    placeholder="Michael Fassbender"
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
                    placeholder="thefass@bender.com"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="subject">Subject</Label>
                  <Input
                    type="text"
                    name="_subject"
                    id="subject"
                    placeholder="On Life's Inexorable Vicissitudes"
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
                    placeholder="Sup."
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Button
              outline
              size="lg"
              color="success"
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
          </Form>
        </Container>
      </div>
    );
  }
}

export default ContactPreview;

// helpers

function determineButtonIcon(status, hover) {
  if (status === null) {
    return 'Send';
  } else if (status === 'loading') {
    return <Loader type="Oval" color="#249D3D" height={22} width={45} />;
  } else if (status === 'success') {
    return (
      <span>
        <FontAwesomeIcon icon={checkMark} /> Sent!
      </span>
    );
  }
}

function determineButtonClass(status) {
  let className = 'submit_button';
  if (status === 'loading') {
    className += ' disabled loading';
  } else if (status === 'success') {
    className += ' disabled';
  }
  return className;
}
