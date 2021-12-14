const axios = require('axios');

export default {
    getRandomMeal() {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/random.php`)
    },
    getMealId(id) {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?`, { params: { i: id } })
    },
    getCategoriesMeal() {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
    },
    getOneCategorie(categorie) {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?`, { params: { c: categorie } })
    },
    getAllArea() {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    },
    getOneArea(area) {
        return axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?`, { params: { a: area } })
    }
}