function handleMouseEnter() {
  this.classList.add('card--hovered')
}

function handleMouseLeave() {
  this.classList.remove('card--hovered')
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('card')

  for (let i = 0; i < cardElements.length; i++) {
    const card = cardElements[i]
    card.addEventListener('mouseenter', handleMouseEnter)
    card.addEventListener('mouseleave', handleMouseLeave)
  }
}

document.addEventListener('DOMContentLoaded', addEventListenersToCards, false)
