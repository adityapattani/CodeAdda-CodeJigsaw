var d = new Date();
var time = 0;
var ip = "0.0.0.0";

$(document).ready(function () {
    $.getJSON('https://api.ipify.org?format=json', function(data){
        ip = (data.ip);
        console.log(ip);
        var ipArr = ip.split(".");
        console.log(ipArr[3]);
        selectRandomImage(ipArr[3]);
    });
});

function beginTime(){
    time = d.getTime();
    console.log(time);
}

function stopTime(){
    var d = new Date();
    var time2 = d.getTime();
    console.log(time2);
    var timeTaken = time2 - time;
    var answer = window.prompt("Who do you think this is?");
    console.log(answer);
}

function selectRandomImage(a) {
    var num = parseInt(a);
    num = num % 10;
    
    switch (num){
        case 1:
            document.getElementById("hero-image").src = "Puzzle1.jpg";
            break;
        
        case 2:
            document.getElementById("hero-image").src = "Puzzle2.jpg";
            break;
            
        case 3:
            document.getElementById("hero-image").src = "Puzzle3.jpg";
            break;
            
        case 4:
            document.getElementById("hero-image").src = "Puzzle4.jpg";
            break;
            
        case 5:
            document.getElementById("hero-image").src = "Puzzle1.jpg";
            break;
            
        case 6:
            document.getElementById("hero-image").src = "Puzzle1.jpg";
            break;
        
        case 7:
            document.getElementById("hero-image").src = "Puzzle2.jpg";
            break;
            
        case 8:
            document.getElementById("hero-image").src = "Puzzle3.jpg";
            break;
            
        case 9:
            document.getElementById("hero-image").src = "Puzzle4.jpg";
            break;
            
        case 0:
            document.getElementById("hero-image").src = "Puzzle1.jpg";
            break;
    }
}

var goButton = document.getElementById("go");

goButton.onclick = function open(){
    var unlockCode = document.getElementById("uncode").value;

    switch(unlockCode){
        case "Hardik":
            document.getElementById("one").style.opacity = 0;
            break;

        case "Samkit":
            document.getElementById("two").style.opacity = 0;
            break;

        case "Darshan":
            document.getElementById("three").style.opacity = 0;
            break;

        case "Pratik":
            document.getElementById("four").style.opacity = 0;
            break;

        case "Sanjay":
            document.getElementById("five").style.opacity = 0;
            break;

        case "Dhruvin":
            document.getElementById("six").style.opacity = 0;
            break;

        case "Kaumil":
            document.getElementById("seven").style.opacity = 0;
            break;

        case "Poojan":
            document.getElementById("eight").style.opacity = 0;
            break;

        case "Shivam":
            document.getElementById("nine").style.opacity = 0;
            break;
    }

    document.getElementById("uncode").value = "";
}

document.onkeydown = function(e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
        return false;
    } else {
        return true;
    }
};

$(document).keydown(function(event){
if(event.keyCode == 123){
        return false;
    }
else if (event.ctrlKey && event.shiftKey && event.keyCode == 73){        
        return false;
    }
});

$(document).on("contextmenu",function(e){        
   e.preventDefault();
});