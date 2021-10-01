//entrance animations


const page = document.querySelectorAll('.pages');const navHeight = document.querySelector('nav').clientHeight;
const mainHeight = document.querySelector('main').clientHeight;
let pageNumber = 0;
let scrollValue;

window.addEventListener('scroll', () =>{
    scrollValue = window.scrollY;
})



window.addEventListener('scroll', () =>{

  //nav
  if(scrollValue > 20){
      document.querySelector('.nav-move').style.transform = 'translateX(0)';
  }
  else{
      document.querySelector('.nav-move').style.transform = 'translateX(-100%)';
  }
  //main
    if(scrollValue > 250){
        document.querySelector('.main-content').classList.add('active');
        document.querySelector('.circle').classList.add('active');
    }
  //pages
    if(scrollValue > mainHeight + 100){
        page[pageNumber].classList.add('active');
    }
    if(scrollValue > mainHeight + page[0].clientHeight - navHeight){
        pageNumber = 1;
        page[pageNumber].classList.add('active');
        pageNumber = 0;

    }

    //information

    if(scrollValue > page[0].offsetTop - navHeight){
        document.querySelector('.information').classList.add('active');
    }
})

