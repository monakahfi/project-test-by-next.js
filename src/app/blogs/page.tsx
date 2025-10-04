import Article from '@/components/Article'
import Container from '@/components/Container'
import React from 'react'


export interface  IGetArticle {
    id?:number,
    img: string,
    title: string,
    description: string,

}

async function Blogs() {
    const result = await fetch("http://localhost:8000/articles");
    const data = await result.json() as IGetArticle[];

   
  return (
    <Container>
        <div className='grid grid-cols-4 gap-4 py-16  '>
           {
            data.map((i)=>(

                <Article key={i.id}{...i}/>
            ))
           }
          
          
        </div>
    </Container>
  )
}

export default Blogs