import React from "react";

const Card = (props) => {
  return (
    <td>
      <img className="resized-img" src={props.img} alt={props.alt} />
      <h4>{props.name}</h4>
      <h6>{props.description}</h6>
      <button>Learn More</button>
    </td>
  );
};
export default Card;
