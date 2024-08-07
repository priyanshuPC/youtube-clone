import axios from "axios";

const BASE_URL = "https://youtube138.p.rapidapi.com";

const options = {
    params: { 
        hl: 'en',
        gl: 'US' },
    headers: {
        "X-RapidAPI-Key":
            process.env.REACT_APP_YOUTUBE_API_KEY || "b943a81370msh3fb5e3061a598e9p18d741jsna0ed7e38742a",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    }
};

export const fetchDataFromApi = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
    return data;
}; 
// import axios from "axios";
// const BASE_URL = "https://yt-api.p.rapidapi.com/dl"
// const options = {
    
//     params: {hl: "en", gl: "US" },
//     headers: {
//       'x-rapidapi-key': process.env.REACT_APP_YOUTUBE_API_KEY ||"bfbd494ef3msh886aa70188c5c96p17fe39jsne5c9d369b128",
//       'x-rapidapi-host': 'yt-api.p.rapidapi.com'
//     },
//   };

//   export const fetchDataFromApi = async (url) => {
//     const { data } = await axios.get(`${BASE_URL}/${url}`, options);
//     return data;
// }; 