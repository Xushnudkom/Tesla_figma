import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import routes from '@routes'
import Logo from '@logo'
import Search from '@search'
import Accaunt from '@accaunt'
import Hamburger from '@hamburger'
import RightArrow from '@rightArrow'
import LeftArrow from '@leftArrow'
import './index.css'
const Index = () => {
    const {pathname} = useLocation()
    console.log(pathname);
  return (
    <header className='container'>
        <img src={Logo} alt="logo" className='logo' />
        <ul>
            
            {
                
                routes?.map((item, index)=>(
                    <li key={index}>
                        <NavLink to={item.path} className={item.path === pathname ? "text-primary display-1 py-1 px-4 border border-primary fs-6 rounded-pill text-decoration-none" : "display-1 text-white py-1 px-4 fs-6 text-decoration-none" }>
                            {item.content}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
        <img src={Search} alt="search"  className='search'/>
        <button className='button-acc'>
        <img src={Accaunt} alt="accaunt" />
        </button>
        <button className='hambur-acc'>
        <img src={Hamburger} alt="hamburger" />
        </button>
        
            <img src={RightArrow} alt="arrowRight" className='right_arrow'/>
            <img src={LeftArrow} alt="arrowleft" className='left_arrow' />
        
    </header>
  )
}

export default Index