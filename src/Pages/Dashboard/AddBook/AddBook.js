import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddBook.css';

const AddBook = () => {
    const { register, handleSubmit, reset } = useForm(); 

    const onSubmit = data => {
        console.log(data);

        axios.post('https://glacial-springs-00927.herokuapp.com/books', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Book added successfully!');
                    reset();
                }
            });
    }

    return (
        <div className="container vh-100">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="add-product">
                        <h1 className="text-center mt-5 mb-3 fw-bold text-white">Add A New Book</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control mb-3" {...register("name", { required: true, maxLength: 100 })} placeholder="Book Name" />

                            <input className="form-control mb-3" {...register("author")} placeholder="Author Name" />

                            <input className="form-control mb-3" type="number" {...register("publishing")} placeholder="Publishing Year" />

                            <input className="form-control mb-3" {...register("img")} placeholder="Cover Photo url" />
                            <input className="btn btn-primary mb-5 fw-bold" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddBook;