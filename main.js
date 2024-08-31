const trollOnButton = document.getElementById("troll-on-button")
const trollOffButton = document.getElementById("troll-off-button")
const picture1 = document.getElementById("picture1")
const picture2 = document.getElementById("picture2")
const body1=document.getElementById("body1")
const paper=document.getElementById("paper")

trollOffButton.addEventListener("click", () => {
    picture1.classList.add("hidden")
    picture1.classList.remove("img")

    picture2.classList.add("hidden")
    picture2.classList.remove("dots","img")

    body1.classList.add("body-fix")

    paper.classList.remove("paper-troll")

    document.title = "Resume"
})
trollOnButton.addEventListener("click", () => {
    picture1.classList.add("img")
    picture1.classList.remove("hidden","paper-fix")

    picture2.classList.add("img","dots")
    picture2.classList.remove("hidden")

    body1.classList.add("body-troll")
    body1.classList.remove("body-fix")

    paper.classList.add("paper-troll")

    document.title = "Resume - Google Docs"
})
window.onload = function() {
    trollOffButton.click();
    document.title = "Resume"
}
