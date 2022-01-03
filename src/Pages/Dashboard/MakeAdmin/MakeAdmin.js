import React, { useState } from 'react';
// import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch( 'http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
          .then(res => res.json())
          .then(data => {
              if (data.modifiedCount) {
                console.log(data);
                setSuccess(true);
              }
            })

        e.preventDefault();
    }

    return (
        <div className="container vh-100">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div>
                <h1 className="fw-bold mt-5 mb-4 text-center text-white">Make an Admin</h1>
                  <form onSubmit={handleAdminSubmit}>
                      <input 
                      className="form-control"
                      type="email"
                      placeholder="Existing user email for make admin"
                      onBlur={handleOnBlur} />
                      
                      <button className="btn btn-success mt-4 fw-bold btn-lg mb-5" type="submit">Make Admin</button>
                  </form>
                  {success && <div class="alert alert-success mt-4 fw-bold text-success" role="alert">Make admin successfully!</div>}
              </div>
            </div>
          </div>
        </div>
    );
};

export default MakeAdmin;