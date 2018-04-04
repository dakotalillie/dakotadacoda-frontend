import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardDeck,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Container
} from 'reactstrap';
import './portfolio_preview.css';

const PortfolioPreview = () => {
  return (
    <div className="portfolio_preview section grey-bg">
      <Container>
        <h2>Recent Projects</h2>
        <CardDeck>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>BeetBox</CardTitle>
              <CardSubtitle>Sample Library Manager</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <Button color="link">Github</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>FlatChat</CardTitle>
              <CardSubtitle>Messaging Service</CardSubtitle>
              <CardText>
                This card has supporting text below as a natural lead-in to
                additional content.
              </CardText>
              <Button color="link">Github</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Diplomacy</CardTitle>
              <CardSubtitle>Online Board Game</CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </CardText>
              <Button color="link">Github</Button>
            </CardBody>
          </Card>
        </CardDeck>
        <Button outline color="info" size="lg" className="section_button">
          View Portfolio
        </Button>
      </Container>
    </div>
  );
};

export default PortfolioPreview;
