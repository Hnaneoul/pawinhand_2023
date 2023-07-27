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