import React from "react";

export default function Intcard({ titel, description, text, textdat }) {
  return (
    <div className="count">
      <div>
        <h3>{titel}</h3>
      </div>
      <div>
        <div className="container">
          <div>
            <span></span>
          </div>
        </div>
      </div>
      <div>
        <h1>{description}</h1>
        <h4>{text}</h4>
        <h4>{textdat}</h4>
      </div>
    </div>
  );
}
