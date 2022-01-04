import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Switch,
  Route,
  useRouteMatch
} from "react-router-dom";
import './Dashboard.css';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import DashboardHome from '../DashboardHome/DashboardHome';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Comment from '../Comment/Comment';
import AddBook from '../AddBook/AddBook';
import AddMember from '../AddMember/AddMember';
import ManageBooks from '../ManageBooks/ManageBooks';

const Dashboard = () => {
  let { path, url } = useRouteMatch();

  const { user, admin, logout } = useAuth();

  const activeStyle = {
    backgroundColor: "#eee",
    color: "#000",
    border:"3px solid #999",
    paddingLeft: "40px",
  }

  return (
    <div className="container-fluid dashboard-main">
      <div className="row">
        <div className="col-md-2 border-end border-2 border-white" style={{paddingBottom:"100px",height:"auto"}}>
          <div className="text-center">
            <NavLink to="/home" className="text-decoration-none">
              <h2 className='logo-font py-3 text-white fw-bold'>BBRA</h2>
            </NavLink>
          </div>
          <div className="dashboard-nav">
            <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" to="/home">Home</NavLink>
            <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" exact to={`${url}`}>Dashboard</NavLink>
            <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" to={`${url}/comment`}>Comment</NavLink>
            {
              admin && 
              <div>
                <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" to={`${url}/manageBooks`}>Manage Books</NavLink>
                <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" to={`${url}/makeAdmin`}>Make Admin</NavLink>
                <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" to={`${url}/addBook`}>Add Book</NavLink>
                <NavLink activeStyle={activeStyle} className="dashboard-navbar-link" to={`${url}/addMember`}>Add Member</NavLink>
              </div>
            }
            {
              user.email 
              &&
              <span onClick={logout} className="dashboard-navbar-link dashboard-logout-btn w-100 bg-danger text-left text-white">Logout</span>
            }
            
          </div>
        </div>
        <div className="col-md-10 p-0">
          <div className="py-2 ps-3 border-bottom border-2 border-white">
            <h2 className="text-white fw-bold text-center pt-2">Dashboard</h2>
          </div>
            <Switch>
              <Route exact path={path}>
                  <DashboardHome></DashboardHome>
              </Route>
              <AdminRoute path={`${path}/makeAdmin`}> 
                  <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <Route path={`${path}/addBook`}>
                  <AddBook></AddBook>
              </Route>
              <Route path={`${path}/addMember`}>
                  <AddMember></AddMember>
              </Route>
              <Route path={`${path}/manageBooks`}>
                  <ManageBooks></ManageBooks>
              </Route>
              <Route path={`${path}/comment`}>
                  <Comment></Comment>
              </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;