let array = [
    {
        name: 'obj1',
        backImage: 'src/photos/photo1.jpg',
        matched: false,
        id: 1
    }
]


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
    front.style.display = 'block';

    const back = document.createElement('div');
    back.classList.add('card-back');
    //back.style.backgroundImage = cardData.backImage;
    back.innerHTML = 'back';
    back.style.display = 'none';

    element.appendChild(front);
    element.appendChild(back);

    // event listener
    element.addEventListener('click', function(){flipCard(element);});
    
    return element;

}

function cardFactory(cardData) {
    return {
      name: cardData.name,
      backImage: cardData.backImage,
      matched: false
    };
  }

  function createSet()
  {
    let parrent = document.getElementById('container');
    parrent.appendChild(createCard(array[0]));
  }

  document.getElementById('start').addEventListener('click', function(){createSet();});

document.get