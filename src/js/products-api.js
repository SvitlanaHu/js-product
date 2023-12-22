import axios from 'axios';

const BASE_URL = 'https://food-boutique.b.goit.study/api/products';

export async function fetchProducts(page, limit) {
    const axiosOptions = {
        method: 'get',
        url: '${BASE_URL}',
        params: {
            page: page,
            limit: limit,
        },
    };
    try {
        const response = await axios(axiosOptions);
        const data = response.data;
        console.log('response:', response);
        console.log('data:', data);
        return data;

    } catch (error) {
        console.error(error);
    }
}

