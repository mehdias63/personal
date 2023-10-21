import React from 'react'
import { BsBuildings } from "react-icons/bs";

export default function Card({titel , text }) {
  return (
    <div>
      <span><BsBuildings /></span>
        <h1>{titel}</h1>
        <p>{text}</p>
    </div>
  )
}
