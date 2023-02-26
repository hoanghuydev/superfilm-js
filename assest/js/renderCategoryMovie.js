function renderSelectFilter(categorySelect, yearSelect, sortSelect, listCategory) {
    for (var categoryItem of listCategory) {
        categorySelect.innerHTML += `<option value=${categoryItem.id}>${categoryItem.name}</option>`
    }
    for (var i = 2023; i > 1997; i--) {
        $('#year-select').innerHTML += `<option value="${i}">${i}</option>`
    }
    $('.btn-filter').onclick = async function () {
        await fetch(getAPI.detailCategory($('#category-select').value)).then((value) => value.json())
            .then((value) => {
                $('.movie-of-category > div').remove()
                renderCategoryFilm($('.container > .movie-of-category'), value, 10, false, null, 0)
            })
    }
}