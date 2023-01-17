import { StoryCard } from '.'

const Stories = ({ data }) => {
  return (
    <div className='grid gap-3'>
        <div className="flex justify-between items-center pt-5">
          <h1 className='text-4xl font-brand text-primary'>Stories</h1>
          {/* <span>See more</span> */}
        </div>
        {data?.map((item, i)=>(
            <StoryCard key={i} {...item} />
        ))}
    </div>
  )
}

export default Stories