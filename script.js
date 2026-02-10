// Показ блоку спогадів
document.getElementById('main-heart').addEventListener('click', () => {
  document.getElementById('valentine').style.display = 'none';
  document.getElementById('memories').style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== Створення падаючих сердечок =====
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('floating-heart');
  heart.textContent = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (10 + Math.random() * 20) + 'px';
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';
  document.getElementById('heart-container').appendChild(heart);

  setTimeout(() => { heart.remove(); }, 7000);
}

// Створювати сердечка періодично
setInterval(createHeart, 300);
