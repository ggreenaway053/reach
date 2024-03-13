import React from 'react';
import { Col } from "react-bootstrap";
import Popup from "reactjs-popup";

function Card(props){
  return(
    <Col lg="6" className="mb-5 item">
      <img src={props.img} alt={props.title} className="w-100" />
      <div className="content mt-4">
        <h4>{props.title}</h4>
        <p>{props.type}</p>

        <Popup trigger={<button className="btn"><span>Read More</span></button>} modal nested>
          <div className="header mb-4">
            <h3>{props.title}</h3>
            <p>{props.type}</p>
            <hr/>
          </div>
          <div className="row">
            <Col lg="6" className="mb-4">
              <h5>Who?</h5>
              <p>{props.who}</p>
            </Col>

            <Col lg="6" className="mb-4">
              <h5>Tech Stack</h5>
              {props.tech}
            </Col>

            <Col lg="12">
              <a href={props.link} target="_blank" className="btn"><span>View Site</span></a>
            </Col>
          </div>
        </Popup>
      </div>
    </Col>
  );
}
export default Card;