

// 배지 뷰
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() {
    console.log('scroll!');
    if(window.scrollY > 500) {
        // 배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
           opacity: 0,
           display: 'none'
        });
    }
    else {
        // 배지 보이기
        gsap.to(badgeEl, .6, {
            opacity: 1 ,
            display: 'block'
         });
    }
}, 300));

// VISUAL 순차 애니메이션
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index) {
    gsap.to(fadeEl, 1, {
        delay: .7 * (index + 1),
        opacity: 1        
    });
});

// 스와이퍼
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical', // 수직 슬라이드
    autoplay: true, // 자동 재생 여부
    loop: true // 반복 재생 여부
});
new Swiper('.promotion .swiper-container', {
    slidesPerView: 3, // 한번에 보여줄 슬라이드 개수,
    spaceBetween: 10, // 슬라이드 사이 여백
    centeredSlides: true, // 1번 슬라이드가 가운데 보이기
    loop: true,
    autoplay: {
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
        clickable: true // 사용자의 페이지 번호 요소 제어
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

// 프로모션 토글
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function() {
    isHidePromotion = !isHidePromotion;
    if(isHidePromotion) {
        // 숨김처리
        promotionEl.classList.add('hide');
    }else {
        // 나타나기
        promotionEl.classList.remove('hide');
    }
});

// 유튜브영역 플로팅 아이콘
function random (min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}
function floatingObject(selector, delay, size) {
    gsap.to(selector, random(1.5, 2.5), {
        y: size,
        repeat: -1,
        yoyo: true,
        ease: Power1.easeInOut,
        delay: random(0, delay)
    });
}
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);

// 스크롤시 애니메이션
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
    new ScrollMagic
        .Scene({
            triggerElement: spyEl, // 보여짐 여부를 감시할 요소
            triggerHook: .8 // 뷰포트의 시작점과 끝점을 기준으로의 지점 (뷰포트 가장 위가 0, 아래가 1)
        })
        .setClassToggle(spyEl, 'show')
        .addTo(new ScrollMagic.Controller());
});

// 어워즈 슬라이드
new Swiper('.awards .swiper-container', {
    autoplay: true,
    loop: true,
    spaceBetween: 30,
    slidesPerView: 5,
    navigation: {
        prevEl: '.awards .swiper-prev',
        nextEl: '.awards .swiper-next'
    }
});


// 최상단으로 올라가는 버튼
const toTopEl = document.querySelector('#to-top');
// 위치에 따라 버튼 보였다 숨기기
window.addEventListener('scroll', _.throttle(function() {
    if(window.scrollY > 500) {
        // 버튼 보이기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(toTopEl, .6, {
            x: 0,
           opacity: 1,
           display: 'flex'
        });
    }
    else {
        // 버튼 숨기기
        gsap.to(toTopEl, .6, {
            x: 100,
            opacity: 0 ,
            display: 'none'
         });
    }
}, 300));
// 클릭시 최상단 이동
toTopEl.addEventListener('click', function() {
    gsap.to(window, .7, {
        scrollTo: 0
    });
});

// 라이브러리 사용 없이 적용하는 법
// window.addEventListener('scroll', _.throttle(function() {
//     var scrollDiv = document.getElementById('animatedDiv');
//     var scrollHeight = window.innerHeight;
//     var currentScroll = window.scrollY || window.pageYOffset;

//     if (currentScroll > 1000) {
//       scrollDiv.style.opacity = '1';
//         scrollDiv.style.display = 'block';
//     } else {
//       scrollDiv.style.opacity = '0';
//       setTimeout(function() {
//         scrollDiv.style.display = 'none';
//       }, 500); // 애니메이션 시간과 동일한 시간으로 설정
//     }
//   }, 500));