
for(var i = 0; i < document.querySelectorAll(".music").length ; i++){
    document.querySelectorAll(".music")[i].addEventListener("click", function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

document.addEventListener("keydown",function(event){

    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){
    switch (key) {
        case "w":
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case "a":
            var audio1 = new Audio("sounds/tom-2.mp3");
            audio1.play();
            break;
        case "s":
            var audio1 = new Audio("sounds/tom-3.mp3");
            audio1.play();
            break;
        case "d":
            var audio1 = new Audio("sounds/tom-4.mp3");
            audio1.play();
            break;
        case "a":
            var audio1 = new Audio("sounds/tom-1.mp3");
            audio1.play();
            break;
        case "j":
            var audio1 = new Audio("sounds/snare.mp3");
            audio1.play();
            break;
        case "k":
            var audio1 = new Audio("sounds/crash.mp3");
            audio1.play();
            break;
        case "l":
            var audio1 = new Audio("sounds/kick-bass.mp3");
            audio1.play();
            break;
        default:
            break;
    }
}

function buttonAnimation(currentKey){
    
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}


// Burry Banna Knock

document.querySelector(".banna").addEventListener("click", function(){
    makeSound("j");
    setTimeout(function(){
        makeSound("j");
    }, 350);
});

// Lovesick Knock

document.querySelector(".lovesick").addEventListener("click", function(){
    makeSound("w");
    setTimeout(function(){
        makeSound("w");

    }, 200);

    setTimeout(function(){
        makeSound("w");
    }, 400);
});

// Suga Knock

document.querySelector(".suga").addEventListener("click", function(){
    makeSound("a");
    setTimeout(function(){
        makeSound("a");

    }, 500);
    setTimeout(function(){
        makeSound("a");
    }, 700);

    setTimeout(function(){
        makeSound("a");
    }, 900);

    setTimeout(function(){
        makeSound("a");
    }, 1500);

    setTimeout(function(){
        makeSound("a");
    }, 1800);
});

