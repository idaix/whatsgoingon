import { NewsCard } from '.'

const News = ({ data }) => {
  return (
    <div className='grid gap-3'>
        <div className="flex justify-between items-center pt-5">
          <h1 className='text-4xl font-brand text-primary'>Feed</h1>
          {/* <span>See more</span> */}
        </div>
        {data?.map(item=>(
            <NewsCard key={item.slug_name} {...item} />
        ))}
    </div>
  )
}

export default News