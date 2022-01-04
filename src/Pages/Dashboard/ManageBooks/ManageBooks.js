import React, { useEffect, useState } from 'react';

const ManageBooks = () => {
  
    const [books, setBooks] = useState([]); 

    useEffect( () => {
        fetch(`https://glacial-springs-00927.herokuapp.com/books`)
        .then(res => res.json())
        .then(data => setBooks(data));
    }, []);

    const handleDelete = id => {
      const proceed = window.confirm('Are you sure, you want to remove this Product?');
      if(proceed){
        const url = `https://glacial-springs-00927.herokuapp.com/books/${id}`;
        fetch(url, {
          method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount){
            alert('Deleted The Service')
            const remaining = books.filter(book => book._id !== id);
            setBooks(remaining);
          }
        })
      }
    }

    return (
        <div className="container mb-5 text-white">
          <h1 style={{color:"#fff"}} className="text-center my-5 fw-bold">Manage Books</h1>
        {
          books.map(book => 
            <div className="row justify-content-center mb-4">
              <div className="col-lg-4">
                <img src={book.img} className="w-100 rounded rounded-3" height="270px" alt="" />
              </div>
              <div className="col-lg-6">
                <h3 className="brand-color mt-3"><b className="text-primary">Name:</b> {book.name}</h3>
                <h5><b className="text-primary">Author:</b> {book.author}</h5>
                <p><b className="text-primary">Published</b>: {book.publishing}</p>
                <button onClick={ () => handleDelete(book._id)} className="btn btn-danger fw-bold my-3">Delete</button>
              </div>
            </div>) 
        }
        </div>
    );
};

export default ManageBooks;