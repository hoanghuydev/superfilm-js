const domain = 'https://filmapi-env.eba-xjdcedf7.ap-southeast-1.elasticbeanstalk.com'
let valueFetch = []
const getAPI = {
    allFilm: domain + '/api/v1/films/all',
    detailFilm: function (id) {
        return domain + `/api/v1/films/${id}`
    },
    getFilm: function (page, sortedBy, director, limit) {
        return domain + `/api/v1/films?page=${page}&sortedBy=${sortedBy}&director=${director}&limit=${limit}`
    },
    getCategories: function (categoryId, page, sortedBy, director, limit) {
        return domain + `/api/v1/films/categories/${categoryId}?page=${page}&sortedBy=${sortedBy}&director=${director}&limit=${limit}`
    },
    allCategory: domain + '/api/v1/categories',
    detailCategory: function (id) {
        return domain + `/api/v1/categories/${id}`
    },
    getItemSearch: function (query, limit) {
        return domain + `/api/v1/films/query?query=${query}&page=0&sortedBy=publicYear&director=decs&limit=${limit}`
    },
    getFilterItem: function (categoryId, publicYear, page, sortedBy, direction, limit) {
        return domain + `/api/v1/films/filter?categoryId=${categoryId}&page=${page}&limit=${limit}&sortBy=${sortedBy}&direction=${direction}&publishYear=${publicYear}`
    },
    allActor: domain + '/api/v1/actors',
    allCountries: domain + '/api/v1/film-countries',
    allLanguage: domain + '/api/v1/film-languages',
    allQuality: domain + '/api/v1/film-qualities',
    allStatus: domain + '/api/v1/film-statuses',
}
function fetchAPI(url) {
    fetch(url)
        .then((value) => { value.json() })
}

