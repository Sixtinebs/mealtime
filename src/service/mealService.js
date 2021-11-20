const axios = require('axios');

export default {
    getRandomMeal(){
        return axios.get(`http://www.themealdb.com/api/json/v1/1/random.php`)
    },
    getMealId(id){
        return axios.get(`http://www.themealdb.com/api/json/v1/1/lookup.php?`, {params: {i: id}})
    },
    getCategoriesMeal(){
        return axios.get(`http://www.themealdb.com/api/json/v1/1/list.php?c=list`)
    },
    getOneCategorie(categorie){
        return axios.get(`http://www.themealdb.com/api/json/v1/1/filter.php?`, {params: {c: categorie}} )
    }
}