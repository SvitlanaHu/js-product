import axios from 'axios'; 
import { createMarkup } from "./products-list"; 
import { getProductsKeyword } from './products-api'; 
 
const BASE_URL = 'https://food-boutique.b.goit.study/api/products'; 
 
 
const searchBar = document.getElementById('search-bar-id'); 
// const ulEl = document.querySelector('.card-container-list'); 
// console.log(ulEl); 
let foodProducts = []; 
let keyword = null; 
let page = 1; 
let limit = 6; 
 
// searchBar.addEventListener('submit', onFilterSubmit) 
 
// async function onFilterSubmit(evt) { 
//     evt.preventDefault() 
//     page = 1; 
//     const searchValue = evt.target.elements['item-search-value'].value.toLowerCase() 
//     keyword = searchValue; 
//     console.log(searchValue); 
//     try { 
//         // This part needs to be fixed 
//         const { data } = await getProductsKeyword(page, limit, value); 
//         const { } = data; 
//         if (.length === 0) { 
 
 
//         } 
//     } catch (error) { 
//         console.log(error.message); 
//     } 
// } 
 
 
searchBar.addEventListener('input', onFilterInput); 
 
 
function onFilterInput(e) { 
    const searchString = e.target.value.toLowerCase(); 
    console.log(e.target.value); 
 
 
    const filteredProducts = foodProducts.filter(item => { 
        return item.name.toLowerCase().includes(searchString); 
    }); 
    console.log(filteredProducts); 
    createMarkup(filteredProducts); 
}