import axios from "axios";
const BASE_URL = 'https://api.nytimes.com/svc'

const options = {
    url: BASE_URL,
    params: {
        'api-key': import.meta.env.VITE_APP_NYT_API,
    },
    // headers: {
    // 'X-RapidAPI-Key': import.meta.env.VITE_APP_RAPID_API_KEY,
    // 'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    // }
};


export const fetchNYTData = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options)

    return data;
}