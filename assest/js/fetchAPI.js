const domain = 'https://film-web-api.azurewebsites.net'
const getAPI = {
    allFilm : domain+ '/api/v1/films/all',
    detailFilm : function (id) {
        return domain +  `/api/v1/films/${id}`
    },
    getFilm : function (page,sortedBy,director,limi) {
       return domain + `/api/v1/films?page=${page}&sortedBy=${sortedBy}&director=${director}&limi=${limi}`
    },
    getCategories : function (categories,page,sortedBy,director,limi) {
        return domain + `/api/v1/films/categories/${categoryId}?page=${page}&sortedBy=${sortedBy}&director=${director}&limi=${limi}`
    },
    allCategory :domain + '/api/v1/categories',
    detailCategory : function (id) {
        return `/api/v1/categories/${id}`
    },
    allActor : domain + '/api/v1/actors',
    allCountries : domain + '/api/v1/film-countries',
    allLanguage : domain + '/api/v1/film-languages',
    allQuality : domain + '/api/v1/film-qualities',
    allStatus : domain + '/api/v1/film-statuses',
}
function fetchAPI(url) {
   fetch(url) 
    .then (function(result) {
        return result.json()
    })
}
function fecthCategoryFilm() {

}
function fecthFilmOfCategory(categoryCode) {

}
