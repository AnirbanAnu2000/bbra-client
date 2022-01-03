import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Rating from 'react-rating';
import './HomePageComment.css';

const HomePageComment = (props) => {
  const {name, book_name, comment, email, rating} = props.comment;  

  return (
    <Col lg={10} className="mb-4">
      <Card style={{borderRadius:"10px"}} className="review-card">
        <Card.Body>
          <Card.Title><h5 style={{color:"#4800bb"}} className="text-white fw-bold">{name}</h5></Card.Title>
          <Card.Text>
            {email} 
          </Card.Text>
          <Card.Text>
            {book_name} 
          </Card.Text>
          <Card.Text>
            {comment} 
          </Card.Text>
          <Rating
          style={{fontSize:"20px"}}
              className="text-warning fw-bold"
              initialRating={rating}
              emptySymbol="far fa-star icon-color"
              fullSymbol="fas fa-star icon-color"
              readonly
              >
            </Rating>
        </Card.Body> 
      </Card>
    </Col>
  );
};

export default HomePageComment;