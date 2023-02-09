import React from 'react'

function NavBar() {
    const items = [
        {name : 'H'},
        {name : 'S'},
        {name : 'N'}
    ]
  return (
    <nav className='min-h-screen w-[10%] bg-navbar flex justify-center items-center text-zinc-50'>
        <div className='w-full h-40 flex flex-col place-content-between'>
            {items.map((item)=>{
                return <div key={item.name} className='flex justify-center items-center h-12 cursor-pointer hover:border-l-4 hover:border-l-orange'>{item.name}</div>
            })}
        </div>
    </nav>
    )
}

export default NavBar;