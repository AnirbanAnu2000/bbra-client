import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BooksOne = (props) => {
  const {name, author, publishing, img, _id} = props.bookOne;  
  // const url = `/explore/${_id}`;

  return (
    <Col lg={4} className="mb-4">
      <Card style={{borderRadius:"10px"}} className="product-card p-2">
        <Card.Img variant="top" src={img} style={{height:"300px",borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} />
        <Card.Body>
          <Card.Title><h4 className="brand-color fw-bold"><b className='text-primary'>Book Name:</b> {name}</h4></Card.Title>
          <Card.Title><h4 className="brand-color fw-bold"><b className='text-primary'>Author:</b> {author}</h4></Card.Title>
          <Card.Title><h4 className="brand-color fw-bold"><b className='text-primary'>Published:</b> {publishing}</h4></Card.Title>
          <Link to={`/readBook/${_id}`}>
                  <button className="btn btn-primary fw-bold">Read {name}</button>
          </Link>
        </Card.Body> 
      </Card>
    </Col>
  );
};

export default BooksOne;