import React, { useState } from "react";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";

const MyOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${user.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user.email]);

  const handleDelete = id => {
    const proceed = window.confirm('Are you sure, you want to remove this order?');
    if(proceed) {
      const url = `http://localhost:5000/orders/${id}`;
        fetch(url, {
          method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount){
            alert(user.displayName + " you have deleted this service item.");
            const remaining = orders.filter(order => order._id !== id);
            setOrders(remaining);
          }
        })
      }
  }

  return (

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="fw-bold text-center my-4"><b style={{color:"#4800bb"}} className="text-bold">{user.displayName}</b> below your placed orders</h2>
          <table class="table table-sm table-responsive table-bordered border-primary text-center mt-3 mb-5" style={{fontSize:"14px"}}>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Action</th>
                <th>Status</th>
              </tr>
            </thead>
            {
              
              orders.map((order, i)=><tbody>
              <tr key={order.id} order={order}>
                <td style={{verticalAlign:"middle",padding:0}}>{order.pname}</td>
                <td style={{verticalAlign:"middle",padding:0}}>{order.price}</td>
                <td style={{verticalAlign:"middle",padding:0}}>
                <button onClick={ () => handleDelete(order._id)} className="btn btn-danger btn-sm d-block mx-auto my-3 fw-bold">Cancel</button>
                </td>
                <td style={{verticalAlign:"middle",padding:0}}><button className={order.status === "Pending" ? "btn btn-warning my-2 fw-bold text-dark btn-sm" : "btn btn-success my-2 fw-bold text-white btn-sm" }>{order.status}</button></td>
              </tr>
            </tbody>)
            }
          </table>                      
              
        </div>        
      </div>   
    </div>
  );
};

export default MyOrders;
