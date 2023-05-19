const submitBtn = document.querySelector(".submit-btn")
const btns = document.querySelectorAll(".btn")
let selectedRating

btns.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        const clickedButton = event.target
        selectedRating = clickedButton.innerText
        btns.forEach(btn => btn.classList.remove("active"))
        clickedButton.classList.add("active")
    })
})

submitBtn.addEventListener("click", ()=> {
    if (selectedRating === undefined) {
        alert("You must select a rating!")
    } else {
        document.querySelector(".thank-you").classList.remove("hide")
        document.querySelector(".selection").classList.add("hide")
        document.querySelector(".rate-chosen").textContent = selectedRating
    }
})