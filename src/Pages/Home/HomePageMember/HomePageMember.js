import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './HomePageMember.css';

const HomePageMember = (props) => {
  const {name, address, contact, img} = props.member;    

  return (
    <Col lg={4} className="mb-4"> 
      <Card style={{borderRadius:"10px"}} className="product-card p-2">
        <Card.Img className="product-img" variant="top" src={img} style={{height:"350px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} />
        <Card.Body>
          <Card.Title><h4 style={{fontSize:"20px"}} className="brand-color fw-bold"><b className="text-primary">Member:</b> {name}</h4></Card.Title>
          <Card.Title><h5 style={{fontSize:"20px"}} className="brand-color fw-bold"><b className="text-primary">Address:</b> {address}</h5></Card.Title>
          <Card.Text>
            <h5 className="fw-bold"><b className="text-primary">Contact Number:</b> {contact}</h5>
          </Card.Text>
        </Card.Body>  
      </Card>
    </Col>
  );
};

export default HomePageMember;