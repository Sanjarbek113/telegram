const emojies = document.querySelectorAll(".m-right-text");
const ulm_rightElements = document.querySelectorAll(".m-right-list");
const rightEmoji = document.querySelectorAll(".right-emoji");
const rightGif = document.querySelectorAll(".right-gif");
let emoji = emojies[1];

// console.log(ulm_rightElements[2]);


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



const settings = document.querySelector(".settings");
const settingsBtn = document.querySelectorAll(".main-img");
const mainOfmain = document.querySelector(".main");
const box = document.querySelector(".box");
const graphImg = document.querySelectorAll(".graph-img");
const graphText = document.querySelectorAll(".graph-text");
const graphSubtext = document.querySelectorAll(".graph-subtext");
const m_left_text = document.querySelectorAll(".m-left-text");

settingsBtn[0].addEventListener("click", () =>{
    settings.classList.add("new");
   
});

settings.addEventListener("click", () =>{
    settings.classList.remove("new");

});
settingsBtn[5].addEventListener("click", () =>{
    for(let key of graphImg){
        key.src = "https://picsum.photos/200/300/?blur=2";
    };
    for(let key in graphText){
        graphText[key].textContent = " Sanjarbek's bots"
        if( key == 1){
            graphText[key].textContent = "Father bot";
        };
        if( key == 2){
            graphText[key].textContent = "Instgaram bot";
        };
        if( key == 3){
            graphText[key].textContent = "Download bot";
        };
        if( key == 5){
            graphText[key].textContent = "img to pdf bot";
        };
    }
        for(let key in graphSubtext){
            graphSubtext[key].textContent = "/help";
            if(key == 1){
                graphSubtext[key].textContent = " start";
            };
            if(key == 2){
                graphSubtext[key].textContent = "New adds";
            };
            if(key == 3){
                graphSubtext[key].textContent = "Here you are";
            };
            if(key == 5){
                graphSubtext[key].textContent = "Would you like to continue";
            };
        }
        m_left_text[4].style.color = "whitesmoke ";
        m_left_text[3].style.color = "grey";
        m_left_text[2].style.color = "grey";
    
});


settingsBtn[4].addEventListener("click", () =>{
    for(let key of graphImg){
        key.src = "https://picsum.photos/id/870/200/300?grayscale&blur=2";
    };
    for(let key in graphText){
        graphText[key].textContent = "Football TV"
        if( key == 1){
            graphText[key].textContent = "Chelsea";
        };
        if( key == 2){
            graphText[key].textContent = "ITwithus";
        };
        if( key == 3){
            graphText[key].textContent = "TATU";
        };
        if( key == 5){
            graphText[key].textContent = "Materiallar";
        };
    }
        for(let key in graphSubtext){
            graphSubtext[key].textContent = "4k member";
            if(key == 1){
                graphSubtext[key].textContent = " 230 k member";
            };
            if(key == 2){
                graphSubtext[key].textContent = "40k member";
            };
            if(key == 3){
                graphSubtext[key].textContent = "34k member";
            };
            if(key == 5){
                graphSubtext[key].textContent = "2000 member";
            };
        }
        m_left_text[4].style.color = "grey ";
        m_left_text[2].style.color = "grey";
        m_left_text[3].style.color = "whitesmoke";
    
});


settingsBtn[3].addEventListener("click", () =>{
    for(let key of graphImg){
        key.src = "https://picsum.photos/200/300";
    };
    for(let key in graphText){
        graphText[key].textContent = "Sindoshlar"
        if( key == 1){
            graphText[key].textContent = "Chelsea group";
        };
        if( key == 2){
            graphText[key].textContent = "kurdoshlar";
        };
        if( key == 3){
            graphText[key].textContent = "Everest ";
        };
        if( key == 5){
            graphText[key].textContent = "frontend";
        };
    }
        for(let key in graphSubtext){
            graphSubtext[key].textContent = "Qalesila";
            if(key == 1){
                graphSubtext[key].textContent = " nma gap";
            };
            if(key == 2){
                graphSubtext[key].textContent = "Assalomu aleykum";
            };
            if(key == 3){
                graphSubtext[key].textContent = "kim keldi";
            };
            if(key == 5){
                graphSubtext[key].textContent = "bugun nma qlamiza";
            };
        }
        m_left_text[4].style.color = "grey ";
        m_left_text[3].style.color = "grey";
        m_left_text[2].style.color = "whitesmoke";
    
});