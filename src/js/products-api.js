import axios from 'axios';

const BASE_URL = 'https://food-boutique.b.goit.study/api-docs';

export default class FoodBoutiqueApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
        this.PER_PAGE = 9;
    }
    async fetchProducts() {
        const axiosOptions = {
            method: 'get',
            url: '${BASE_URL}',
            params: {
                q: `${this.searchQuery}`,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: `${this.page}`,
                per_page: `${this.PER_PAGE}`,
            },
        };
        try {
            const response = await axios(axiosOptions);
            const data = response.data;

            return data;
        } catch (error) {
            console.error(error);
        }
    }

    //     incrementPage() {
    //         this.page += 1;
    //     }

    //     resetPage() {
    //         this.page = 1;
    //     }

    //     resetEndOfHits() {
    //         this.endOfHits = false;
    //     }

    //     get query() {
    //         return this.searchQuery;
    //     }

    //     set query(newQuery) {
    //         this.searchQuery = newQuery;
    //     }
}
const foodBoutiqueApiService = new FoodBoutiqueApiService();
console.log("query: ", foodBoutiqueApiService.query);