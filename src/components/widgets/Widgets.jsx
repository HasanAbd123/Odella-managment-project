import React from 'react'
import "./widgets.scss";

const Widgets = () => {
  return (
    <div className='widget'>

        <div className='left'>
        <span className='title'>USER</span>
        <span className='counter'>2033</span>
        </div>
        <div className='right'>right</div>
    </div>
  )
}

export default Widgets