const output = document.querySelector('.output');
const output2 = document.querySelector('.output2');

let counterImg = 0;

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    }
]

let isFirstItem = true;

for(let image of images){
    console.log(image);
    
    output.innerHTML += `
    <div class="my-carousel-item ${isFirstItem ? 'active' : ''}">
    <img class="img-fluid" src="${image.url}" alt="${image.title} picture">
    <div class="item-description px-3">
    <h2>${image.title}</h2>
    <p>${image.description}</p>
    </div>
    </div>
    `
    
    output2.innerHTML += `
    <div class="my-thumbnail ${isFirstItem ? 'active' : ''}">
    <img class="img-fluid" src="${image.url}" alt="Thumbnail of ${image.title} picture">
    </div>
    `
    
    isFirstItem = false;
}

const imagesLength = images.length;
for (let i = 0; i < imagesLength; i++){
  images.push(images[i]);
}

const itemsCollection = document.getElementsByClassName('my-carousel-item');
const itemsCollection2 = document.getElementsByClassName('my-thumbnail');

// BOTTONI
const myPrevious = document.querySelector('.my-previous');
const myNext = document.querySelector('.my-next');

myPrevious.addEventListener('click', function(){
    itemsCollection[counterImg].classList.remove('active');
    itemsCollection2[counterImg].classList.remove('active');
    counterImg = (counterImg - 1 + itemsCollection.length) % itemsCollection.length;
    itemsCollection[counterImg].classList.add('active');
    itemsCollection2[counterImg].classList.add('active');
})

myNext.addEventListener('click', function(){
    itemsCollection[counterImg].classList.remove('active');
    itemsCollection2[counterImg].classList.remove('active');
    counterImg = (counterImg + 1) % itemsCollection.length;
    itemsCollection[counterImg].classList.add('active');
    itemsCollection2[counterImg].classList.add('active');
})

// MINIATURE
for (let i = 0; i < itemsCollection2.length; i++) {
    itemsCollection2[i].addEventListener('click', function() {
        changeItem(i);
    });
}

function changeItem(index) {
    itemsCollection[counterImg].classList.remove('active');
    itemsCollection2[counterImg].classList.remove('active');
    counterImg = index;
    itemsCollection[counterImg].classList.add('active');
    itemsCollection2[counterImg].classList.add('active');
}

// AUTOPLAY
function autoplay() {
    itemsCollection[counterImg].classList.remove('active');
    itemsCollection2[counterImg].classList.remove('active');
    counterImg = (counterImg + 1) % itemsCollection.length;
    itemsCollection[counterImg].classList.add('active');
    itemsCollection2[counterImg].classList.add('active');
}

let isAutoplayActive = false;

const playButton = document.querySelector('.play');

playButton.addEventListener('click', function () {
    if (isAutoplayActive) {
        clearInterval(autoplayInterval);
        isAutoplayActive = false;
        playButton.textContent = "PLAY";
    } else {
        autoplayInterval = setInterval(autoplay, 3000);
        isAutoplayActive = true;
        playButton.textContent = "STOP";
    }
});

// REVERSE
function reverse() {
    itemsCollection[counterImg].classList.remove('active');
    itemsCollection2[counterImg].classList.remove('active');
    counterImg = (counterImg - 1 + itemsCollection.length) % itemsCollection.length;
    itemsCollection[counterImg].classList.add('active');
    itemsCollection2[counterImg].classList.add('active');
}

let isReverseActive = false;

const reverseButton = document.querySelector('.reverse');

reverseButton.addEventListener('click', function () {
    if (isReverseActive) {
        clearInterval(reverseInterval);
        isReverseActive = false;
        reverseButton.textContent = "REVERSE";
    } else {
        reverseInterval = setInterval(reverse, 3000);
        isReverseActive = true;
        reverseButton.textContent = "STOP";
    }
});