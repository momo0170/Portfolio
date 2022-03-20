'use strict';


// 스크롤을 내렸을 때 navbar를 투명하게 만듦
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  console.log(window.scrollY);
  console.log(`navbar: ${navbarHeight}`);
  if(window.scrollY > navbarHeight) {
    navbar.classList.add('navbar--dark');
  } else {
    navbar.classList.remove('navbar--dark');
  }
});

// 메뉴를 클릭했을 때 해당 메뉴로 스크롤
// event.target -> 현재 이벤트가 발생한 요소를 반환
const navbarMenu = document.querySelector('.navbar__menu'); // div.navbar__menu
navbarMenu.addEventListener('click', (event) => {
  const target = event.target; //li 중 이벤트가 발생한 li 요소를 target 변수에 저장
  const link = target.dataset.link; // li 요소의 link 속성을 link 변수에 저장
  if(link == undefined) {
    return;
  }
  scrollIntoView(link);
});

// Contact me 버튼을 눌렀을 때 해당 메뉴로 스크롤
const contactMenu = document.querySelector('.home__container .home__contact'); 
console.log(contactMenu);
contactMenu.addEventListener('click', () => {
  scrollIntoView('#contact');
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth"});
}