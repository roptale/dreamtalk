document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.favorite-star');

  stars.forEach(star => {
    star.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const userId = star.dataset.userId;

      console.log(`Clicked on user ID: ${userId}`);

      fetch(`/users/${userId}/toggle_favorite`, {
        method: 'POST',
        headers: {
          'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(`Received status: ${data.status}`);
        console.log(`Current class list: ${star.classList}`);

        if (data.status === 'favorited') {
          star.classList.add('active');
          console.log(`Added active class to star of user ID: ${userId}`);
        } else {
          star.classList.remove('active');
          console.log(`Removed active class from star of user ID: ${userId}`);
        }
      })
      .catch(error => console.error('Error:', error));
    });
  });
});
