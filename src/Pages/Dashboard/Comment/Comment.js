import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
import './Comment.css';

const Comment = () => {
    const { register, handleSubmit, reset } = useForm(); 
    const {user} = useAuth();

    const onSubmit = data => {
        console.log(data);

        axios.post('https://glacial-springs-00927.herokuapp.com/comment', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Comment posted successfully!');
                    reset();
                }
            });
    }

    return (
        <div className="container vh-100">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="add-product">
                        <h1 className="fw-bold text-center mt-5 mb-3 text-white">Your Comment Please</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        
                            <input defaultValue={user.displayName} className="form-control mb-3" {...register("name", { required: true })} placeholder="Your Name" />

                            <input defaultValue={user.email} className="form-control mb-3" {...register("email", { required: true })} placeholder="Your Email" />

                            <input className="form-control mb-3" type="text" {...register("book_name")} placeholder="Book name for which you comment" />

                            <textarea className="form-control mb-3" {...register("comment")} type="text" placeholder="Your Valuable Comment" />

                            <input className="form-control mb-3" type="number" {...register("rating")} placeholder="Rating a number from 1 to 5" />

                            <input className="btn btn-primary mb-5 fw-bold" type="submit" />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;