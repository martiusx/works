

function informationsShow(){
    
    const scrollPosition = window.scrollY;
    const mainHeight = document.querySelector('main').clientHeight;
    const informationsHeight = document.querySelector('.informations').clientHeight;
    const dropsHeight = document.querySelector('.drops').clientHeight;
    const infBox = document.querySelectorAll('.inf-box');
    const drop = document.querySelectorAll('.drop');

    if(scrollPosition > mainHeight + informationsHeight/2){
        for(i=0; i<3; i++){
            infBox[i].classList.add('active');
        }
    }
    
    if(scrollPosition > mainHeight + informationsHeight + dropsHeight/2){
        for(i=0; i<3; i++){
            drop[i].classList.add('active');
        }
    }
}

window.addEventListener('scroll' , informationsShow)