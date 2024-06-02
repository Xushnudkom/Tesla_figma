import React from 'react'
import ModelY from '../../assets/ModelY.png'
import ModY_but from '../../assets/modY_but.png'
import './index.css'
const Index = () => {
  return (
    <div className='container'>
        <img src={ModelY} alt="modely" className='modely_img' />
        <img src={ModY_but} alt="modybut" className='mody_but'/>
    </div>
  )
}

export default Index