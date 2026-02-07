function nextPage(page) {
    window.location.href = page;
}

function checkAnswer() {
    let ans = document.getElementById("answer").value.toLowerCase();
    if(ans === "college") {  // CHANGE THIS
        window.location.href = "page3.html";
    } else {
        document.getElementById("result").innerText = "Nooo Babs 😜 Try Again ❤️";
    }
}

let score = 0;

if(document.getElementById("score")){
    setInterval(()=>{
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.style.position="absolute";
        heart.style.left=Math.random()*window.innerWidth+"px";
        heart.style.top=Math.random()*window.innerHeight+"px";
        heart.style.cursor="pointer";
        heart.onclick=function(){
            score++;
            document.getElementById("score").innerText=score;
            heart.remove();
            if(score>=5){
                window.location.href="page4.html";
            }
        }
        document.body.appendChild(heart);
        setTimeout(()=>heart.remove(),2000);
    },800);
}

function checkFood(){
    let food=document.getElementById("food").value.toLowerCase();
    if(food==="pizza"){   // CHANGE THIS
        window.location.href="page6.html";
    }else{
        document.getElementById("foodResult").innerText="Hehehe wrong 😜";
    }
}

if(document.getElementById("loveText")){
    let text="From the day we met, my life changed completely... You are my happiness, my peace, my everything ❤️";
    let i=0;
    function type(){
        if(i<text.length){
            document.getElementById("loveText").innerHTML+=text.charAt(i);
            i++;
            setTimeout(type,50);
        }
    }
    type();
}

function yesLove(){
    alert("Yayyyyy ❤️ I Love You Forever 💍💕");
}

let noBtn=document.getElementById("noBtn");
if(noBtn){
    noBtn.addEventListener("mouseover",function(){
        noBtn.style.position="absolute";
        noBtn.style.top=Math.random()*window.innerHeight+"px";
        noBtn.style.left=Math.random()*window.innerWidth+"px";
    });
}
