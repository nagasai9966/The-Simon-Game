var arr=["green","red","yellow","blue"];
autoClickedArray=[];
userClickedArray=[];
start=true;
level=0;
document.addEventListener("keypress",function(){
    if(start){
        autoClick();
        start=false;
    }
})
$(".button").click(function(){
    var cbut=$(this).attr("id");
    automated(cbut);
    sounds(cbut);
    userClickedArray.push(cbut);
    checkAnswer(userClickedArray.length-1);
});
    

function checkAnswer(value){
    if (userClickedArray[value] === autoClickedArray[value]){
        if(userClickedArray.length === autoClickedArray.length){
            setTimeout(function(){
                autoClick();
            },1000);
          
        }

    }
    else{
        document.querySelector("h1").textContent="Looser !! Press Any Key";
startover();
    }
}

function autoClick(){
        userClickedArray=[];
        var but=arr[Math.floor((Math.random()*arr.length))];
        automated(but);
        sounds(but);
        autoClickedArray.push(but);
        level++;
        document.querySelector("h1").textContent= "Level"+level
        

    }
function automated(but){
    
    
    document.querySelector("#"+but).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("#"+but).classList.remove("pressed");
    },100);
}
function startover(){
    start=true;
    level=0;
    autoClickedArray=[];

}
function sounds(sou){
    switch(sou){
        case "green":var audio=new Audio("green.wav");
            audio.play();
            break;
        case "red":var audio=new Audio("red.wav");
            audio.play();
            break;
        case "yellow":var audio=new Audio("yellow.wav");
            audio.play();
            break;
        case "blue":var audio=new Audio("blue.wav");
            audio.play();
            break;
    }
}