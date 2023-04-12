const cardsContainer = document.getElementById('cards-container');

const fetchCards = async () => {
  try {
    const response = await fetch('/cards');
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const renderCards = (cards) => {
  cards.forEach((card) => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('card');
    cardDiv.innerHTML = `<h2>${card.name}</h2><p>${card.desc}</p>`;
    cardsContainer.appendChild(cardDiv);
  });
};

fetchCards().then((cards) => {
  renderCards(cards);
});
