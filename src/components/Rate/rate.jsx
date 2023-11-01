import React, { useState } from 'react'
import { FaStar } from "react-icons/fa6";

const possible = [1,2,3,4,5]

export default function Rate() {
    const [selected , setSelected]=useState(null);
    const [hoverd , setHoverd]=useState(null);

  return (
    <div className='rate'>
        <div className='rate-head'>
            <p className='titel text-Extreme'>Please Rate Me</p>
        </div>
        <div className='rate-bottom'>
            <div className='star flex justify-center'>
                {possible.map(rate => 
                    <i key={rate} 
                    className={((rate <= selected && !hoverd) ? 'in-rate' : '') + 
                ((rate <= hoverd) ? 'in-hover' : '')}
                    onClick={() => setSelected(rate)}
                    onMouseEnter={() => setHoverd(rate)}
                    onMouseLeave={() => setHoverd(null)}
                    > <FaStar /> </i>
                    )}
            </div>
        </div>
        </div>
  )
}
