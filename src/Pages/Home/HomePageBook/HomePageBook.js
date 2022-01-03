import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePageBook.css';

const HomePageBook = (props) => {
  const {name, publishing, author, img, _id} = props.book;    

  return (
    <Col lg={4} className="mb-4"> 
      <Card style={{borderRadius:"10px"}} className="product-card p-2">
        <Card.Img className="product-img" variant="top" src={img} style={{height:"350px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} />
        <Card.Body>
          <Card.Title><h4 style={{fontSize:"20px"}} className="brand-color fw-bold">Book: {name}</h4></Card.Title>
          <Card.Title><h5 style={{fontSize:"20px"}} className="brand-color fw-bold">Author: {author}</h5></Card.Title>
          <Card.Text>
            <h5 className="fw-bold">Publishing Year: {publishing}</h5>
          </Card.Text>
          <Link to={`/readBook/${_id}`}>
                  <button className="btn btn-primary fw-bold">Read {name}</button>
          </Link>
        </Card.Body>  
      </Card>
    </Col>
  );
};

export default HomePageBook;