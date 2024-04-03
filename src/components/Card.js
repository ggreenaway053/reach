import React from 'react';

function Card(props){
  return(
    <div>
      <img src={props.img} alt={props.title} className="w-100" />
      <div className="content mt-4">
        <h4>{props.title}</h4>
        <p>{props.type}</p>
      </div>
    </div>
  );
}
export default Card;