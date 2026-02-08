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
   PROPER WORKING PUZZLE
========================= */
document.addEventListener("DOMContentLoaded", function() {

    const puzzle = document.getElementById("puzzle");
    
    if (puzzle) {
    
        const image = "2016.jpeg";
        const size = 3;
        let tiles = [];
        let firstTile = null;
    
        function createTiles() {
            puzzle.innerHTML = "";
            tiles = [];
    
            for (let i = 0; i < size * size; i++) {
                let tile = document.createElement("div");
                tile.className = "tile";
                tile.dataset.index = i;
    
                let row = Math.floor(i / size);
                let col = i % size;
    
                tile.style.backgroundImage = `url(${image})`;
                tile.style.backgroundSize = "300px 300px";
                tile.style.backgroundPosition = `-${col * 100}px -${row * 100}px`;
    
                tile.addEventListener("click", handleClick);
    
                tiles.push(tile);
            }
    
            shuffleTiles();
            tiles.forEach(tile => puzzle.appendChild(tile));
        }
    
        function shuffleTiles() {
            for (let i = tiles.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
            }
        }
    
        function handleClick() {
            if (!firstTile) {
                firstTile = this;
                this.style.outline = "3px solid #7ecbff";
            } else {
                swapTiles(firstTile, this);
                firstTile.style.outline = "none";
                firstTile = null;
                checkWin();
            }
        }
    
        function swapTiles(tile1, tile2) {
            const parent = puzzle;
            const tile1Index = Array.from(parent.children).indexOf(tile1);
            const tile2Index = Array.from(parent.children).indexOf(tile2);
    
            if (tile1Index < tile2Index) {
                parent.insertBefore(tile2, tile1);
                parent.insertBefore(tile1, parent.children[tile2Index]);
            } else {
                parent.insertBefore(tile1, tile2);
                parent.insertBefore(tile2, parent.children[tile1Index]);
            }
        }
    
        function checkWin() {
            const currentTiles = Array.from(puzzle.children);
    
            for (let i = 0; i < currentTiles.length; i++) {
                if (currentTiles[i].dataset.index != i) {
                    return;
                }
            }
    
            showMemoryMessage();
        }
    
        function showMemoryMessage() {
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
    
            setTimeout(() => {
                window.location.href = "page4.html";
            }, 5000);
        }
    
        createTiles();
    }
    
    });
    

