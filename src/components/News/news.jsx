import React from "react";
import Card from "./Card";
import data from "./data";

export default function News() {
  return (
    <div className="news" id="pages">
      <div className="newdata">
        <h1>OFFERINGS TO MY CLIENTS</h1>
        <p>
          If you are looking at blank cassettes on the web, you may be very
          confused at the difference in price. You may see some for as low as
          $.17 each.
        </p>
      </div>
      <div className="new">
        {data.map((card) => (
          <Card
            key={card.titel}
            titel={card.titel}
            text={card.text}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
}
