import React from 'react'
import ModelX from '../../assets/ModelX.png'
import ModXBut from '../../assets/modX_but.png'
import './index.css'
const Index = () => {
  return (
    <div className='container'>
        <img src={ModelX} alt="modelx" className='modelx_img' />
        <img src={ModXBut} alt="modxBut" className='modX_but'/>
    </div>
  )
}

export default Index