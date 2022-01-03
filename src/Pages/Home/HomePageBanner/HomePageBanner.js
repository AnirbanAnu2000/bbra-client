import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './HomePageBanner.css';

const HomePageBanner = () => {
  return (

    <div className="home-page-banner-main pt-5 pb-5"> 
    
      <Container className="py-5">
        <Row>
          <Col lg={7} className="d-flex align-items-center">
              <div className="banner-left-content">
                <h1 className="text-primary special-font">Bangladesh Book <br/> Reader Association</h1>
                <p>Our members learn to become truly reflective educators who are able to continuously assess and improve their own professional practice.</p>
                <NavLink className="btn btn-primary btn-lg fw-bold banner-explore-btn" to="/books">
                Explore Books <i class="fas fa-angle-double-right ms-2"></i>
                </NavLink> 
              </div>
          </Col>            
          <Col lg={5} className="">
            <img className='w-100' src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/bbra/banner/banner-img.png" alt="" />
          </Col>            
        </Row>
      </Container> 
    
    </div>     

  );
};

export default HomePageBanner;