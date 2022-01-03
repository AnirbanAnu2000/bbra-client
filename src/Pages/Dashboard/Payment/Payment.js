import React from 'react';
import { Link } from 'react-router-dom';

const Payment = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="fw-bold text-center mt-5" style={{color:"#4800bb"}}>Payment system coming soon</h1>           
              
          </div>
          <div className="col-lg-12 d-flex justify-content-center mt-4">           
              <ul class="" style={{listStyle:"none"}}>
                <li className="fw-bold d-inline-block me-4">
                  <Link to="/">Home</Link>
                </li>
                <li className="fw-bold d-inline-block me-4">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;