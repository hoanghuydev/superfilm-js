function renderHeader() {
    document.querySelector('.grid.wide').innerHTML = `
    <header class="row">
        <div class="col category l-0 m-0 c-2"><i class="fa-solid fa-bars"></i></div>
        <img src="assest/png/header-logo.png" alt="" class="col header__logo--img l-2 m-6 c-6">
        <div class="col navbar l-7 m-11 c-0">
            <ul class="navbar__list">
                <li class="navbar__item l-2-4 ">Trang chủ</li>
                <li class="navbar__item l-2-4 blur-text">Phim bộ</li>
                <li class="navbar__item l-2-4 blur-text">Phim kẻ</li>
                <li class="navbar__item l-2-4 blur-text">TV Shows</li>
                <li class="navbar__item l-2-4 blur-text">Thể loại</li>
            </ul>
        </div>
        <div class="col search-icon l-0 m-1 c-2" onClick="event.cancelBubble = true; renderHeader.searchShow()"><i class="fa-solid fa-magnifying-glass"></i>
            <div class="drop-search hide" onclick="event.cancelBubble = true">
                <input type="text" placeholder="Nhập vào đây để tìm kiếm..." class="search-input" autocomplete="off">
            </div>
        </div>
        <div class="col l-3 m-0 c-0">
            <div class="header__search">
                <input type="text" name="" id="search-text" placeholder="Tìm kiếm tên phim ,tv shows..." autocomplete="off">
                <i class="fa-solid fa-magnifying-glass"></i>
            <div/>
        </div>
    </header>
    `
}
renderHeader.searchShow = function () {
    let inputSearch = document.querySelector('.drop-search')
    inputSearch.classList.toggle('hide')
    if (inputSearch.classList.contains('hide')) {
        setTimeout(function () {
            inputSearch.classList.toggle('display-none')
        }, 300)
    } else {
        inputSearch.classList.remove('display-none')
    }
    document.querySelector('.search-icon > i').classList.toggle('fa-xmark')
}

function renderLoader(parentElement) {
    parentElement.innerHTML = `
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
}