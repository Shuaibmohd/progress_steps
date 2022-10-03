const progress = document.getElementById('progress');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const circles = document.querySelectorAll('.circle');
const texts = document.querySelectorAll('.text');

let currentActive = 1;
let currentDark = 1

nextBtn.addEventListener('click', () => {
    
    currentActive++
    
    if(currentActive > circles.length && currentDark > texts.length) {
        currentActive =  circles.length;
        currentDark =  texts.length;
    }
    
    update()

    
})
prevBtn.addEventListener(('click'), () => {
    currentActive--
    
    if(currentActive < 1) {
        currentActive = 1;

    }
    
    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
            
            
        }else {
            circle.classList.remove('active')
        }
    })
    texts.forEach((text, idx) => {
        if(idx < currentActive){
            text.classList.add('dark')
            
            
        }else {
            text.classList.remove('dark')
        }
    })


    const actives = document.querySelectorAll('.active');

    progress.style.width = ((actives.length - 1) / (circles.length -1) * 100 + '%');


    if(currentActive === 1){
        prevBtn.disabled = true
    }else if(currentActive === circles.length) {
        nextBtn.disabled = true
    }else {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }

    console.log(prevBtn)
}

