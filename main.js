const trollOnButton = document.getElementById("troll-on-button")
const trollOffButton = document.getElementById("troll-off-button")
const picture1 = document.getElementById("picture1")
const picture2 = document.getElementById("picture2")



trollOnButton.addEventListener("click", () =>{
    console.log("images should appear")
    picture1.classList.add("img","dots")
    picture1.classList.remove("hidden")

    console.log(picture1.classList)
    picture2.classList.add("img","dots")
    picture2.classList.remove("hidden")
})
trollOffButton.addEventListener("click", () =>{
    console.log("images should disappear")
    picture1.classList.add("hidden")
    picture1.classList.remove("not-hidden")

    console.log(picture1.classList)
    picture2.classList.add("hidden")
    picture2.classList.remove("not-hidden")
})