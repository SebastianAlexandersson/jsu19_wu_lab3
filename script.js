const topLayer = document.querySelector("#top-layer")
const topLayerButton = 
  document.querySelector("#top-layer button")
  .addEventListener("click", () => {
    topLayer.style.animationPlayState = "running"

    setTimeout(() => topLayer.remove(), 1900)
  })

const pageOne = document.querySelector("#page-one")
const pageOneButton = 
  document.querySelector("#page-one button")
  .addEventListener("click", () => {
    pageOne.style.animationPlayState = "running"

    setTimeout(() => pageOne.remove(), 2900)
  })

const pageTwo = document.querySelector("#page-two")
const pageTwoButton = 
  document.querySelector("#page-two button")
  .addEventListener("click", () => {
    pageTwo.style.animationPlayState = "running"

    setTimeout(() => pageTwo.remove(), 1900)
  })

const pageThree = document.querySelector("#page-three")
const pageThreeButton = 
  document.querySelector("#page-three button")
  .addEventListener("click", () => {
    pageThree.style.animationPlayState = "running"

    setTimeout(() => pageThree.remove(), 400)
  })

    