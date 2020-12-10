//movment anim to happen
const card = document.querySelector('.card');
const container = document.querySelector('.container');

//oving anima event 
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX);
    let yAxis = (window.innerHeight / 2 - e.pageX);
    card.style.transform = `rotateY(${yAxis})` rotateX(${xAxis})

});