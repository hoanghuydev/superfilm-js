// FOR HEADER
// Render header
let appendElementChild = function (parentElement,elementChildString) {
    parentElement.appendChild(new DOMParser().parseFromString(elementChildString, 'text/html').body.lastElementChild)
}
function renderHeader() {
    let headerString = `
    <header class="row">
        <div class="col category l-0 m-0 c-2"><i class="fa-solid fa-bars"></i></div>
        <img src="assest/png/header-logo.png" alt="" class="col header__logo--img l-2 m-5 c-5">
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
                <input type="text" placeholder="Nhập vào đây để tìm kiếm..." class="search-input" autocomplete="off" onKeyDown="renderHeader.enterSearch(event)">
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
    appendElementChild($('.grid.wide'),headerString)
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
        return renderHeader.searching()
    }
    return undefined
}
renderHeader.searching = function() {
    
}
// Render film item
function renderFilmItem(parentElement) {
    parentElement.innerHTML += `
    <div class="col gutters-15 l-2-4 m-4 c-4">
        <div class="film__item">
            <div class="film__poster">
                <div class="film__status">Vietsub</div>
                <img class= "film__poster--img" src="assest/png/poster.png" alt="Name of movie">
            </div>
            
            <div class="film__name">Name of this film</div>
        </div>
    </div>
    `
}


// Render Footer
function renderFooter() {
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
    appendElementChild($('.grid.wide'),footerString)
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
}