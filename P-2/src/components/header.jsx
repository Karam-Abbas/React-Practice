import React from 'react'
import '../App.css'


function Header({btn = 'Header'}) {
  return (
    <div className='text-3xl text-white bg-yellow-600 h-12 w-full pl-2 pt-1 '>{btn}</div>
  );
}

export default Header