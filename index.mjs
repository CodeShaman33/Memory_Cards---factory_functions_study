let cardsFlipped = 0;
let deckArray = []; //place for store all displayed cards
let cardsLeft = []; // using for modyfing the cards after creating deck 
let photosLeft = [];

import { photoArray } from "./data";

//This function takes an object containing data for a card, creates a new div element for the card, sets its properties and event listeners, and returns it.
function createCard(cardData) {
    const card = cardFactory(cardData);
    const element = document.createElement('div');
    element.classList.add('card');
    element.id = cardData.id;
    element.dataset.name = card.name;

    // front side of the card
    const front = document.createElement('div');
    front.classList.add('card-front');
    front.style.backgroundColor = 'red';
    //front.innerHTML = cardData.name;
    front.innerHTML = 'front';

    const back = document.createElement('div');
    back.classList.add('card-back');
    //back.style.backgroundImage = cardData.backImage;
    back.style.backgroundColor = 'green';
    back.innerHTML = 'back';

    element.appendChild(front);
    element.appendChild(back);

    // event listener
    element.addEventListener('click', function () { flipCard(element); });

    return element;

}

// function returns an object based on the data from array
function cardFactory(cardData) {
    return {
        name: cardData.name,
        backImage: cardData.backImage,
        matched: false
    };
}

function createSet() {
    let parrent = document.getElementById('cardsContainer');
    parrent.appendChild(createCard(array[0]));
}

// function add a class to clicked html elements 
function flipCard(element) {
    element.classList.toggle('flipped');
    const childCards = element.querySelectorAll('.card-front, .card-back');
    childCards, array.forEach(card => {
        card.classList.toggle('flipped');
    });
}

// function creates cards when button is clicked
document.getElementById('start').addEventListener('click',
    function () {
        createDeck();
        console.log('WORKS FINE');
    });

document.getElementById('test').addEventListener('click',
    function () {
        loopCards();
    });



// function to create a deck of cards
function createDeck() {
    let parent = document.getElementById('cardsContainer')

    for (let i = 0; i < 10; i++) {
        let newCard = createCard(photoArray[i]);
        parent.appendChild(newCard);
    }

    // assign cards and photos to respective arrays
    asignElements();
    let testElement = document.createElement('div');
    testElement.innerHTML = deckArray;
    parent.appendChild(testElement);

}


// function to randomly assign photos to cards
function asignElements() {
    cardsLeft = deckArray;
    photosLeft = photoArray;
    let elements = [];

    // loop until all cards are assigned a photo
    while (cardsLeft.length > 0) {
        htmlElements = getRandomFromArray(deckArray, 2);
        randomPhoto = getRandomFromArray(photoArray, 1);

        // assign photo to each card in htmlElements
        htmlElements.forEach(
            function (element) {
                let back = document.getElementById(element.id);
                back.innerHTML = randomPhoto.name;

            }

        )

        // remove assigned cards and photos from array
        let cardsLeft = cardsLeft.filter((element) => !htmlElements.includes(element));
        let photosLeft = photosLeft.filter((element) => !htmlElements.includes(element));


    }
}

function getRandomFromArray(arr, n) {
    let result = [];
    const maxIndex = arr.lenght - 1;

    for (let i = 0; i < n; i++) {
        const randomIndex = Math.floor(Math.random() * (maxIndex + 1));
        result.push(arr[randomIndex]);
    }
    return result;
}


// test function for the developinng process
function loopCards() {
    deckArray.forEach(function (element) {
        element.style.backgroundColor = 'red';
    });
}