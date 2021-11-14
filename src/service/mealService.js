const axios = require('axios');

export default {
    getRandomMeal(){
        return axios.get(`http://www.themealdb.com/api/json/v1/1/random.php`)
    },
    getMealId(id){
        return axios.get(`http://www.themealdb.com/api/json/v1/1/lookup.php?`, {params: {i: id}})
    }
}