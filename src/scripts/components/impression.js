export default class Impression {
  selectors = {
    button: '.impression__list-item',
    dataImage: 'data-js-image',
    images: '.impression__image img',
  }

  constructor() {
    this.bindEvents()
  }

  changeClasses(buttonElement) {
    const buttonElements = document.querySelectorAll(this.selectors.button)
    const imageElements = document.querySelectorAll(this.selectors.images)
    const numFrame = buttonElement.getAttribute(this.selectors.dataImage)

    buttonElements.forEach((item) => item.classList.remove('active'))
    buttonElement.classList.add('active')

    imageElements.forEach((item) => item.classList.remove('active'))
    imageElements[numFrame - 1].classList.add('active')
  }

  onClick(event) {
    const buttonElement = event.target.closest(this.selectors.button)
    if (!buttonElement) return

    this.changeClasses(buttonElement)
  }

  bindEvents() {
    document.addEventListener('click', (event) => this.onClick(event))
  }
}