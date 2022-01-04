import React, { useEffect, useState } from 'react';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect( () => {
        fetch(`https://glacial-springs-00927.herokuapp.com/orders`)
        .then(res => res.json())
        .then(data => setOrders(data));
    }, []);

      const handleDelete = id => {
      const proceed = window.confirm('Are you sure, you want to remove this order?');      
      if(proceed){
        const url = `https://glacial-springs-00927.herokuapp.com/orders/${id}`;
        fetch(url, {
          method: "DELETE",
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.deletedCount){
            alert('Deleted The Order')
            const remaining = orders.filter(order => order._id !== id);
            setOrders(remaining);
          }
        })
      }
    }

  // const status shipped
  const handleStatus = (id) => {
    fetch(`https://glacial-springs-00927.herokuapp.com/orders/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
    .then(res => res.json())
    .then(data => {
        if (data.modifiedCount > 0) {
            alert('Update shipped status successful');
        }
    })

  };  

    return (
        <div className="container mb-5">
          <div className="row gy-4 justify-content-center">
              <h1 style={{color:"#4800bb"}} className="text-center mt-5 mb-2 fw-bold">Manage All Orders</h1>
              {
                orders.map(order => <div className="col-lg-8 text-left border border-1 py-3 mx-3" key={order._id}>
                    <div className="row justify-content-center">
                      <div className="col-lg-7 border border-1 border-primary p-3">
                        <h6><b className="text-primary mt-3">Product Name:</b> {order.pname}</h6>
                        <h6><b className="text-primary">Product Price:</b> ${order.price}</h6>
                        <h6 className="text-primary mt-3"><b>Client Name:</b> {order.name}</h6>
                        <p><b className="text-primary">Client Email:</b> {order.email}</p>
                        <p><b className="text-primary">Order Status:</b> <b className={order.status === "Pending" ? "fw-bold text-dark" : "fw-bold text-success" }>{order.status}</b></p>
                      </div>
                      <div className="col-lg-2 border border-1 border-primary p-3">
                        <button onClick={ () => handleStatus(order._id)} className={order.status === "Pending" ? "btn btn-warning my-2 fw-bold text-dark btn-sm" : "btn btn-success my-2 fw-bold text-white btn-sm" }>Shipped</button>
                        <br />
                        <button onClick={ () => handleDelete(order._id)} className="btn btn-danger my-2 fw-bold btn-sm">Remove</button>
                      </div>
                    </div>
                  </div>)
              }
          </div>
        </div>
    );
};

export default ManageAllOrders;


                    