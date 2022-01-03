import React, { useEffect, useState } from 'react';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';
import BooksOne from '../BooksOne/BooksOne';
import './Books.css';

const Books = () => {

    const [book, setBook] = useState([]) 
    useEffect(() => {
        fetch('http://localhost:5000/books')
            .then(res => res.json())
            .then(data => setBook(data));
    }, [])

    return (
        <div id="explore" className='explore-page'>
            <Header></Header>
            <div className="container explore-banner mt-5 rounded rounded-3">
                <h1 className="explore-banner-heading fw-bold">
                    Books Page
                </h1>
            </div>
            <div className="container py-3 mb-5 border-bottom border-1">
                <h1 style={{color:"#4800bb"}} className="explore-heading text-center my-5 fw-bold">All Books</h1>
                <div className="row">
                    {
                        book.map(bookOne => <BooksOne
                        key={bookOne.id}
                        bookOne={bookOne}
                        ></BooksOne>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Books;


