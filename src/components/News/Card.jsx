import React from 'react'
import { BsBuildings } from "react-icons/bs";
import { CiBank } from "react-icons/ci";
import { BsBuilding } from "react-icons/bs";

export default function Card({titel , text , icon}) {
  return (
    <div>
      <span>
        {icon === "BsBuildings" && <BsBuildings />}
        {icon === "CiBank" && <CiBank />}
        {icon === "BsBuilding" && <BsBuilding />}
        </span>
        <h1>{titel}</h1>
        <p>{text}</p>
    </div>
  )
}
