import React from 'react'

export default function UlserCard({titel , id }) {
  return (
          <li><a href={`#${id}`}> {titel} </a></li>
             )
}
