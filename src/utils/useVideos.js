import {useEffect, useState} from 'react'
import {VIDEO_API} from './constant'
import axios from 'axios'

const useVideos = () => {
    const [videoInfo, setVideoInfo] = useState()

     const getApiData = async() => {
         try{
            const res = await axios.get(VIDEO_API)
            const videoArray = res?.data?.items
            setVideoInfo(videoArray)
         }
         catch(err){
            console.error(err)
         }
     
    }
    useEffect(() => {
        // axios.get(VIDEO_API)
        // .then((res)=>{
           
        //     const videoArray = res?.data?.items
        //     console.log(videoArray,"res")
        //     setVideoInfo(videoArray)
        // })
        // .catch((err)=>{console.log(err,"err")})
        getApiData()
       
    }, [])

    return videoInfo
}

export default useVideos