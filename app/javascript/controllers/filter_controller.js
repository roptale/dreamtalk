import { Controller } from "@hotwired/stimulus"


export default class extends Controller {
  static targets = ["form", "toggle", "close"];

  toggle() {
    this.formTarget.classList.toggle("hidden");
    this.formTarget.classList.toggle("open");
    this.toggleTarget.classList.toggle("hidden");
  }

  hideFilter() {
    this.formTarget.classList.add("hidden");
    this.formTarget.classList.remove("open");
    this.toggleTarget.classList.remove("hidden");
  }
}
