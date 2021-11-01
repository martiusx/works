   //score in game
   let score = 0;
   //speed of creation the targets
   let createSpeed = 1500;
   //mnimum speed of targets
   let minSpeed = 4.5;

   function game(){
       //create elements
       const hitboxHead = document.createElement('div');
       const hitboxBody = document.createElement('div');
       const div = document.createElement('div');
       const img = document.createElement('img');
       //import elements
       const road = document.querySelectorAll('.streat');
       //random value
       let roadNumber = Math.floor(Math.random()*2)
       let speed = Math.floor(Math.random() * 4 + minSpeed);
      
       //add elements
       hitboxBody.classList.add('hitbox-body')
       hitboxHead.classList.add('hitbox-head');


       img.setAttribute("src", "css/images/walking.png");

       div.classList.add('target');
       div.appendChild(hitboxHead);
       div.appendChild(hitboxBody);
       div.appendChild(img);

       //div css
       
       $(div).css({
           "animation" : "run",
           "animation-iteration-count" : "1",
           "animation-duration" : speed + "s",
           "animation-timing-function" : "linear",
       })

       //score table
       document.querySelector('.score').textContent = score;
       
       //adding the target to the road
       road[roadNumber].appendChild(div);

       //auto remove target 
       setTimeout(()=>{
       div.remove()
       },speed * 1000)

       //click place
       $(hitboxBody).on('click', function() {
       div.remove();
       score+= 100
       })

       $(hitboxHead).on('click', function() {
       div.remove();
       score+= 250

   })

   //restart
   $('.restart').on('click', ()=>{
       score = 0;
       div.remove();
   })
}

setInterval(game, createSpeed);


