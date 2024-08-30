'use client'

import { useEffect } from "react"

export default function error({error, reset}) {
    useEffect (()=>{
        console.log(error);
    },[error])
  return (
    <div className='text-center mt-10'>
        Something went wrong
        <button className = 'hover:text-amber-600' onclick = {()=> reset()}>Try again</button>
    </div>
  )
}
