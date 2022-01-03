import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import './About.css';
import { Col, Container, Row } from 'react-bootstrap';


const About = () => {
  return (
    <div style={{backgroundColor:"#f7e927"}}>
      <Header></Header>
      <div>
      <Container className="py-5">
        <Row className="row">
          <Col  lg={12} className="about-banner d-flex justify-content-center align-items-center">
            <h1 className="about-banner-heading fw-bold">
              About Page
            </h1>
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col md={9} xs={12}>
            <div className="our-mission mb-5">
              <h2 style={{fontSize:"50px"}} className="text-primary text-center about-heading fw-bold">Our Mission</h2>
              <p>Some of the most important things to include are the banner image, the regular image, and the "person" relationship. If you want the large header photo at the top, include a banner image. This should be a large, high-quality, rectangular image. To include a photo in the middle of the article, use "image". This differs from square image and social media image as the square image will be used for thumbnails and on index pages, while the social media image will be used only when the article is shared on social media. The regular image is just an image you want featured in the article. Include an image caption to have a short description underneath the photo. Remember that the image description and image summary are different though, as image caption is a caption underneath the photo and image description should describe the image for those using screen readers.</p>
            </div>
            <div className="our-vision border-top border-1 border-primary">
              <h2 style={{fontSize:"50px"}} className="text-primary brand-color text-center mt-5 about-heading fw-bold">Our Vision</h2>
              <p>This means they don't need to be the same. The person relationship is also very important to include. Relating a person is what will fill in the author. But, if you fill in the author text field, that will also populate that category. Note that once you relate a person, that relationship will override and cancel out anything you wrote in author text. Other important relationships are series, organization, publication, and article. Relating a series will populate the "Related Series" section. Relating a organization will populate the blank field. Relating an article will populate the "Related Articles" section of the page. Relating the article to a publication will fill in the "Featured In" section. To fill in "For More Information", relate an organization.</p>
            </div>
            <div className="our-vision border-top border-1 border-primary">
              <h2 style={{fontSize:"50px"}} className="text-primary brand-color text-center mt-5 about-heading fw-bold">Our Story</h2>
              <p>This means they don't need to be the same. The person relationship is also very important to include. Relating a person is what will fill in the author. But, if you fill in the author text field, that will also populate that category. Note that once you relate a person, that relationship will override and cancel out anything you wrote in author text. Other important relationships are series, organization, publication, and article. Relating a series will populate the "Related Series" section. Relating a organization will populate the blank field. Relating an article will populate the "Related Articles" section of the page. Relating the article to a publication will fill in the "Featured In" section. To fill in "For More Information", relate an organization.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
      
      <Footer></Footer>
    </div>
  );
};

export default About;