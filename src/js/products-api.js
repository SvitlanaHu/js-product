// import axios from 'axios';

// const BASE_URL = 'https://food-boutique.b.goit.study/api';

// export default class FoodBoutiqueApiService {
//     constructor() {
//         this.searchQuery = '';
//         this.page = 1;
//         this.PER_PAGE = 9;
//     }
//     async fetchPictures() {
//         const axiosOptions = {
//             method: 'get',
//             url: '${BASE_URL}',
//             params: {
//                 key: KEY,
//                 q: `${this.searchQuery}`,
//                 image_type: 'photo',
//                 orientation: 'horizontal',
//                 safesearch: true,
//                 page: `${this.page}`,
//                 per_page: `${this.PER_PAGE}`,
//             },
//         };
//         try {
//             const response = await axios(axiosOptions);

//             const data = response.data;

//             // this.incrementPage();
//             return data;
//         } catch (error) {
//             console.error(error);
//         }
//     }

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
// }

// "page": 1,
//     "perPage": 3,
//         "totalPages": 4,