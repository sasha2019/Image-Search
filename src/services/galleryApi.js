import axios from 'axios';

const key = '19312554-0803ac0c367f007a58f4ff1c9';

export function fetchImagesByQuery(query, page = 1) {
    return axios
    .get(
        `https://pixabay.com/api/?q=${query}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`  
    )
    .then((res) => res.data.hits);
}
