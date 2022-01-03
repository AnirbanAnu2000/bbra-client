import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePageAbout.css';

const HomePageAbout = () => {
  return (
    <div className='home-about-section'>
      <Container className="py-5"> 
        <Row>
          <Col lg={12} className="d-flex align-items-center order-lg-1 order-0">
            <div className="p-4 home-about-right-content text-center">
              <h2 className="mb-4">About Us</h2>
              <h5 className="brand-color mb-4">Welcome To Bangladesh Book Readers Association</h5>
              <p className="mb-5">Welcome to Bangladesh Book Readers Association for Everyone, the UK’s largest reading group network. Whether you’re already in a reading group, want to join one or looking to set one up, you’re in the right place. Join today to discover your next great read, get free books to read and review before anyone else, enter competitions to meet authors and take part in great giveaways. Our reading groups meet in all kinds of places and are made up of all kinds of people. The one thing they have in common is that they love reading and talking about books. Here at The Reading Agency we know how important reading for pleasure is and the positive difference it makes to our lives. Reading groups are a great way to make friends, feel connected and empowered and try books you’d never have come across otherwise. Read more about the impact of reading for pleasure in our report.</p>
              
              <Link className="fw-bold btn-lg home-about-btn" to="/about">Read More  <i class="fas fa-angle-right ms-2 about-btn-right-icon"></i></Link>
              
            </div>
          </Col>
        </Row>
        </Container>
    </div>
  );
};

export default HomePageAbout;