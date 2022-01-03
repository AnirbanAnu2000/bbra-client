import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddMember.css';

const AddMember = () => {
    const { register, handleSubmit, reset } = useForm(); 

    const onSubmit = data => {
        console.log(data);

        axios.post('http://localhost:5000/members', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Member added successfully!');
                    reset();
                }
            });
    }

    return (
        <div className="container vh-100">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="add-product">
                        <h1 className="text-center mt-5 mb-3 fw-bold text-white">Add A New Member</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className="form-control mb-3" {...register("name", { required: true, maxLength: 100 })} placeholder="Member Name" />

                            <input className="form-control mb-3" {...register("address")} placeholder="Address" />

                            <input className="form-control mb-3" type="number" {...register("contact")} placeholder="Member's Contact Number" />

                            <input className="form-control mb-3" {...register("img")} placeholder="Member Photo url" />
                            <input className="btn btn-primary mb-5 fw-bold" type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddMember;