
deckArray = []; //place for store all displayed cards

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
    });


function createDeck() {
    let parent = document.getElementById('cardsContainer')
    for (let i = 0; i < 10; i++) {
        let card = document.createElement('div');
        card.classList.add('card');
        let variable = card.getAttribute('class');
        let newElementId = `${variable}${i+1}`;
        card.id = newElementId;
        card.innerHTML = newElementId;
        parent.appendChild(card);
        deckArray.push(card);
    }
    let testElement = document.createElement('div');
    testElement.innerHTML = deckArray;
    parent.appendChild(testElement);
    
}
