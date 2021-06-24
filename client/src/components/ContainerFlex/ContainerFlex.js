import React from 'react';
import './containerFlex.scss';

const ContainerFlex = (props) => {
  return (
    <div className='containerFlex' style={{ flexDirection: props.direction }}>
      {props.children}
    </div>
  )
}

export default ContainerFlex;
