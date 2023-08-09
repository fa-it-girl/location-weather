import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (

      <div  className='navbar'>
        <Link to='/location'><div class="svg-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            fill="#87CEFA"
            viewBox="0 0 512 512">
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
          </svg>
      </div></Link>
        <Link to='/weather'>
 <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          fill="#87CEFA"
          viewBox="0 0 640 512">
          <path d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"/>
        </svg>
      </div>
        </Link>

    </div>

  )
}

export default Navbar
