const shareBtn = document.querySelector(".share")
const icons = document.querySelector(".social-icons")

shareBtn.addEventListener("click", (e) => {

    if (icons.classList.contains("show")) {
        icons.classList.remove("show")
    } else {
        icons.classList.add("show")
    }
})