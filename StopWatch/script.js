let display_Con=document.querySelector(".display")
let startTime=0;
let elapsedTime=0;
let timer=null
let isRunning=false


function start(){
    if(!isRunning){
        startTime=Date.now()-elapsedTime;
        timer=setInterval(update,10)
        isRunning=true
    }
}

function stop(){
    if(isRunning){
        elapsedTime=Date.now()-startTime;
        clearInterval(timer)
        isRunning=false
    }
}


function Reset(){

    clearInterval(timer)
    timer=null
    startTime=0
    elapsedTime=0
    isRunning=false
    display_Con.textContent="00:00:00:00"

}

function update(){
   let currentTime=Date.now()
   elapsedTime=currentTime-startTime
   let hours=Math.floor(elapsedTime / (1000 * 60 * 60))
   let Minutes=Math.floor(elapsedTime/(1000 * 60)  % 60)
   let Sec=Math.floor(elapsedTime / (1000) % 60)
   let mill=Math.floor(elapsedTime % 1000 / 10)

   hours=String(hours).padStart(2,"0")
   Minutes=String(Minutes).padStart(2,"0")
   Sec=String(Sec).padStart(2,"0")
   mill=String(mill).padStart(2,"0")

   display_Con.textContent=`${hours}:${Minutes}:${Sec}:${mill}`
}




