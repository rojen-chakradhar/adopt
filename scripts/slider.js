const cardContainer = document.querySelector('.cards');
const skipBtn = document.getElementById('skip');
const matchBtn = document.getElementById('match');

function initCards() {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    card.style.zIndex = cards.length - index;
    card.style.transform = `scale(${(20 - index) / 20}) translateY(-${index * 10}px)`;
    card.style.opacity = index > 2 ? 0 : 1;
  });
}

function swipe(direction) {
  const cards = document.querySelectorAll('.card');
  const topCard = cards[0];
  if (!topCard) return;
  topCard.style.transform = `translateX(${direction * 500}px) rotate(${direction * 30}deg)`;
  topCard.style.opacity = 0;
  setTimeout(() => {
    topCard.style.transition = 'none';
    topCard.style.transform = '';
    topCard.style.opacity = '';
    cardContainer.append(topCard);
    initCards();
    setTimeout(() => topCard.style.transition = 'transform 0.3s ease, opacity 0.3s', 10);
  }, 400);
}

skipBtn.addEventListener('click', () => swipe(-1));
matchBtn.addEventListener('click', () => swipe(1));
let startX = 0;
cardContainer.addEventListener('touchstart', e => startX = e.touches[0].clientX);
cardContainer.addEventListener('touchend', e => {
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) swipe(-1);
  else if (endX - startX > 50) swipe(1);
});

initCards();