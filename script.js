function nextPage(page) {
    window.location.href = page;
}

function checkAnswer() {
    let ans = document.getElementById("answer").value.toLowerCase();
    if(ans === "bus stop") {  // CHANGE THIS
        window.location.href = "page3.html";
    } else {
        document.getElementById("result").innerText = "Nooo Babs 😜 Try Again ❤️";
    }
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
function playVideo(){
    document.getElementById("proposalContent").style.display="none";
    document.getElementById("videoContainer").style.display="flex";
}
function goToSurprise(){
    window.location.href = "page8.html";
}

function openSurprise(){
    document.getElementById("textSection").style.display = "none";
    document.getElementById("videoSection").style.display = "flex";
}

/* =========================
   PHOTO PUZZLE GAME (PAGE 3)
========================= */

const puzzleContainer = document.getElementById("puzzle");

if(puzzleContainer){

    let tiles = [];
    let emptyIndex = 8;

    function createPuzzle(){
        puzzleContainer.innerHTML = "";
        tiles = [];

        for(let i=0;i<9;i++){
            let tile = document.createElement("div");
            tile.classList.add("tile");

            if(i === 8){
                tile.classList.add("empty");
            } else {
                let row = Math.floor(i / 3);
                let col = i % 3;
                tile.style.backgroundPosition = `-${col*100}px -${row*100}px`;
                tile.addEventListener("click", () => moveTile(i));
            }

            tiles.push(tile);
            puzzleContainer.appendChild(tile);
        }
    }

    function moveTile(index){
        const validMoves = [
            emptyIndex - 1,
            emptyIndex + 1,
            emptyIndex - 3,
            emptyIndex + 3
        ];

        if(validMoves.includes(index)){
            puzzleContainer.insertBefore(tiles[index], tiles[emptyIndex]);
            [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
            emptyIndex = index;

            checkWin();
        }
    }

    function shuffle(){
        for(let i=0;i<100;i++){
            let randomIndex = Math.floor(Math.random()*9);
            moveTile(randomIndex);
        }
    }

    function checkWin(){
        for(let i=0;i<8;i++){
            if(tiles[i].style.backgroundPosition !== 
               `-${(i%3)*100}px -${Math.floor(i/3)*100}px`)
               return;
        }

        showMemoryMessage();
    }

    function showMemoryMessage(){
        const popup = document.createElement("div");

        popup.innerHTML = `
            💙 You know this is our 1st year photo  
            <br><br>
            That we took in my class  
            <br><br>
            And my most lovely picture 💕
        `;

        popup.style.position = "fixed";
        popup.style.top = "50%";
        popup.style.left = "50%";
        popup.style.transform = "translate(-50%, -50%)";
        popup.style.background = "rgba(0, 40, 80, 0.95)";
        popup.style.color = "#7ecbff";
        popup.style.padding = "50px";
        popup.style.borderRadius = "25px";
        popup.style.fontSize = "28px";
        popup.style.textAlign = "center";
        popup.style.boxShadow = "0 15px 40px rgba(0,0,0,0.8)";
        popup.style.zIndex = "9999";

        document.body.appendChild(popup);

        setTimeout(()=>{
            window.location.href = "page4.html";
        },5000);
    }

    createPuzzle();
    shuffle();
}

