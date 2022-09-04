var start_game=document.getElementById("start")
var end_game=document.getElementById("end")

var el=document.getElementsByClassName("boundary")

function track_mouse(){
    for( let i=0;i<el.length;i++){

    el[i].style.backgroundColor="red";
    end_game.removeEventListener("click",end)



    
    }
}

function start(){
    start_game.style.backgroundColor="green";
    end_game.addEventListener("click",end)

    
    for( let i=0;i<el.length;i++){
        var start_color=window.getComputedStyle(start_game).backgroundColor
    el[i].addEventListener("mouseover",track_mouse)
    el[i].style.backgroundColor="black";


    }
    
}
function end(){
    
    end_game.style.background="yellow";
    for( let i=0;i<el.length;i++){
        el[i].removeEventListener("mouseover",track_mouse)
        el[i].style.backgroundColor="#eeeeee";



        

    }        start_game.style.backgroundColor="orange"

}
function again(){
    for( let i=0;i<el.length;i++){
        

        end_game.addEventListener("click",end)
        
        end_game.style.background="#8888ff"

    }
}


start_game.addEventListener("click",start)
var start_color=window.getComputedStyle(start_game).backgroundColor

console.log(start_color)







start_game.addEventListener("click",again)



    