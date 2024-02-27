let cloud = document.getElementsByClassName("cloud");
let dino = document.getElementById("dino");
let cactus = document.getElementsByClassName("cactus");
let flag = 0;//to get down our dino after every jump

let loseAudio=document.getElementById("loseAudio");
let clickAudio=document.getElementById("clickAudio");

let score_selector=document.getElementById("score");
let score=0;
score_selector.innerHTML=score //initializing score

//start game
function startGame() {
    location.reload();//refresh page
}

//game over function 
function gameOver() {
    cloud[0].classList.remove("cloud1");
    cloud[1].classList.remove("cloud2");
    cloud[2].classList.remove("cloud3");
    clearInterval(gamePlay);
    clearInterval(interval);
    loseAudio.play();
}

//random cactus selection 
let current_cactus;
let previous_cactus;
current_cactus = Math.floor(Math.random() * 4);

    let gamePlay = setInterval(() => {
        previous_cactus = current_cactus;
        current_cactus = Math.floor(Math.random() * 4);
        if (current_cactus == previous_cactus) {
            current_cactus = (current_cactus + 1) % 4;
        }
        cactus[current_cactus].classList.add("cactus_ani");
        cactus[previous_cactus].classList.remove("cactus_ani");
       //score addtion
        score=score+10;
        score_selector.innerHTML=score;
    }, 2000);

    //condition of game 

    let interval = setInterval(() => {
        let value = parseInt(window.getComputedStyle(cactus[current_cactus]).getPropertyValue("right"));
        let dino_height = parseInt(window.getComputedStyle(dino).getPropertyValue("bottom"));

        if (((value > 900 && value < 1200) && dino_height < 100)) {
            cactus[current_cactus].classList.remove("cactus_ani");
            gameOver();
        }
        else {
            console.log("win");
        }
    }, 300);


//dino movement
window.addEventListener("keydown", function (e) {

    if (flag == 0 && (e.keyCode == 38 || e.keyCode == 32 || e.keyCode == 13)) {
        clickAudio.play();
        dino.style.bottom = "300px";
        flag = 1;
        let dino_down = this.setTimeout(() => {
            dino.style.bottom = "0px";

        }, 500);

    };
    window.addEventListener("keyup", function (f) {
        flag = 0;
    });
})


//cloud motion 
cloud[0].addEventListener("animationiteration", () => {
    let random = Math.floor(Math.random() * 4);
    cloud[0].style.animationDelay = 5 + "s";
})
cloud[1].addEventListener("animationiteration", () => {
    let random = Math.floor(Math.random() * 4);
    cloud[1].style.animationDelay = 4 + "s";
})
