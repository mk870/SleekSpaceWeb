import React from 'react'

type Props = {
  viewType:"mobile"|"desktop"
}

const Navbar:React.FC<Props> = ({
  viewType
}) => {
  return (
    <div className='bg-red-800 text-white w-full h-[80px] flex'>Navbar</div>
  )
}

export default Navbar