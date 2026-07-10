document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.product-card');

  cards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 110}ms`;
    card.classList.add('show');
  });

  document.querySelectorAll('.buy-btn').forEach((button) => {
    button.addEventListener('click', () => {
      window.open(button.getAttribute('href'), '_blank', 'noopener,noreferrer');
    });
  });

  const timers = document.querySelectorAll('.timer');

  const updateTimers = () => {
    const now = new Date().getTime();

    timers.forEach((timer) => {
      const targetTime = new Date(timer.getAttribute('data-time')).getTime();
      const distance = targetTime - now;

      if (distance <= 0) {
        timer.textContent = 'New stock is live!';
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      timer.textContent = `New stock in ${days}d ${hours}h ${minutes}m ${seconds}s`;
    });
  };

  updateTimers();
  setInterval(updateTimers, 1000);
});
