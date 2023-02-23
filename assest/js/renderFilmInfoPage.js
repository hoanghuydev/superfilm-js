function renderInfoFilmPage(parentElement,filmData) {
    $('.titlePage').innerText = filmData.title
    renderInfoFilmPage.renderFilmInfo(parentElement,filmData)
    
}
renderInfoFilmPage.renderFilmInfo = function (parentElement,filmData) {
    
    let infoFilmView = `
    <div class="film-info__header">
        <div class="poster-div">
            <img src="${filmData.poster}" class="film__poster-main"></img>
        </div>
        <div class="film__text-info">
            <div class="film__title">${filmData.title}</div>
            <div class="tag-film">
                <div class="tag__icon">
                    <i class="fa-solid fa-tag"></i>
                </div>
            </div>
            <div  class="btn btn-watch-movie"><a href="watch-movie.html?filmID=${filmData.id}&episode=${filmData.sourceFilms[0].episode}">Xem phim</a></div>
            <div class="film__author">Đạo diễn : ${(filmData.director)? filmData.director.name:"Unknow"}</div>
            <div class="film__status-text">Trạng thái : ${filmData.quality} - ${filmData.language}</div>
            <div class="film__actor">Diễn viên : ${(filmData.actors[0])? filmData.actors[0].name:"Unknow"}</div>
            <div class="film__rate">Đánh giá : 9.2/10</div>
            <div class="film__times">Thời lượng : ${filmData.duration} phút</div>
        </div>
    </div>
    <div class="film__details">
        <div class="details__title">NỘI DUNG CHI TIẾT</div>
        <i class="details__content">${filmData.content}</i>
    </div>
    <div class="film__trailer">
        <div class="trailer__title">Trailer</div>
        <iframe class="trailer__iframe" src="${filmData.trailer}"></iframe>
    </div>
    `
    parentElement.innerHTML = infoFilmView
    // render tag name
    for (var index in filmData.categories) {
        if (index==0) {
            $('.tag-film').innerHTML += `<a href="" class="tag__text">${filmData.categories[index].name} </a>`
        } else {
            $('.tag-film').innerHTML += `<a href="" class="tag__text"> , ${filmData.categories[index].name} </a>`
        }

        
    }
    // render actor 
    for (var index in filmData.actors) {
        if (index==0) {
            $('.film__actor').innerText +=filmData.actors[index].name
        } else {
            $('.film__actor').innerText += ", "+filmData.actors[index].name
        }
        
    }
    
    
}