import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static values = {userId: String}
  connect() {

  }
  favoris(event) {
    event.preventDefault();
    event.stopPropagation();

    fetch(`/users/${this.userIdValue}/toggle_favorite`, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content,
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => {
      console.log(`Received status: ${data.status}`);
      console.log(`Current class list: ${this.element.classList}`);

      if (data.status === 'favorited') {
        this.element.classList.add('active');
        console.log(`Added active class to star of user ID: ${this.userIdValue}`);
      } else {
        this.element.classList.remove('active');
        console.log(`Removed active class from star of user ID: ${this.userIdValue}`);
      }
    })
    .catch(error => console.error('Error:', error));

  }
}
