let cardsFlipped = 0;

let array = [
    {
        name: 'obj1',
        backImage: 'src/photos/photo1.jpg',
        matched: false,
        id: 1
    },

    {
        name: 'obj2',
        backImage: 'src/photos/photo1.jpg',
        matched: false,
        id: 2
    },

    {
        name: 'obj3',
        backImage: 'src/photos/photo1.jpg',
        matched: false,
        id: 3
    },

    {
        name: 'obj4',
        backImage: 'src/photos/photo1.jpg',
        matched: false,
        id: 4
    },

    {
        name: 'obj5',
        backImage: 'src/photos/photo1.jpg',
        matched: false,
        id: 5
    },

    {
        name: 'obj5',
        backImage: 'src/photos/photo1.jpg',
        matched: false,
        id: 5
    },

    {
        name: 'obj6',
        backImage: 'src/photos/photo1.jpg',
        matched: false,
        id: 6
    },

    {
        name: 'obj7',
        backImage: 'src/photos/photo1.jpg',
        matched: false,
        id: 7
    },

    {
        name: 'obj8',
        backImage: 'src/photos/photo1.jpg',
        matched: false,
        id: 8
    },

    {
        name: 'obj9',
        backImage: 'src/photos/photo1.jpg',
        matched: false,
        id: 9
    },

    {
        name: 'obj10',
        backImage: 'src/photos/photo1.jpg',
        matched: false,
        id: 10
    }


];


let deckArray = []; //place for store all displayed cards
let cardsLeft = []; // using for modyfing the cards after creating deck 

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




function createDeck() {
    let parent = document.getElementById('cardsContainer')
    for (let i = 0; i < 10; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        let variable = card.getAttribute('class');
        let newElementId = `${i + 1}`;
        card.id = newElementId;
        card.innerHTML = newElementId;
        parent.appendChild(card);
        deckArray.push(card);
    }
    let testElement = document.createElement('div');
    testElement.innerHTML = deckArray;
    parent.appendChild(testElement);

}


function loopCards() {
    deckArray.forEach(function (element) {
        element.style.backgroundColor = 'red';
    });
}