const cards = document.querySelectorAll(".card")
const glowSection = document.querySelector(".glow-section")

if(window.matchMedia("(pointer:fine)").matches) {

  glowSection.addEventListener("mousemove", blobMovement)
  glowSection.addEventListener("mouseout", blobMouseOut)

}

function blobMovement(e) {

  cards.forEach(cardElement => {
    const blob = cardElement.querySelector(".blob")
    const cardRect = cardElement.getBoundingClientRect()

    blob.style.opacity = "1"

    // blob.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
    // blob.style.transform = `translate(${e.clientX - cardRect.left}px, ${e.clientY - cardRect.top}px)`
    blob.style.transform = `translate(calc(${e.clientX - cardRect.left}px - 50%), calc(${e.clientY - cardRect.top}px - 50%))`
  })

}

function blobMouseOut(e) {
  cards.forEach(cardElement => {
    const blob = cardElement.querySelector(".blob")
    blob.style.opacity = "0"
  })
}
