const counter = document.querySelector("#counter")
const minus = document.querySelector("#minus")
const plus = document.querySelector("#plus")
const heart = document.querySelector("#heart")
const likes= document.querySelector(".likes")
const pause = document.querySelector("#pause")
const formComments = document.querySelector("#comment-form")
const comments = document.querySelector("#list")

let oldCounter = 0
let likeCountTracker = 0


minus.addEventListener("click", decrementCounter)
plus.addEventListener("click", incrementCounter)
heart.addEventListener("click", addLike)
pause.addEventListener("click", pauseResume)
formComments.addEventListener("submit", commentHandler)


let timeClock = setInterval(incrementCounter, 1000)

    

function decrementCounter(){
    counter.innerText = parseInt(counter.innerText) - 1
}

function incrementCounter(){
    counter.innerText = parseInt(counter.innerText) + 1
}


function addLike(){
    
    if (oldCounter != counter.innerText) {
        likeCountTracker = 1
        renderLikes(likeCountTracker)
        console.log("sup")
        console.log(oldCounter)
    } else if (oldCounter == counter.innerText) {
        likeCountTracker += 1
        renderLikes(likeCountTracker)
        console.log("hey")
        console.log(oldCounter)
    }
    
    oldCounter = counter.innerText
}

function renderLikes(numOfLikes){
    //event.target.querySelector("")
    
    let p = document.createElement("li")
    p.innerText = `${counter.innerText} was liked ${numOfLikes} time(s)!`
    likes.append(p)
}

 function pauseResume() {
    var buttonText = document.querySelector("#pause").innerText

    if (buttonText === "pause") {
        clearInterval(timeClock)
        pause.textContent= "resume"
        
        
    } else if (buttonText === "resume") {
         timeClock = setInterval(incrementCounter, 1000)
         pause.textContent = "pause"
    }

    
 }

 function commentHandler(evt){
    evt.preventDefault()
    const comment = evt.target.querySelector("input").value
    const li = document.createElement("li")
    li.innerText = comment
    comments.append(li)
    evt.target.reset()
}

