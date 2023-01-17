import React from 'react'

const StoryCard = ({ title, abstract, multimedia, published_date, source, byline }) => {
  return (
    <div className='py-3 border-b-black border-b-[1px] flex flex-col gap-2'>
        <h1 className="text-lg">{title}</h1>
        {multimedia?.[2].url&&(
            <figure className=''>
                <img src={multimedia?.[2].url} alt={title} className="w-full" />
            </figure>
        )}
        <p className="text-xs text-gray-500">{abstract}</p>
    </div>
  )
}

export default StoryCard