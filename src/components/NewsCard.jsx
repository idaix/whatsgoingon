import React from 'react'

const NewsCard = ({ title, abstract, multimedia, published_date, source, byline }) => {
  return (
    <div className='py-3 border-b-black border-b-[1px] grid md:grid-cols-3 gap-5'>
        <div className={!multimedia?.[2].url&&'col-span-3'}>
            <h1 className='text-xl font-bold mb-3 text-primary'>{title}</h1>
            <p className='text-gray-500'>{abstract}</p>
        </div>
        {multimedia?.[2].url&&(
            <figure className='md:col-span-2'>
                <img src={multimedia?.[2].url} alt={title} className="w-full" />
            </figure>
        )}
        <p className='text-xs font-extralight text-gray-500'>{byline}/{source}</p>
    </div>
  )
}

export default NewsCard