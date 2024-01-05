import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex nav justify align'>
        <div><h2 className='h2'style={{color:"white",fontFamily:"'Nova Square', sans-serif",fontSize:"30px"}}>Kalvium Books</h2></div>
        {/* Linking button to home page   */}
        <div> <Link to={"/"}>
            <button id='btn'>H O M E</button>
        </Link>
        </div>
    </div>
  )
}

export default Navbar