import { API_URI } from "./config";

const getMealById = async (mealId) => {
    const response = await fetch(API_URI + 'lookup.php?i=' + mealId);
    return await response.json()
}

const getAllCategories = async () => {
    const response = await fetch(API_URI + 'categories.php');
    return await response.json()    
}

const getFilteredCategory = async (catName) => {
    const response = await fetch(API_URI + 'filter.php?c=' + catName);
    return await response.json()    
}

export {getMealById, getAllCategories, getFilteredCategory}