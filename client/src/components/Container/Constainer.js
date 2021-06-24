import React from 'react';
import './container.scss';

const Constainer = (props) => {
  return (
    <div className='container'>
      {props.children}
    </div>
  )
}

export default Constainer;
