let btn = document.querySelector('#btn');
let nav = document.querySelector('#nav');
let x = document.querySelector('#x')
let body = document.querySelector('body')
let card = document.querySelectorAll('.card')
let cardActive = document.querySelectorAll('.card.flex')
let more = document.querySelector('#more')
let zero = document.querySelector('#zero')


// header navigation bar start
btn.addEventListener('click' , function(){
    nav.classList.remove("left-full")
    nav.classList.add("left-0")
})

x.addEventListener('click' , function(){
    nav.classList.add("left-full")
    nav.classList.remove("left-0")
})
// header navigation bar end

// card start

card.forEach(element => {
    zero.textContent = cardActive.length;
    more.addEventListener("click", function(){
        element.classList.remove("hidden")
        element.classList.add("flex")
        more.classList.add("hidden")
        zero.textContent = card.length;
    })
});

let cardWork = document.querySelectorAll(".card-work")
let moreWork = document.querySelector(".more-work")

cardWork.forEach(element => {
    moreWork.addEventListener("click", function(){
        element.classList.remove("hidden")
        element.classList.add("flex")
        moreWork.classList.add("hidden")
    })
});

let cardComment = document.querySelectorAll(".comment-card")
let moreComment = document.querySelector(".more-comment")

cardComment.forEach(element => {
    moreComment.addEventListener("click", function(){
        element.classList.remove("hidden")
        element.classList.add("block")
        moreComment.classList.add("hidden")
    })
});

// more.addEventListener('click' , function(){
//     cardOne.classList.remove("hidden")
// })
// card end

// more start


// more end