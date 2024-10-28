import React from "react";
import "./Card.css";
const Card = ({ title, img, creater }) => {
  return (
    <div className="cartnew">
      <center>
        <img
          height={150}
          width={250}
          src={img}
          alt="Img"
        />
        <div>
          {title}
          <p>
            <span id="by">By</span>&nbsp; {creater}
          </p>
        </div>
      </center>
    </div>
  );
};

export default Card;
