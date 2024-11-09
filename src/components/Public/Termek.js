import React from "react";

function Termek(props) {
  return (
    <div className="col-sm-4">
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.elem.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.elem.title}</h5>
          <p className="card-text">{props.elem.description}</p>
          <a href="#" className="btn btn-primary">
            Buy
          </a>
        </div>
      </div>
    </div>
  );
}

export default Termek;
