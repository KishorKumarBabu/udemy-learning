 for (var i=0; i<document.querySelectorAll("button").length;i++){
 document.querySelectorAll(".drum")[i].addEventListener('click', function() {
    var buttoninnerHtml=this.innerHTML;
    macksound(buttoninnerHtml)
    
});}
document.addEventListener("keypress",function(event){
    macksound(event.key)
})
function macksound(key){
    switch (key) {
        case "w":
            var audio=new Audio("sounds/tom-1.mp3")
            audio.play()
            break;
            case "a":
                var audio=new Audio("sounds/tom-2.mp3")
                audio.play()
                break;
            case "s":
                var audio=new Audio("sounds/tom-3.mp3")
                audio.play()
                break;
            case "d":
                var audio=new Audio("sounds/tom-4.mp3")
                audio.play()
                break;
            case "j":
                var audio=new Audio("sounds/snare.mp3")
                audio.play()
                break;
            case "k":
                var audio=new Audio("sounds/crash.mp3")
                audio.play()
                break;
            case "l":
                var audio=new Audio("sounds/kick-bass.mp3")
                audio.play()
                break;

        default:
            break;
    }
};

