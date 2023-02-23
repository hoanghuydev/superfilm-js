function renderWatchFilm(parentElement,filmData,episode) {
    parentElement.innerHTML += `
    <iframe src="${filmData.sourceFilms[episode-1].url}" frameborder="0" class = "iframe-movie" allowfullscreen frameborder="0"></iframe>
    `
    if (filmData.sourceFilms.length>1) {
        parentElement.innerHTML += `
        <div class="episode-of-film">
             <div class="episode__title">Tập phim</div>
             <div class="episode-container">
             
             </div>
        </div>
        `
            for (var source of filmData.sourceFilms) {
                $('.episode-container').innerHTML += `
                <a href="watch-movie.html?filmID=${filmData.id}&episode=${source.episode}" class="episode__number">${source.episode}</a>
                `
            }
            $$('.episode__number')[episode-1].classList.add('active')
       
    }
    parentElement.innerHTML +=  `
    <div class="title-movie">${filmData.title}</div>
    <div class="content-movie">${filmData.content}</div>
    `
    // Render option year
    // for (var i = 1997; i < 2024 ; i++) {
    //     get('#year-select').innerHTML +=  `<option value="${i}">${i}</option>`
    // }

}

function renderOptionSelector(parentElement, listOption) {
    for (var option of listOption) {
        parentElement +=  `<option value="${listOption.id}">${listOption.name}</option>`
    }
}