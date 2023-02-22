import { Alert } from 'bootstrap';
import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={props.image} alt="profile" className="circle-img" />
      </div>
      <div className="card-content">
        <h2>{props.Name}</h2>
        <p>{props.Domin}</p>
      </div>
      <div className="card-action">
        <button className="button">{props.buttonText}</button>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Card;
=======
export default Card;
>>>>>>> b3b8c4e45448a578c8297eec08e0770f7e9c3fde
