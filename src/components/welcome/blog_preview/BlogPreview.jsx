import React from 'react';
import {
  Button,
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row
} from 'reactstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faArrowRight from '@fortawesome/fontawesome-free-solid/faArrowRight';
import blogData from '../../../utils/blog_sneakpeek_data.json';
import blogCover from '../../../utils/blog_image.jpg';
import links from '../../../utils/links.json';
import './blog_preview.css';

class BlogPreview extends React.Component {
  render() {
    return (
      <div className="blog_preview section grey-bg">
        <Container>
          <Row>
            <Col sm="6">
              <h2>Technical Blog</h2>
              <h5>The best way to learn is to teach</h5>
              <Button
                outline
                size="lg"
                className="section_button"
                href={links.medium}
              >
                Read On Medium
              </Button>
            </Col>
            <Col sm="6" className="second">
              <Card>
                <a href={blogData.url}>
                  <CardImg
                    top
                    width="100%"
                    src={blogCover}
                    alt="Card image cap"
                  />
                </a>
                <CardBody>
                  <CardTitle>
                    <a href={blogData.url}>{blogData.title}</a>
                  </CardTitle>
                  <CardSubtitle>Published {blogData.published}</CardSubtitle>
                  <CardText>{blogData.firstParagraph}</CardText>
                  <p className="ellipsis">...</p>
                  <Button color="link" href={blogData.url}>
                    Read More <FontAwesomeIcon icon={faArrowRight} />
                  </Button>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default BlogPreview;
