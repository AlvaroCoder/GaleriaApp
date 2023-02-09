import React from 'react'
import { Home, NavBar } from '../Components';

function Author() {
  return (
    <div className='w-full h-screen flex flex-row'>
        <NavBar/>
        <Home/>
    </div>
    )
}

export default Author;