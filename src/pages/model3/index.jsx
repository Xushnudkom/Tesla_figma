import React from 'react'
import Model3 from '../../assets/Model3.png'
import Mod3But from '../../assets/red_but.png'
import './index.css'
const Index = () => {
  return (
    <div className='container'>
        <img src={Model3} alt="model3" className='model3_img'/>
        <img src={Mod3But} alt="mod3But" className='mod3_but'/>
    </div>
  )
}

export default Index