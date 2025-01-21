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
        // <div className='text-white bg-gray-600 text-center
        //  p-4 text-3xl'>Github profile : {data.name} 
        //  <img src={data.avatar_url} alt='Github Picture' width={300}/>
        //  <p>{data.bio}</p>
        //  </div>
        
        <div class="flex flex-col items-center p-6 bg-gray-100">
            <div class="mb-4 text-center">
              <h1 class="text-xl font-bold text-gray-800">{data.name}</h1>
            </div>

            {/* <!-- Main Content --> */}
            <div class="flex flex-row w-full max-w-4xl bg-white rounded-lg shadow-md">
              {/* <!-- Left Side (Image) --> */}
              <div class="w-1/3">
                <img 
                  src= {data.avatar_url}
                  alt="Placeholder Image" 
                  class="object-cover w-full h-full rounded-l-lg"
                />
              </div>

              {/* <!-- Right Portion (Text) --> */}
              <div class="w-2/3 p-4">
                <p class="text-gray-600">
                Hi, I’m {data.name}, a passionate and driven final-year Computer Science Engineering (CSE) student with a deep enthusiasm for technology and problem-solving. My journey in software development began with curiosity about how applications work behind the scenes, evolving into a focused pursuit of building impactful solutions.

Currently, I’m honing my skills in Data Structures and Algorithms (DSA), with a strong command of Java, which helps me craft efficient and optimized code for solving complex problems. Alongside this, I’m also exploring the MERN stack (MongoDB, Express, React, Node.js) to strengthen my expertise in modern web development.
                </p>
              </div>
            </div>
        </div>

         
    )
}

export default Github
export const githubInfoLoader=async ()=>{
    const response=await fetch('https://api.github.com/users/sandipsinghparmar18')
    return response.json()
}