import React from 'react'

function HeaderItem({name, Icon, onClick}) { // Terima onClick prop
  return (
    <div 
      className='text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-3'
      onClick={onClick} // Terapkan onClick handler
    >
        <Icon />
        <h2 className=''>{name}</h2>
    </div>
  )
}

export default HeaderItem