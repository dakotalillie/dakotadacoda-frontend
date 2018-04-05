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
import './blog_preview.css';

const BlogPreview = () => {
  return (
    <div className="blog_preview section grey-bg">
      <Container>
        <Row>
          <Col>
            <h2>Technical Blog</h2>
            <h5>I use it to document everything I'm learning. Check it out!</h5>
            <Button outline color="info" size="lg" className="section_button">
              View Blog
            </Button>
          </Col>
          <Col>
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
};

export default BlogPreview;
