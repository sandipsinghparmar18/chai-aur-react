import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data=useLoaderData();

    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/sandipsinghparmar18')
    //     .then(data=>data.json())
    //     .then(data=>setData(data))
    // },[])


    return (
        <div className='text-white bg-gray-600 text-center
         p-4 text-3xl'>Github profile : {data.name} 
         <img src={data.avatar_url} alt='Github Picture' width={300}/>
         <p>{data.bio}</p>
         </div>
         
    )
}

export default Github
export const githubInfoLoader=async ()=>{
    const response=await fetch('https://api.github.com/users/sandipsinghparmar18')
    return response.json()
}