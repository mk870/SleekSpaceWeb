import React from 'react'

import MenuList from '../../MenuList/MenuList'


type Props = {}

const SideMenu = (props: Props) => {
  return (
    <div className='bg-green-600 text-white w-[220px] flex'>
      <MenuList/>
    </div>
  )
}

export default SideMenu