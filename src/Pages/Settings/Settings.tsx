import React from 'react'
import { useAppDispatch } from '../../Redux/Hooks/CustomHooks'
import { setThemeColor } from '../../Redux/Slices/ThemeSlice'

type Props = {}

const Settings = (props: Props) => {
  const dispatch = useAppDispatch()
  return (
    <div>
      <span className='text-[15px] text-white' onClick={()=> dispatch(setThemeColor("dark"))}>
        dark mode
      </span>
      <span className='text-[15px] text-white' onClick={()=> dispatch(setThemeColor("light"))}>
        light mode
      </span>
    </div>
  )
}

export default Settings