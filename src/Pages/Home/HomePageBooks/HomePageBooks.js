import React, { useEffect, useState } from 'react';
import HomePageBook from '../HomePageBook/HomePageBook';
import '../HomePageBooks/HomePageBooks.css';

const HomePageBooks = () => {

    const [books, setBooks] = useState([])  
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, [])

    return (
        <div id="services" style={{backgroundColor:"#f7e927"}}>
            <div className="container py-5 border-bottom border-1 border-primary">
                <h1 style={{fontSize:"50px"}} className="services-heading text-center mb-5 mt-3 fw-bold text-primary">Books</h1>
                <div className="row justify-content-center">
                    {
                        books.slice(-6).map(book => <HomePageBook
                            key={book.id}
                            book={book}
                        ></HomePageBook>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePageBooks;


