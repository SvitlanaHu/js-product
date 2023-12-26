import axios from 'axios'; 
import { createMarkup } from "./products-list"; 
import { getProductsKeyword } from './products-api'; 

import { getFilters, updateFilter, updateCartButtonIcons, setCartButtonEventListeners} from './local-storage';
 
const BASE_URL = 'https://food-boutique.b.goit.study/api/products'; 
 
 
const searchBar = document.getElementById('search-bar-id'); 
let foodProducts = []; 
let keyword = null; 
let page = 1; 
let limit = 6; 
 
 
// function
searchBar.addEventListener('input', onFilterInput); 
 
 
function onFilterInput(e) { 
    const searchString = e.target.value.toLowerCase(); 

    updateFilter( "keyword", searchString);
 
    console.log(e.target.value); 
 
 
    const filteredProducts = foodProducts.filter(item => { 
        return item.name.toLowerCase().includes(searchString); 
    }); 
    console.log(filteredProducts); 
    createMarkup(filteredProducts); 
}