describe('createCard', () => {
    it('should return an HTML element', () => {
      const card = createCard(array[0]);
      expect(card).toBeInstanceOf(HTMLElement);
    });
  
    it('should set the expected classes and attributes', () => {
      const card = createCard(array[0]);
      expect(card.classList).toContain('card');
      expect(card.id).toEqual('1');
      expect(card.dataset.name).toEqual('obj1');
    });
  
    it('should set the expected front and back styles and content', () => {
      const card = createCard(array[0]);
      const front = card.querySelector('.card-front');
      const back = card.querySelector('.card-back');
      expect(front.style.backgroundColor).toEqual('red');
      expect(front.innerHTML).toEqual('front');
      expect(back.style.backgroundColor).toEqual('green');
      expect(back.innerHTML).toEqual('back');
    });
  });
  
  describe('cardFactory', () => {
    it('should return an object with the expected properties', () => {
      const card = cardFactory(array[0]);
      expect(card.name).toEqual('obj1');
      expect(card.backImage).toEqual('src/photos/photo1.jpg');
      expect(card.matched).toEqual(false);
    });
  });
  
  describe('flipCard', () => {
    it('should toggle the flipped class on the clicked element', () => {
      const card = createCard(array[0]);
      flipCard(card);
      expect(card.classList).toContain('flipped');
    });
  
    it('should toggle the flipped class on all child card elements', () => {
      const card = createCard(array[0]);
      flipCard(card);
      const front = card.querySelector('.card-front');
      const back = card.querySelector('.card-back');
      expect(front.classList).toContain('flipped');
      expect(back.classList).toContain('flipped');
    });
  });
  
  describe('createSet', () => {
    it('should append a new card element to the parent element', () => {
      const container = document.createElement('div');
      container.id = 'cardsContainer';
      document.body.appendChild(container);
      createSet();
      const card = container.querySelector('.card');
      expect(card).toBeInstanceOf(HTMLElement);
    });
  
    it('should set the expected attributes and styles on the new card element', () => {
      const container = document.createElement('div');
      container.id = 'cardsContainer';
      document.body.appendChild(container);
      createSet();
      const card = container.querySelector('.card');
      expect(card.id).toEqual('1');
      expect(card.dataset.name).toEqual('obj1');
      const front = card.querySelector('.card-front');
      const back = card.querySelector('.card-back');
      expect(front.style.backgroundColor).toEqual('red');
      expect(front.innerHTML).toEqual('front');
      expect(back.style.backgroundColor).toEqual('green');
  