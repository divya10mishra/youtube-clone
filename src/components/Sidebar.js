import React from 'react'
import home from '../assets/home-logo.png'
import shorts from '../assets/shorts-logo.png'
import subscription from '../assets/subscription-logo.png'
import library from '../assets/library-logo.png'
import watch from '../assets/watch.png'
import yourvideo from '../assets/your-video.png'
import watchlater from '../assets/watch-later.png'
import liked from '../assets/liked.jpg'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  const menuFlag = useSelector((store)=>store.app.flag)

    return (
      <>
      {menuFlag ?  <div className='m-2'>
         <img src={home} className='w-12 h-10'/> 
          <img src={shorts} className='w-12 h-10 mt-7'/>
          <img src={subscription} className='w-12 h-10 mt-7'/>
          <img src={library} className='w-12 h-10 mt-7'/> 
        </div> :
         <div className='m-2'>
          <span className='flex mt-1'><img src={home} className='w-10 h-8'/> Home </span>
         <span className='flex  mt-4'><img src={shorts} className='w-10 h-8'/>Shorts </span>
         <span className='flex mt-4 mb-4'><img src={subscription} className='w-10 h-8'/> Subscription </span> <hr/>
         <span className='flex mt-4'><img src={watchlater} className='w-8 h-8'/>History</span>
         <span className='flex mt-4'><img src={yourvideo} className='w-10 h-8'/>Your Videos</span>
         <span className='flex mt-4'><img src={library} className='w-10 h-8'/>Library</span>
         <span className='flex mt-4'><img src={watch} className='w-8 h-8'/>Watch Later</span>
         <span className='flex mt-4'><img src={liked} className='w-10 h-8'/>Liked Video</span>
       </div>}
       </>
    )
}

export default Sidebar
