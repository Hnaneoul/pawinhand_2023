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
        delay:100000, //슬라이드 간격(밀리초)기본3초
        disableOnInteraction:false, //버튼 클릭 후 자동재생 유지하는 방법
    },  //자동재생 1000=1초
    loop:true ,  // 마지막장에서 자연스럽게 1번 넘기기
    direction:'horizontal', // 옆으로 넘기기
    // direction : 'vertical' 위아래 슬라이드
    /* effect:'fade', */ // 제자리 변경 슬라이드 효과
    navigation: { 
        //next, prev 객체 연결시 부모를 안적으면
        // body안에 있는 모든 swiper-next,prev를 인식하기 때문에
        //개별인식 가능한 부모이름을 반드시 앞에 먼저 작성한다.
        nextEl: '#pawin_slide .swiper-button-next',
        prevEl: '#pawin_slide .swiper-button-prev',
    }, //이전,다음버튼 활성화

});


// const s = new Swiper('#s',{
//     autoplay:{delay:1000},
//     loop:true,
//     direction : 'vertical',
//     navigation: { 
//         nextEl: '#s .swiper-button-next',
//         prevEl: '#s .swiper-button-prev',
//     }
// })

//pawin_slide2
const pawin_slide2 = new Swiper('#pawin_slide2',{
    autoplay:{delay:1000},
    loop:true,
    effect:'fade',
})

// 입양정보 slide 슬라이드 4개 한번에 보이게하는법
const dog_info_slide = new Swiper('#dog_info_slide',{
    slidesPerView:'auto',//breakpoints 옵션추가시 'auto' 아니면 숫자,  한번에 보이는 슬라이드 개수 
    spaceBetween:20,// 슬라이드 사이 여백
    autoplay:{delay:1000},
    loop:true,
    // swiper-slide 반응형웹 옵션
    breakpoints:{
        //해상도:{옵션:값}
        // 해상도 순서는 작은 해상도 -> 큰 해상도 순으로 작성
        400:{slidesPerView:2},//400이상일떄 400~899
        // 700:{slidesPerView:2},//700이상일떄
        900:{slidesPerView:3}, //900이상일때
        1160:{slidesPerView:4} //1160이상일경우 슬라이드 4개를 표시하겠다.
    }
})