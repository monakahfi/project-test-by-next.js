import Article from '@/components/Article'
import Container from '@/components/Container'
import Link from 'next/link';
import React from 'react'


export interface  IGetArticle {
    id?:number,
    img: File,
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
                   <Link href={`blogs/${i.id}`}>
                   
                   <Article key={i.id}{...i}/>
                   </Link>
            ))
           }
          
          
        </div>
    </Container>
  )
}

export default Blogs