
const imgContainer = document.querySelector('.img-container');
console.log('imgContainer', imgContainer, typeof imgContainer);

const images = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'

];

for (let i = 0; i < images.length; i++) {

    if (i == 0){
        imgContainer.innerHTML += `<img src="${images[i]}" class="active">`; 
    }
    else{
        imgContainer.innerHTML += `<img src="${images[i]}">`;
    }
}  

let imgActive = 1;

const nextButton = document.getElementById('next-button');
nextButton.addEventListener('click', function() {

    if (imgActive < images.length){
        document.querySelector('.img-container > img:nth-child(' + imgActive + ')').classList.remove('active');

        imgActive++;

        document.querySelector('.img-container > img:nth-child(' + imgActive + ')').classList.add('active');
    }
    
});

const prevButton = document.getElementById('pre-button');
prevButton.addEventListener('click', function() {

    if (imgActive > 1){

        document.querySelector('.img-container > img:nth-child(' + imgActive + ')').classList.remove('active');

        imgActive--;

        document.querySelector('.img-container > img:nth-child(' + imgActive + ')').classList.add('active');
    }
});


