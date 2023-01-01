import { NewsCard } from '.'

const News = ({ data }) => {
  return (
    <div className='grid gap-3'>
        {data?.map(item=>(
            <NewsCard key={item.slug_name} {...item} />
        ))}
    </div>
  )
}

export default News