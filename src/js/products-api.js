import axios from 'axios';

const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

export function getProducts(params) {
    return axios.get(`${BASE_URL}`, {
        params: params,
    });
};

