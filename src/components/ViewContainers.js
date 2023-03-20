import React, {useEffect} from 'react'
import VideoCard from './VideoCard'
import useVideos from '../utils/useVideos'
import {Link} from 'react-router-dom'

function ViewContainers() {
    const videos = useVideos()
    console.log(videos,"videos")
    return <div className="flex flex-wrap m-5">
     {videos?.map(videoo => 
      <div key = {videoo.id} className="m-5 w-72 shadow-lg" >
        <Link to = {"/watch?v="+videoo.id}>  <VideoCard info = {videoo}/> </Link>
      </div>
     )
     }
    </div>
}

export default ViewContainers