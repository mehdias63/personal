import React from "react";
import Button from "../Button";
import Intcard from "./Intcard";
import intdata from "./intdata";
export default function Intro() {
  return (
    <div className="intro" id="blog">
      <div className="btn">
        <Button size="lg">My Experiences</Button>
        <Button size="lg">My Education</Button>
      </div>
      {intdata.map((card) => (
        <Intcard
          key={card.id}
          titel={card.titel}
          description={card.description}
          text={card.text}
          textdat={card.textdat}
        />
      ))}
    </div>
  );
}
