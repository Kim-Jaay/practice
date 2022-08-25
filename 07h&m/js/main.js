window.addEventListener('DOMContentLoaded', () => {

    const MainSlider = new Splide('.MainVisual', {
        type: 'loop',
        pauseOnHover: false,
        pauseOnFocus: false,
        arrows: true,
        autoplay: true,
        speed: 200,
        perPage: 1,
    }).mount();

    const ProductCon01 = new Splide('.ProductCon01', {
        type: 'loop',
        perPage: 4,
        arrows: true,
        pagination: false,
        perMove: 1,
    }).mount();

    const ProductCon02 = new Splide('.ProductCon02', {
        type: 'loop',
        perPage: 4,
        arrows: true,
        pagination: false,
        perMove: 1,
    }).mount();

    const ProductCon03 = new Splide('.ProductCon03', {
        type: 'loop',
        perPage: 4,
        arrows: true,
        pagination: false,
        perMove: 1,
    }).mount();

    const ProductCon04 = new Splide('.ProductCon04', {
        type: 'loop',
        perPage: 4,
        arrows: true,
        pagination: false,
        perMove: 1,
    }).mount();

    const ProductCon05 = new Splide('.ProductCon05', {
        type: 'loop',
        perPage: 4,
        arrows: true,
        pagination: false,
        perMove: 1,
    }).mount();

    const ProductCon06 = new Splide('.ProductCon06', {
        type: 'loop',
        perPage: 4,
        arrows: true,
        pagination: false,
        perMove: 1,
    }).mount();



    const tabList = document.querySelectorAll('.TabMenu>li');
    const contents = document.querySelectorAll('.TabCon>li')
    let activeCont = '';

    for (var i = 0; i < tabList.length; i++) {
        tabList[i].querySelector('.TabMenu>li>a').addEventListener('click', function (e) {
            e.preventDefault();

            for (var j = 0; j < tabList.length; j++) {
                // 나머지 버튼 클래스 제거
                tabList[j].classList.remove('on');

                // 나머지 컨텐츠 display:none 처리
                contents[j].style.display = 'none';

                // 버튼 관련 이벤트
                this.parentNode.classList.add('on');
            }
            // 버튼 클릭시 컨텐츠 전환
            activeCont = ('.TabMenu>li>a').getAttribute('href');
            document.querySelector(activeCont).style.display = 'block';

        });
    }




});
