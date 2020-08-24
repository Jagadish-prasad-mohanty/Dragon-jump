var score=0
const dino=document.querySelector('.dino');
gameOver=document.querySelector(".gameOver")
obstacle=document.querySelector("#obstacle1")
scoreC=document.querySelector(".scorec")
let x=document.getElementById("myGameAudio")
let y=document.getElementById("myGameOverAudio")
function func(){
    // location.reload()
    obstacle.classList.add("dragonMoveAnim")
    x.play()
    gameOver.style.visibility="hidden"
    scoreC.textContent=score
}

document.onkeydown =function(e){
    console.log(e.keyCode);
    if (e.keyCode==38){
        dino.classList.add('jumpDinoAnim')
        setTimeout(() => {
            dino.classList.remove('jumpDinoAnim')
        }, 1000);
    }
    else if (e.keyCode==39){
        dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
        dino.style.left=dy+120+'px'
    }
    else if (e.keyCode==37){
        dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
        dino.style.left=dy-120+'px'
    }
}
setInterval(() => {
    
    // let scoreC=document.querySelector("#scoreCount")
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue("bottom"))
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"))
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("bottom"))
    // console.log(dy,dx,oy,ox);
    let offsetX=Math.abs(dx-ox)
    let offsetY=Math.abs(dy-oy)
    // console.log(offsetX,offsetY);
    
    if (offsetY<120){
        if(offsetX<120){
            score=0
            y.play()
            setTimeout(() => {
                x.pause()
                y.pause()
            }, 1500);
            console.log(true);
            dino.style.transform=`rotate(180deg)`;
            gameOver.innerHTML=`<p>Game Over!!</p>`
            obstacle.classList.remove("dragonMoveAnim")
            setTimeout(() => {
                dino.style.transform=`rotate(360deg)`; 
                gameOver.innerHTML=`<p>Game Over!!</p>
            <button onclick="func()" class="start" type="button">START</button> `
            }, 3000);
            gameOver.style.visibility="visible"
        }
    }
    if(oy<-110){
        score++
        scoreC.textContent=score
        console.log(score);
        console.log(oy);
        animTime=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue("animation-duration"))
        if (animTime>2){
            animTime=animTime-0.1
            obstacle.style.animationDuration=animTime+'s'
        }
        console.log(animTime);
    }
    

}, 100);
