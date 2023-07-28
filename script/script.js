// 1. 모바일 메뉴 숨기기
// 객체 = 모바일 메뉴  m_nav_open
// 객체.속성 style.display

// 2. 햄버거 메뉴 클릭시 모바일 메뉴 보이기
// 객체 = 햄버거 메뉴 m_nav  / 모바일 메뉴 m_nav_open
// 속성 = 보이기
// 이벤트 = 클릭시
// 메서드 = x

// 3. x버튼 클릭 시 모바일 메뉴 숨기기
// 객체 = x버튼 close  /  모바일 메뉴 m_nav_open
// 변수생성
const m_nav_open = document.querySelector('header .m_nav_open')
const m_nav = document.querySelector('header nav .m_nav')
const close = document.querySelector('.m_nav_open #close')
// 정상출력확인
console.log(m_nav_open, m_nav, close)
// 1. 모바일 메뉴 숨기기
m_nav_open.style.display = 'none'

// 2-1. 햄버거 메뉴 클릭 시 모바일 메뉴 보이기
m_nav.addEventListener('click',function(){
    m_nav_open.style.display = 'block' //2-2 모바일 메뉴 보이기
})

//3-1 x버튼 클릭시 모바일 메뉴 숨기기
close.addEventListener('click',function(){
    m_nav_open.style.display = 'none' //3-2 모바일 메뉴 숨기기
})

// main-swiper-slide
// const 변수명 = new Swiper ('적용대상')
// const 변수명 = new Swiper ('적용대상',{속성:값 , 속성:값})
const pawin_slide = new Swiper('#pawin_slide',{
    autoplay:{
        delay:1000, //슬라이드 간격(밀리초)기본3초
        disableOnInteraction:false, //버튼 클릭 후 자동재생 유지하는 방법
    },  //자동재생 1000=1초
    loop:true ,  // 마지막장에서 자연스럽게 1번 넘기기
    effect:'fade', // 제자리 변경 슬라이드 효과
    navigation: { 
        //next, prev 객체 연결시 부모를 안적으면
        // body안에 있는 모든 swiper-next,prev를 인식하기 때문에
        //개별인식 가능한 부모이름을 반드시 앞에 먼저 작성한다.
        nextEl: '#pawin_slide .swiper-button-next',
        prevEl: '#pawin_slide .swiper-button-prev',
    }, //이전,다음버튼 활성화

    // direction : 'vertical' 위아래 슬라이드
});
const s = new Swiper('#s',{
    autoplay:{delay:1000},
    loop:true,
    direction : 'vertical',
    navigation: { 
        nextEl: '#s .swiper-button-next',
        prevEl: '#s .swiper-button-prev',
    }
})