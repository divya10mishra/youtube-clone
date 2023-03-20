import React from 'react'
import menu from '../assets/menu-three-lines.png'
import youtube from '../assets/youtube-logo.png'
import { toggleMenu } from '../utils/Slice/appSlice'
import {useDispatch} from 'react-redux'

const Header = () => {
    
    const dispatch =  useDispatch()
     const toggleMenuButton = () => {
         dispatch(toggleMenu())
     }
    return (
        <div className='flex m-3'>
            <img src={menu} className='w-8 h-7' onClick = {toggleMenuButton}/>
            <img src={youtube} className='w-30 h-7 ml-5'/>
            <div className='mx-20 w-full flex'>
            <input placeholder='Search' className='w-full h-10 border-solid border-2 block border-grey-600 rounded-l-lg pl-5' />
            <input placeholder='🔍' className='w-10 h-10 border-solid border-2 border-grey-600 rounded-r-lg px-5' />
            </div>
        </div>
    )
}

export default Header
