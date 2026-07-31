export default class Header {
  selectors = {
    button: 'data-js-submenu',
  }

  constructor() {
    this.bindEvents()
  }

  onClick(event) {
    const { target } = event

    if (!target.matches('[data-js-submenu]')) return

    target.classList.toggle('active')
  }

  bindEvents() {
    document.addEventListener('click', (event) => this.onClick(event))
  }
}