import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
function Card(props) {
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src={props.card_pic} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <Link to={props.link} className="btn btn-primary">Goto Page</Link>
        </div>
      </div>
    </>
  );
}

export default Card;