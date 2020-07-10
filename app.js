// Up/down navigation
$('html, body').animate({scrollTop: $('#section1').offset().top}, 1000);

const up = $('#up');
const down = $('#down');
let count = 1;

down.click(function(){
    if ( count < 4){
        count++;
        $('html, body').animate({scrollTop: $('#section' + count).offset().top}, 1000);
    }
});

up.click(function(){
    if ( count > 1){
        count--;
        $('html, body').animate({scrollTop: $('#section' + count).offset().top}, 1000);
    }
});

// horizontal scroll
const simpleBar = new SimpleBar(document.getElementById('items'));
const slider = document.getElementById('items');
let isDown = false;
let startX, scrollLeft;

slider.addEventListener('mousedown',(e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    // scrollLeft = slider.scrollLeft;
    scrollLeft = simpleBar.getScrollElement().scrollLeft;
})

slider.addEventListener('mouseleave',() => {
    isDown = false;
})

slider.addEventListener('mouseup',() => {
    isDown = false;
})

slider.addEventListener('mousemove',(e) => {
    if(!isDown) return; // Parar a função
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    simpleBar.getScrollElement().scrollLeft = scrollLeft - walk ;
    // slider.scrollLeft = scrollLeft - walk;
    // console.log({startX,x, walk}); 
})

