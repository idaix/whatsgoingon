import { StoryCard } from '.'

const Stories = ({ data }) => {
  return (
    <div className='grid gap-3'>
        {data?.map((item, i)=>(
            <StoryCard key={i} item={item} />
        ))}
    </div>
  )
}

export default Stories