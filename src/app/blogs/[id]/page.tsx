import Container from '@/components/Container'
import React from 'react'
import { IGetArticle } from '../page';
import { SearchParams } from 'next/dist/server/request/search-params';

interface IArticleProps {
    params: Promise <{id :number}>,
    SearchParams: Promise <{}>
}

async function Article(props :IArticleProps) {

    const {id} = await props.params;
    const result = await fetch(`http://localhost:8000/articles/${id}`);
        const data = (await result.json()) as IGetArticle;
  return (
    <Container>

        <div className='flex justify-between'>
         <h1 className=' p-2 font-bold text-4xl'>{data.title}</h1>
         <img src={data.img} className='w-150 h-150 rounded-4xl'/>
        </div>
        <p>{data.description}</p>

    </Container>
  )
}

export default Article