const domain = 'https://filmapi-env.eba-xjdcedf7.ap-southeast-1.elasticbeanstalk.com'
let valueFetch = []
const getAPI = {
    allFilm : domain+ '/api/v1/films/all',
    detailFilm : function (id) {
        return domain +  `/api/v1/films/${id}`
    },
    getFilm : function (page,sortedBy,director,limit) {
       return domain + `/api/v1/films?page=${page}&sortedBy=${sortedBy}&director=${director}&limi=${limit}`
    },
    getCategories : function (categoryId,page,sortedBy,director,limit) {
        return domain + `/api/v1/films/categories/${categoryId}?page=${page}&sortedBy=${sortedBy}&director=${director}&limit=${limit}`
    },
    allCategory :domain + '/api/v1/categories',
    detailCategory : function (id) {
        return domain + `/api/v1/categories/${id}`
    },
    allActor : domain + '/api/v1/actors',
    allCountries : domain + '/api/v1/film-countries',
    allLanguage : domain + '/api/v1/film-languages',
    allQuality : domain + '/api/v1/film-qualities',
    allStatus : domain + '/api/v1/film-statuses',
}
function fetchAPI(url) {
   fetch(url) 
    .then ((value) => {value.json()})
}
function fecthCategoryFilm() {

}
function fecthFilmOfCategory(categoryCode) {

}

