document.write("hi")
var start_game=document.getElementById("start")
var el=document.getElementsByClassName("boundary")

function track_mouse(){

    document.write("you lose")
    
}

function start(el){
    start_game.style.backgroundColor="green";
    
    for( let i=0;i<el.length;i++){
    
    el[i].addEventListener("mouseover",track_mouse)

    }
    
}
function end(el){
    end_game.style.background="yellow";
    for( let i=0;i<el.length;i++){
        el[i].removeEventlistener("mouseover",track_mouse)
    }
}


start_game.addEventListener("click",start(el))

var end_game=document.getElementById("end")
end_game.addEventListener("click",end(el))


    