const NewsCard = ({ title, abstract, multimedia, published_date, source, byline }) => {
  return (
    <div className='py-3 border-b-black border-b-[1px] grid md:grid-cols-3 gap-5'>
        <div className={!multimedia?.[2].url&&'md:col-span-3'}>
            <h1 className='text-xl font-bold mb-3 text-primary'>{title}</h1>
            <p className='text-gray-500 text-lg'>{abstract}</p>
        </div>
        {multimedia?.[2].url&&(
            <figure className='md:col-span-2'>
                <img src={multimedia?.[0].url} alt={title} className="w-full" />
            </figure>
        )}
        
        {/* <p className='text-xs  text-gray-500 col-start-1 col-end-7 font-thin'>{published_date}</p> */}
        <p className='text-xs  text-gray-500 md:col-start-1 md:col-end-7 font-thin'>{byline}/{source} - {published_date}</p>
    </div>
  )
}

export default NewsCard