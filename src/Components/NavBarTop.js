import React from 'react'

function NavBarTop({children}) {
  return (
        <div className='w-full h-12 flex flex-row items-center justify-center'>
          <h1>PhotoGallery</h1>
            {children}
        </div>
    )
}

export default NavBarTop