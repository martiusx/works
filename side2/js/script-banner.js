

const addItem = function(){

        const createDiv = document.createElement('div');
        const createI = document.createElement('i');
        const fontTypeList = ['fa-html5', 'fa-css3-alt', 'fa-js-square'];

        let fontType = Math.floor(Math.random() *3 + 1);
        let size = Math.random() * 30 + 15; 
        let directionNumber = Math.random() * 2 + 1;
        
        
        createDiv.appendChild(createI);
        createDiv.classList.add('i-header');
        createI.classList.add('fab');
        createI.classList.add(fontTypeList[fontType]);
                
      
        createI.style.fontSize = size + 'rem';
        createDiv.style.left = Math.random() * 80 + '%';
        
        if(directionNumber < 2){
            createI.classList.add('i-spin-right')
        }
        else{
            createI.classList.add('i-spin-left')
        }
        
        
        
        const addDiv = document.querySelector('header').appendChild(createDiv);

        setTimeout(() => {
            createDiv.remove();
        }, 15000)
}

setInterval(addItem, 500);

