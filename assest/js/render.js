// FOR HEADER
// Render header
let appendElementChild = function (parentElement,elementChildString) {
    parentElement.appendChild(new DOMParser().parseFromString(elementChildString, 'text/html').body.lastElementChild)
}
function renderHeader(parentElement,currentPage,listCategory) {
    let headerString = `
    <header class="row">
        <div class="col category l-0 m-0 c-2"><i class="fa-solid fa-bars"></i></div>
        <div class="col header__logo l-2 m-5 c-5">
            <a href="index.html" class="header__logo--link">
                <img src="assest/png/header-logo.png" alt="" class="header__logo--img ">
            </a>
        </div>
        
        <div class="col navbar l-7 m-11 c-0">
            <ul class="navbar__list">
                <a href="index.html" class="home navbar__item">Trang chủ</a>
                <a href="category-movie.html?categoryID=2" class="series-movie navbar__item">Phim bộ</a>
                <a href="category-movie.html?categoryID=1" class="odd-movie navbar__item">Phim lẻ</a>
                <a href class="shows navbar__item">TV Shows</a>
                <div class="nav-category navbar__item">Thể Loại
                <div class="category-drop"></div></div>
            </ul>
        </div>
        <div class="col search-icon l-0 m-1 c-2" onClick="event.cancelBubble = true; renderHeader.searchShow()"><i class="fa-solid fa-magnifying-glass"></i>
            <div class="drop-search hide" onclick="event.cancelBubble = true">
                <input type="text" placeholder="Nhập vào đây để tìm kiếm..." class="search-input" autocomplete="off" onKeyDown="renderHeader.enterSearch(event)">
                <div style="top: 100%; width : 100%; right: 0;" class="hint-search">
                </div>
            </div>
            
        </div>
        <div class="col l-3 m-0 c-0">
            <div class="header__search">
                <input type="text" name="" id="search-text" placeholder="Tìm kiếm tên phim ,tv shows..." autocomplete="off">
                <i class="fa-solid fa-magnifying-glass"></i>
                <div class="hint-search">
                </div>
                    
            
        </div>
    </header>
    `
    appendElementChild(parentElement,headerString)
   
    for (var category of listCategory ) {
        appendElementChild($('.category-drop'),`<a href="category-movie.html?categoryID=${category.id}" class="the-loai__item">${category.name}</a>`)
    }
    // Lighten Nav Item
    renderSeperator(parentElement) 
    $(currentPage).classList.add('white-text')
    // Category show
    $('header > .category').onclick = function () {
        $('.category-mobile-container').classList.toggle('show')
        $('.category-mobile__content').classList.toggle('show')
    }
    renderHintItemForHeader($('#search-text'))
    renderHintItemForHeader($('.search-input'))
    $('.header__search > i').onclick = function () {
        window.location.href = `category-movie.html?categoryID=1&titleSearch=${$("#search-text").value}`
    }
    searchClick($('#search-text'))
    function searchClick(inputElement) {
        inputElement.onkeydown =  function (e) {
            if (e.key === 'Enter' || e.keyCode === 13) {
                window.location.href = `category-movie.html?categoryID=1&titleSearch=${$("#search-text").value}`
            }
        }
    }
    function renderHintItemForHeader(searchInput) {
        
        async function getHint() {
            if (searchInput.value.length>2){
                
                await fetch(getAPI.getItemSearch(searchInput.value,6))
                .then((value) => value.json())
                .then((value) => {
                    const listHintFilm = value.content
                    removeAllHint()
                    for (var film of listHintFilm) {
                        renderHint(film)
                    }
                })
            } else {
                   removeAllHint()
                }
            function renderHint(value) {
                $(".hint-search").innerHTML += `
                <div class="hint__item">
                <a href="film-info.html?filmID=${value.id}" class="hint__item-link">
                    <div class="hint-item__img">
                            <img src="${value.poster}}" alt="" class="hint__img">
                        </div>
                        <div class="hint-item__title">
                          ${value.title}
                        </div>
                    </div>
                </a>
            <div/>
            `
            }
           
        }
        function removeAllHint() {
            if ($(".hint-search > div")) {
                for (var hintItem of $$(".hint-search > div")) {
                    hintItem.remove()
                }
            }
        }
        
        searchInput.onfocus = function () {
            $('.hint-search').classList.remove('display-none')
            searchInput.onkeyup = function () {
                removeAllHint()
                if (waitHint) {
                    clearTimeout(waitHint)
                    waitHint = undefined
                }
                waitHint = setTimeout(getHint,500)
               
            }
        }
        searchInput.onblur = function () {
            
           setTimeout(() => {
            $('.hint-search').classList.add('display-none')
            
           }, 100);
        }
        
        
    
    }
    
}

function renderCategoryMobile(listCategory,currentPage) {
    $('.category-mobile-container').innerHTML = `
    <div class="category-mobile">
        <div class="category-mobile__content">
            <a href="index.html" class="category__item--home">Trang chủ</a>
            <a href class="category__item--tv">TV Shows</a>
        </div>
        <div class="exit-category"></div>
    </div>
    `
    for (var category of listCategory ) {
        $('.category-mobile__content').innerHTML += `<a href="category-movie.html?categoryID=${category.id}" class="category__item--${category.code}">${category.name}</a>`
    }
    $(currentPage).classList.add('current-category-item')
    $('.exit-category').onclick = function () {
        $('.category-mobile-container').classList.toggle('show')
        $('.category-mobile__content').classList.toggle('show')
    }
}
// Show input text for search
renderHeader.searchShow = function () {
    let inputSearch = $('.drop-search')
    inputSearch.classList.toggle('hide')
    if (inputSearch.classList.contains('hide')) {
        setTimeout(function () {
            inputSearch.classList.toggle('display-none')
        }, 300)
    } else {
        inputSearch.classList.remove('display-none')
    }
    $('.search-icon > i').classList.toggle('fa-xmark')
}
// Enter search click()
renderHeader.enterSearch = function (e) {
    if (e.keyCode == 13) {
        window.location.href = `category-movie.html?categoryID=1&titleSearch=${$(".search-input").value}`
    }
}
// Render film item
function renderFilmItem(parentElement,filmInfo) {
    parentElement.innerHTML += `
    <div class="col gutters-15 l-2-4 m-4 c-4 s-6">
        <div class="film__item">
            <div class="film__poster">
                <div class="film__status">${filmInfo.language}</div>
                <div class="hidden-poster">
                    <img class= "film__poster--img" src="${filmInfo.poster}" alt="Name of movie">
                    <a href="film-info.html?filmID=${filmInfo.id}" class="poster-hover">
                        <i class="fa-regular fa-circle-play"></i>
                    </a>
                </div>
                
            </div>
            
            <div class="film__name">${filmInfo.title}</div>
        </div>
    </div>
    `
}


// Render Footer
function renderFooter(parentElement) {
    renderSeperator(parentElement)
    let footerString = `
    <footer>
        <div class="row">
            <div class="col l-3 m-12 c-6">
                <div class="footer__logo">
                    <img src="assest/png/footer-logo.png" alt="" class="footer__logo--img">
                </div>
            </div>
            <div class="col l-3 m-4 c-12">
                <div class="about-we">
                    Về chúng tôi
                    <p class="introduce">Giới thiệu</p>
                    <p class="contact">Liên hệ</p>
                    <p class="support">Trung tâm hỗ trợ</p>
                    <p class="ads">Quảng cáo</p>
                </div>
            </div>
            <div class="col l-3 m-4 c-12">
                <div class="rules">
                    Quy định
                    <p class="terms-of-use">Điều khoản sử dụng</p>
                    <p class="privacy-policy">Chính sách bảo mật</p>
                </div>
            </div>
            <div class="col l-3 m-4 c-12">
                <div class="footer__info">
                    <div class="mail">
                        <i class="fa-regular fa-envelope mail__icon"></i>noemail@gmail.com
                    </div>
                    <div class="flow-we">
                        <div class="flow-we__title">Theo dõi chúng tôi trên :</div>
                        <a href="" class="facebook-link"><i class="fa-brands fa-facebook"></i></a>
                        <a href="" class="youtube-link"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    `
    appendElementChild(parentElement,footerString)
}
// Render loader
function renderLoader(parentElement) {
    let loaderString = `
    <div class="loader">
        <div class="loading-container">
            <img src="assest/png/header-logo.png" alt="Super Film" class="logo-loading">
            <div class="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>
    `
    appendElementChild(parentElement,loaderString)
   parentElement.style.overflow = 'hidden'
}
function renderSeperator(parentElement) {
    parentElement.innerHTML +=`<div class="seperator"></div>`

}
async function renderCategoryFilm(parentElement,category,numItem,canEdit,editTitle,minItemFilms,valueSearch) {
    
    var categoryListFilm = 0
    if (valueSearch) {
        categoryListFilm = valueSearch
    }  else {
        await fetch(getAPI.getCategories(category.id,0,'publishYear','decs',numItem)).then((value) => value.json())
        .then((value) => {categoryListFilm = value})
    }
    categoryListFilm = categoryListFilm.content
    var titleCategory = (canEdit)? editTitle:category.name
    if (categoryListFilm.length >= minItemFilms) {

        let categoryFilmString = `
        <div class="category-film">
            <div class="category__header">
                <div class="category__title">Phim ${titleCategory}</div>
                ${(window.location.href.includes('category-movie.html'))?"":`<a href="category-movie.html?categoryID=${category.id}" class="see-all">Xem thêm</a>`}
            </div>
            <div class="category__container">
                <div class="row ${titleCategory.replaceAll(' ','-')}">
                </div>
            </div>
        </div>
        `
        parentElement.innerHTML += categoryFilmString
        for (var film of categoryListFilm) {
            renderFilmItem($(`.${titleCategory.replaceAll(' ','-')}`),film)
        }
       
    }
    imagesLoaded($$('.film__poster--img'),hideLoader)
    
}
function renderPagination(parentElement) {
    parentElement.innerHTML += `
    <div class="pagination">
      <a href="#">&laquo;</a>
      <a href="#">1</a>
      <a href="#" class="active">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a>
    </div>
    `
}
function hideLoader() {
    if ($('.loader')) {
        setTimeout(() => {
            $('.loader').style.display = 'none'
            
        }, 500);
    }
    $('body').style.overflow = 'auto'
}