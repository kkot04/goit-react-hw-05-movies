import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '6d230c622d6ef293e3241f7254a93d17';

export const fetchMovies = async () => {
    const {data} = await axios.get('trending/movie/day' , {
        params: {
            api_key: API_KEY,
        }
    })
    return data
}

export const fetchMoviesById = async id => {
    const data = await axios.get(`movie/${id}`, {
        params: {
            api_key: API_KEY,
        }
    })
    return data
}

export const fetchMoviesByInput = async inputValue => {
    const data = await axios.get(`search/movie`, {
        params: {
            api_key: API_KEY,
            query: inputValue
        }
    })
    return data.result
}

export const fetchMovieReview = async id => {
    const data = await axios.get(`movie/${id}/reviews?language=en-US&page=1`, {
        params: {
            api_key: API_KEY,
        }
    })
    return data.result
}

export const fetchMoviesCast = async id => {
    const data = await axios.get(`movie/${id}/credits?language=en-US&page=1`, {
        params: {
            api_key: API_KEY,
        }
    })
    return data
}


