import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Member.css';

const Member = (props) => {
  const {name, address, contact, img} = props.member;    

  return (
    <Col lg={4} className="mb-4"> 
      <Card style={{borderRadius:"10px"}} className="product-card p-2">
        <Card.Img className="product-img" variant="top" src={img} style={{height:"350px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} />
        <Card.Body>
          <Card.Title><h4 style={{fontSize:"20px"}} className="brand-color fw-bold">Member: {name}</h4></Card.Title>
          <Card.Title><h5 style={{fontSize:"20px"}} className="brand-color fw-bold">Address: {address}</h5></Card.Title>
          <Card.Text><h5 className="fw-bold">Contact Number: {contact}</h5></Card.Text>
        </Card.Body>  
      </Card>
    </Col>
  );
};

export default Member;