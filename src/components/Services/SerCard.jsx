import React from 'react'

export default function SerCard({titel , description ,image}) {
  return (
    <div className='count'>
        <img src={`../images/${image}`} />
        <h1>{titel}</h1>
        <p>{description}</p>
    </div>
  )
}
