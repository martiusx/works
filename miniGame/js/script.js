
function elo(){
    const hitboxHead = document.createElement('div');
    const hitboxBody = document.createElement('div');
    const div = document.createElement('div');
    const img = document.createElement('img');
    const road = document.querySelector('.road');
    let random = Math.floor(Math.random() * 4 + 2);
    hitboxBody.classList.add('hitbox-body')
    hitboxHead.classList.add('hitbox-head');
    img.setAttribute("src", "images/walking.png");
    div.appendChild(hitboxHead);
    div.appendChild(hitboxBody);

    div.classList.add('target');
    div.appendChild(img)

    div.style.animation = "run";
    div.style.animationIterationCount = "1";
    div.style.animationDuration = random + 's';
    div.style.animationTimingFunction = 'linear';


    road.appendChild(div)

    setTimeout(()=>{
        div.remove()
    },random * 1000)


    $(hitboxBody).on('click', function() {
        console.log('TRAFIŁES! w ciało');
        div.remove();

    })
    $(hitboxHead).on('click', function() {
        console.log('TRAFIŁES! w głowe');
        div.remove();
    })
}
setInterval(elo, 1500);




/*
let roadNumber = 0;

const run = () =>{

    let targetSpeed = Math.floor((Math.random() * 4) + 1);
    let yo = targetSpeed + 's';
    const targetS = $('.target');
    let timee = targetSpeed * 1000;

    const $targetAdd = $('<div class="target"><img src="images/walking.png"><div class="hitbox-head"></div><div class="hitbox-body"></div></div>')

        targetS.css({
            "animation": "run",
          })

        console.log(targetS.length)

        if( targetS.length == 1)
        {
            targetS.css({
                "animation-duration": yo
            })
        }
         
          $('.r1').append($targetAdd);
        setTimeout(()=>{
            $targetAdd.remove()
        }, timee)
}
        

 


setInterval(run, 500);
*/