import React from 'react';
import ProfileView from './ProfileView.js'
import View from './ProfileView.js';
import { Link } from "react-router-dom";


const Card = (props) => {
  return (
      <div className="Card-pattren">
        <div className="card-image">
          <img src={props.image} alt="profile" className="circle-img" />
        </div>
        <div className="card-content">
          <h2>{props.Name}</h2>
          <p>{props.Domin}</p>
        </div>
        <div className="card-action">
              <button type="button" className="btn btn-primary btn-sm">{props.buttonText}</button>
        </div>
      </div>
  );
}
export default Card;
