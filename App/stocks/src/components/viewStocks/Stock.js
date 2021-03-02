import React from "react";



function Stock(props) {

    function handleClick() {

        props.onDelete(props.pId);
    
      }

  return (

    <div className="card-body">

      <p className="card-title">Product ID : {props.pId}</p>

      <p className="card-text">Product Name : {props.pName}</p>

      <p className="card-text">Quantity Available : {props.qAvailable}</p>

      <p className="card-text">Date : {props.date}</p>

      <p className="card-text">Status : {props.status}</p>

      <button className="btn btn-primary" onClick={handleClick}>
        delete
      </button>

    </div>

  );

}

export default Stock;