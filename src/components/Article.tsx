import { IGetArticle } from '@/app/blogs/page'
import React from 'react'

function Article({id,title,description,img} :IGetArticle) {
  return (
      <div className='  p-4 border-2 border-fuchsia-400 rounded-lg  shadow-2xl' > 
              <img src={img} className='  w-30 h-30  rounded-full justify-end shadow-2xl'/>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
  )
}

export default Article