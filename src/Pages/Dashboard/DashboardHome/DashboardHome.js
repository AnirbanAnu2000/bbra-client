import React from 'react';
import useAuth from '../../../hooks/useAuth';

const DashboardHome = () => {
  const {user} = useAuth();
  return (
    <div className="container my-4"> 
      <div className="row">
        <div className="col-lg-12">
          <h4 className="text-white">Hi, <span className="text-primary fw-bold">{user.displayName}</span> welcome to Bangladesh Book Readers Association.</h4>
          <img width="75%" height="500px"className="d-block mx-auto mt-4" src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/bbra/books-page-banner.gif" alt="" />
          
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;