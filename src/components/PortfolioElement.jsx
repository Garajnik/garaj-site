import React from "react";
import "./PortfolioElement.css";

export default function PortfolioElement(props) {
  return (
    <div className="image-container">
      <img src={`${props.link}`} alt={props.name} className="zoom-image" />
      <div class="overlay-text">{props.name}</div>
    </div>
  );
}
