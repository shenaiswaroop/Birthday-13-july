// ===== MATRIX RAIN =====
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const chars = letters.split("");

const fontSize = 16;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#00ff99";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(drawMatrix, 35);

// ===== TYPING EFFECT =====
const typing = document.getElementById("typing");

const lines = [
    "> Initializing Birthday.exe...",
    "> Loading Developer Mode...",
    "> Compiling Memories...",
    "> Happy Birthday Utkarshaa ❤️"
];

let line = 0;
let ch = 0;

function type() {
    if (line < lines.length) {
        if (ch < lines[line].length) {
            typing.innerHTML += lines[line].charAt(ch);
            ch++;
            setTimeout(type, 40);
        } else {
            typing.innerHTML += "<br>";
            line++;
            ch = 0;
            setTimeout(type, 400);
        }
    }
}

type();

// ===== BUTTON =====
document.getElementById("startBtn").onclick = function () {
    alert("🎉 Happy Birthday Utkarshaa ❤️\n\nFrom Swaroop");
};


// ===== RESIZE =====
window.onresize = function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
};
// ===== Boot Screen =====

const bootLines=[
"Initializing Birthday.exe...",
"Loading Memories...",
"Connecting to Utkarshaa...",
"Launching Celebration..."
];

const bootText=document.getElementById("bootText");
const progress=document.getElementById("progressBar");

let bootIndex=0;
let percent=0;

function boot(){

if(bootIndex < bootLines.length){
    bootText.innerHTML = bootLines[bootIndex];
    bootIndex++;
}

percent+=2;

progress.style.width=percent+"%";

if(percent>=100){

clearInterval(loader);

document.getElementById("bootScreen").style.display="none";

}

}

const loader=setInterval(boot,120);
// ===== Simple Fireworks =====

const fireCanvas = document.getElementById("fireworks");
const fireCtx = fireCanvas.getContext("2d");

fireCanvas.width = window.innerWidth;
fireCanvas.height = window.innerHeight;

let particles = [];

function createFirework(){

    const x = Math.random()*fireCanvas.width;
    const y = Math.random()*fireCanvas.height/2;

    for(let i=0;i<50;i++){

        particles.push({

            x:x,
            y:y,

            dx:(Math.random()-0.5)*8,

            dy:(Math.random()-0.5)*8,

            life:100

        });

    }

}

function animateFireworks(){

    fireCtx.clearRect(0,0,fireCanvas.width,fireCanvas.height);

    particles.forEach((p,index)=>{

        p.x+=p.dx;
        p.y+=p.dy;

        p.life--;

        fireCtx.beginPath();

        fireCtx.arc(p.x,p.y,2,0,Math.PI*2);

        fireCtx.fillStyle="hsl("+Math.random()*360+",100%,60%)";

        fireCtx.fill();

        if(p.life<=0){

            particles.splice(index,1);

        }

    });

    requestAnimationFrame(animateFireworks);

}

animateFireworks();
const music = document.getElementById("bgMusic");
document.getElementById("startBtn").addEventListener("click",()=>{
music.play().catch(()=>{});
    createFirework();

});
// =========================
// FLOATING HEARTS
// =========================

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * window.innerWidth + "px";

    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 9000);
}

setInterval(createHeart, 350);
// ===== Digital Clock =====

function updateClock(){

    const now = new Date();

    let h = String(now.getHours()).padStart(2,'0');
    let m = String(now.getMinutes()).padStart(2,'0');
    let s = String(now.getSeconds()).padStart(2,'0');

    document.getElementById("clock").innerHTML =
    `${h}:${m}:${s}`;

}

setInterval(updateClock,1000);

updateClock();
const gift = document.getElementById("giftBox");

const unlock = document.getElementById("unlockText");

const secret = document.getElementById("secretMessage");

const message = `Dear Utkarshaa,

I don't know what the future holds,
I don't know where life will take us,
and I don't know whether we'll always stay in touch.

But I know one thing...

Meeting you was one of the beautiful parts of my journey.

You deserve happiness,
success,
peace,
and all the beautiful things life can offer.

Never stop smiling,
because your smile has the power to brighten someone's day.

Happy Birthday, Utkarshaa ❤️

From someone
who will always wish
the best for you.

— Swaroop ❤️`;

gift.onclick = function(){

    document.getElementById("giftMessage").style.display="block";

    gift.style.display="none";

    createFirework();

    unlock.innerHTML =
`Access Granted...<br>
Decrypting Secret Message...<br>
████████████ 100%<br><br>
Message Unlocked ❤️`;

    setTimeout(()=>{

        unlock.innerHTML = "";

secret.innerHTML = "";

let i = 0;
        function typeMessage(){

            if(i<message.length){

                secret.innerHTML +=
message.charAt(i) === "\n"
? "<br>"
: message.charAt(i);

                i++;

                setTimeout(typeMessage,35);

            }

        }

        typeMessage();

    },2500);

};
