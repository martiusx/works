const publisz = document.querySelectorAll('.publisz');
const publiszTab = publisz.length;
const switchBtn = document.querySelectorAll('.switch');
const switchLength = switchBtn.length;
let value = -327;

switchBtn[0].addEventListener('click', ()=>{
    for(let i=0;i<publiszTab;i++){
    publisz[i].style.transform = `translateX(0)`;
}
    for(let i =0;i<switchLength;i++)
    {
        switchBtn[i].style.background='none';
    }
switchBtn[0].style.background = 'white';

})
switchBtn[1].addEventListener('click', ()=>{
    for(let i=0;i<publiszTab;i++){
    publisz[i].style.transform = `translateX(${value}px)`;
}
for(let i =0;i<switchLength;i++)
    {
        switchBtn[i].style.background='none';
    }
switchBtn[1].style.background = 'white';

})
switchBtn[2].addEventListener('click', ()=>{
    for(let i=0;i<publiszTab;i++){
    publisz[i].style.transform = `translateX(${value *2}px)`;
}
for(let i =0;i<switchLength;i++)
    {
        switchBtn[i].style.background='none';
    }
switchBtn[2].style.background = 'white';

})
switchBtn[3].addEventListener('click', ()=>{
    for(let i=0;i<publiszTab;i++){
    publisz[i].style.transform = `translateX(${value *3}px)`;
}
for(let i =0;i<switchLength;i++)
    {
        switchBtn[i].style.background='none';
    }
switchBtn[3].style.background = 'white';
})

switchBtn[4].addEventListener('click', ()=>{
    for(let i=0;i<publiszTab;i++){
    publisz[i].style.transform = `translateX(${value *4}px)`;
}
for(let i =0;i<switchLength;i++)
    {
        switchBtn[i].style.background='none';
    }
switchBtn[4].style.background = 'white';
})
switchBtn[5].addEventListener('click', ()=>{
    for(let i=0;i<publiszTab;i++){
    publisz[i].style.transform = `translateX(${value *5}px)`;
}
for(let i =0;i<switchLength;i++)
    {
        switchBtn[i].style.background='none';
    }
switchBtn[5].style.background = 'white';
})

