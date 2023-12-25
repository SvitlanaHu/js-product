import axios from 'axios';

const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

export function getProducts(page, limit) {
    return axios.get(`${BASE_URL}`, {
        params: {
            page: page,
            limit: limit,
        },
    });
};

export function getProductsKeyword(page, limit, value) {
    return axios.get(`${BASE_URL}`, {
        params: {
            page: page,
            limit: limit,
            keyword: value,
        },
    });
};

export function getProductsCategory(page, limit, category) {
    return axios.get(`${BASE_URL}`, {
        params: {
            page: page,
            limit: limit,
            category: category,
        },
    });
};

