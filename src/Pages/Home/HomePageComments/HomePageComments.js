import React, { useEffect, useState } from 'react';
import HomePageComment from '../HomePageComment/HomePageComment';
import './HomePageComments.css';

const HomePageComments = () => {

    const [comments, setComments] = useState([]) 
    useEffect(() => {
        fetch('http://localhost:5000/comment')
            .then(res => res.json())
            .then(data => setComments(data));
    }, [])

    return (
        <div id="services" style={{backgroundColor:"#f7e927"}}>
            <div className="container py-5 border-bottom border-top border-1">
                <h1 className="text-center text-primary mb-5 fw-bold home-page-comment-heading">Review Comment</h1>
                <div className="row justify-content-center">
                    {
                        comments.map(comment => <HomePageComment
                            key={comment.id}
                            comment={comment}
                        ></HomePageComment>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePageComments;


