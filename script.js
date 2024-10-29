const card = document.querySelectorAll(".card")
const glowSection = document.querySelector(".glow-section")


/**window.matchMedia permet de tester une @Media est vrai ou non,
c'est-à-dire, si elle correspond au type d'appareil utilisé par l'utilisateur

.matches retourne true ou false en fonction de si la requête est satisfaite ou non.

La condition if s'exécutera uniquement si .matches est true, c'est-à-dire si 
l'utilisateur utilise un périphérique à pointeur précis comme une souris ou un stylet.*/

if(window.matchMedia("(pointer:fine)").matches) {
    glowSection.addEventListener("mousemove", blobMouvement)
    glowSection.addEventListener("mouseout", blobMouseOut)
}


/*const cardRect sont des données de géométrie, des données pratique*/

function blobMouvement(e) {

    card.forEach(cardElement => {
        const blob = cardElement.querySelector(".blob")
        const cardRect = cardElement.getBoundingClientRect()
        
         blob.style.opacity = "1"
         blob.style.transform = `translate(calc(${e.clientX - cardRect.left}px - 50%), calc(${e.clientY - cardRect.top}px - 50%))`
        })

}

function blobMouseOut(e) {
    card.forEach(cardElement => {
         const blob = cardElement.querySelector(".blob")
         blob.style.opacity = "0"
    })
}



