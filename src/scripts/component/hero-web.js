class HeroWeb extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
          <picture>
            <source media="(max-width: 650px)" srcset="https://restaurant-api.dicoding.dev/images/small/22" type="image/jpeg">
            <source media="(min-width: 650px)" srcset="https://restaurant-api.dicoding.dev/images/medium/22">
            <source media="(min-width: 1200px)" srcset="https://restaurant-api.dicoding.dev/images/large/22">
            <img
                width="100%" height="360px" 
                src="https://restaurant-api.dicoding.dev/images/small/22" 
                alt="hero website"
            />
          </picture>
        <div class="hero-text">
        <h1>Hunger Apps </h1>
        <p>Temukan Restoran Favorit Anda </p>
        </div>
        </div>
           `;
  }
}
customElements.define('hero-web', HeroWeb);
