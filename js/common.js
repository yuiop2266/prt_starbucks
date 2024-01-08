// header 메뉴
const searchEL = document.querySelector('.search');
const searchInput = searchEL.querySelector('input');

searchEL.addEventListener('click', function() {
    searchInput.focus();
});

searchInput.addEventListener('focus', function() {
    searchEL.classList.add('focused');
    searchInput.setAttribute('placeholder', '통합검색');
});

searchInput.addEventListener('blur', function() {
    searchEL.classList.remove('focused');
    searchInput.setAttribute('placeholder', '');
});

// 연도 자동계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear().toString();