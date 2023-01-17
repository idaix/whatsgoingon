import { useState, useEffect } from 'react'
import { News, Stories } from '../components';
import { fetchNYTData } from '../utils/fetchApi'

const Home = () => {
    const [feed, setFeed] = useState([])
    const [stories, setStories] = useState([])
    useEffect(() => {
        fetchNYTData('topstories/v2/home.json').then(data=>setFeed(data?.results))
    }, [])
    useEffect(() => {
        fetchNYTData('news/v3/content/all/all.json').then(data=>setStories(data?.results))
    }, [])
    return (
        <div>
            <div className="grid md:grid-cols-4 gap-10">
                <div className="md:col-span-3">
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