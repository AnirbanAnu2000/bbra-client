import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import './Contact.css';

const Contact = () => {
  return (
    <div style={{backgroundColor:"#f7e927"}}>
      <Header></Header>
      <Container className="">
        <h1 className="fw-bold brand-color text-center mt-5 mb-4 contact-heading text-primary" style={{fontSize:"50px"}}>Contact With Us</h1>
        <Row className="">
          <Col lg={6} className="pb-5">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Your Name</Form.Label>
                <Form.Control type="text" placeholder="Your Name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Email Address</Form.Label>
                <Form.Control type="email" placeholder="Your email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold">Contact Number</Form.Label>
                <Form.Control type="text" placeholder="Your Contact Number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label className="fw-bold">Your Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Message" />
              </Form.Group>

              <Button variant="primary" className="fw-bold" type="submit">
                Submit
              </Button>
            </Form>
          </Col>  
          <Col lg={6} className="">
            <iframe title="Our Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14604.262095275215!2d90.40768502196309!3d23.780680939119623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79ebfc24eab%3A0xea7dab563f12457a!2sGulshan%201%2C%20Dhaka%201212!5e0!3m2!1sen!2sbd!4v1641223870403!5m2!1sen!2sbd" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" className="py-4"></iframe>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Contact;