


function createCards()
{
    let parent = document.getElementById('cardsContainer');
    let card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = 'test';
    parent.appendChild(card);
}


