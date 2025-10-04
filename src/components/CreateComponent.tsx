"use client"
import React, { useState } from 'react'

function CreateComponent() {
const [title,setTitle]=useState<string>("")
const [description,setDescription]=useState<string>("")
const [image,setImage]=useState<File | null >(null)

const eventHandler = ()=>{
    fetch("http://localhost:8000/articles",{
        method :"POST",
        body: JSON.stringify({
             
            id:Math.floor( Math.random() *1000 ).toString(),
            img:image,
            title:title,
            description : description
        

        })
    })
}

  return (
     <div className=' flex flex-col w-full h-full gap-5  p-4'>
        <p className='bg-amber-50 font-bold text-3xl  w-fit h-fit '>create blogs</p>
         <label className='bg-amber-50 font-bold text-3xl  w-fit h-fit '>title</label>
        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} 
        className='w-full h-fit bg-auto border-2 border-blue-600'/>
        <label className='bg-amber-50 font-bold text-3xl  w-fit h-fit '>image</label>
        <input type="file" 
        accept="*/*"
        onChange={(e)=>setImage(e.target.files?.[0] ?? null)}
        className='w-full h-fit bg-auto border-2 border-blue-600'/>
        <label  className='bg-amber-50 font-bold text-3xl  w-fit h-fit '>description</label>
        <textarea placeholder='write here'value={description}
        onChange={(e)=>setDescription(e.target.value)} 
        className='w-full h-fit bg-auto border-2 border-blue-600'></textarea>
       <button onClick={eventHandler}>submit</button>
       </div>
  )
}

export default CreateComponent