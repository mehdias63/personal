import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Prog({now , titel}) {
  return(<div>
    <p className='btn'>{titel}</p>
     <ProgressBar now={now} label={`${now}%`} variant="info" animated visuallyHidden />
  </div>)
}

export default Prog;