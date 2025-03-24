const orderButton = document.querySelector(".catalog__order-button")
const popup = document.querySelector(".popup")
const thankPopup = document.querySelector(".thank-popup")
const fadeElem = document.querySelector(".fade")
const popupCross = document.querySelector(".popup__cross")
const popupForm = document.querySelector(".popup__form")
const thankPopupCross = document.querySelector(".thank-popup__cross")


orderButton.addEventListener("click", togglePopup)

popupCross.addEventListener("click", togglePopup)

function togglePopup() {
    popup.classList.toggle("hide")
    fadeElem.classList.toggle("hide")
}

popupForm.addEventListener("submit", event => {
    event.preventDefault()

    popup.classList.add("hide")
    thankPopup.classList.remove("hide")
})

thankPopupCross.addEventListener("click", () => {
    thankPopup.classList.add("hide")
    fadeElem.classList.add("hide")
})
