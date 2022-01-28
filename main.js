const emojies = document.querySelectorAll(".m-right-text");
const ulm_rightElements = document.querySelectorAll(".m-right-list");
const rightEmoji = document.querySelectorAll(".right-emoji");
const rightGif = document.querySelectorAll(".right-gif");
let emoji = emojies[1];

console.log(ulm_rightElements[2]);


emojies[1].addEventListener("click", e => {
emoji.classList.add("border-active");
emojies[0].classList.remove("border-active")
ulm_rightElements[1].classList.add("m-right-img-active");

emojies[2].classList.remove("border-active");
for(let key of rightEmoji){
    key.classList.add("right-emoji-active");
};
for(let key of rightGif){
    key.classList.remove("right-gif-active");
}
})

emojies[0].addEventListener("click", e =>{
    emoji.classList.remove("border-active");
    emojies[0].classList.add("border-active");
    ulm_rightElements[1].classList.remove("m-right-img-active");
    emojies[2].classList.remove("border-active");
    for(let key of rightEmoji){
    key.classList.remove("right-emoji-active")
    };
    for(let key of rightGif){
        key.classList.remove("right-gif-active");
    }
 

})

emojies[2].addEventListener("click", e =>{
    emojies[2].classList.add("border-active");
    emoji.classList.remove("border-active");
    emojies[1].classList.remove("border-active");
    emojies[0].classList.remove("border-active");
    for(let key of rightEmoji){
        key.classList.remove("right-emoji-active")
        }
    for(let key of rightGif){
        key.classList.add("right-gif-active");
    }
})

