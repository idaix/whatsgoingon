import { useState, useEffect } from 'react'
import { News, Stories } from '../components';
import { fetchNYTData } from '../utils/fetchApi'

const Home = () => {
    const [feed, setFeed] = useState([])
    const [stories, setStories] = useState([1, 2, 3, 4, 5])
    useEffect(() => {
        fetchNYTData('news/v3/content/all/all.json').then(data=>setFeed(data?.results))
    }, [])
    console.log(feed);
    return (
        <div>
            <div className="grid md:grid-cols-3 gap-5">
                <div className="md:col-span-2">
                    <News data={feed} />
                </div>
                {/* <div className="w-[1px] bg-black h-full"></div> */}
                <div className="md:col-span-1">
                    <Stories data={stories} />
                </div>
            </div>
        </div>
    )
}

export default Home