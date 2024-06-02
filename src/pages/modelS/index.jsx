import React from 'react'
import ModelS from '../../assets/ModalS.png'
import ModelSBut from '../../assets/modelS_but.png'
import './index.css'
const Index = () => {
  return (
    <div className='container'>
        <img src={ModelS} alt="models" className='modelS_img'/>
        <img src={ModelSBut} alt="mSbutton"  className='modS_but'/>
    </div>
  )
}

export default Index