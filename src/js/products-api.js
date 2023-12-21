import axios from 'axios';

const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

export function getProdusts(page, limit) {
    return axios.get(${ BASE_URL }, {
        params: {
            page: page,
            limit: limit,
        },
    });
};