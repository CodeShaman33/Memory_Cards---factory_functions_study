


function createCard(cardData)
{
    const card = cardFactory(cardData);
    const element = document.createElement('div');
    element.classList.add('card');
    element.dataset.name = card.name;

    // front side of the card
    const front = document.createElement('div');
    front.classList.add('card-front');
    front.style.backgroundImage = `url(${card.frontImage})`;


}