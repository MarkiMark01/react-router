import axios from 'axios';

const APIKEY = '03bc4a4901e556f9924acb8dbfb5d03a';
const URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
    const page = 12;
    try {
        const { data } = await axios.get(`${URL}/movie/popular`, {
            params: {
                api_key: APIKEY,
                page: page,
            },
        });
        return data;
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error.message}`);
    }
};


export const fetchMoviesDetails = async (id) => {
    try {
        const { data } = await axios.get(`${URL}/movie/${id}`, {
            params: {
                api_key: APIKEY,
            },
        });
        return data;
    } catch (error) {
        throw new Error(`Failed to fetch data: ${error.message}`);
    }
};

export const searchPosts = async (search) => {
    try {
        const response = await axios.get(`${URL}/search/movie`, {
            params: {
                api_key: APIKEY,
                query: search,
            },
        });

        return response.data.results;
    } catch (error) {
        throw error;
    }
};
export const searchReviews = async (id) => {
    try {
        const response = await axios.get(`${URL}/search/movie/${id}/reviews`, {
            params: {
                api_key: APIKEY,
                query: id,
            },
        });

        return response.data.results;
    } catch (error) {
        throw error;
    }
};





export const getReviews = async id => {
    return await fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${APIKEY}&include_adult=false`
    ).then(res => {
        if (!res.ok) {
            //   return Promise.reject(new Error(`No ${searchQuery} picture`));
        }
        return res.json();
    });
};




const options = { method: 'GET', headers: { accept: 'application/json' } };

async function getMovieReviews(movieId) {
    const fetchURL = `${URL}/movie/${movieId}/reviews?api_key=${APIKEY}&language=en-US&page=1`;

    try {
        const response = await fetch(fetchURL, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}

export { getMovieReviews };



// async function getMovieCast(movieId) {
//     const fetchURL = `${URL}/movie/${movieId}/cast?api_key=${APIKEY}&language=en-US&page=1`;

//     try {
//         console.log("Fetching from URL:", fetchURL); // Add logging for the fetch URL
//         const response = await fetch(fetchURL, options);
//         if (!response.ok) {
//             throw new Error('Movie cast not found or the request was not successful');
//         }
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }

// export { getMovieCast };



export const getMovieCast = async id => {
    return await fetch(
        `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${APIKEY}&include_adult=false`
    ).then(res => {
        if (!res.ok) {
            //   return Promise.reject(new Error(`No ${searchQuery} picture`));
        }
        return res.json();
    });
};
