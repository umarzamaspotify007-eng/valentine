{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx566\tx1133\tx1700\tx2267\tx2834\tx3401\tx3968\tx4535\tx5102\tx5669\tx6236\tx6803\pardirnatural\partightenfactor0

\f0\fs24 \cf0 /* BACKGROUND SLIDESHOW */\
const images = [\
"bg1.jpg",\
"bg2.jpg",\
"bg3.jpg",\
"bg4.jpg",\
"bg5.jpg",\
"bg6.jpg",\
"bg7.jpg",\
"bg8.jpg",\
"bg9.jpg",\
"bg10.jpg"\
];\
\
let index = 0;\
const bg = document.getElementById("background");\
\
function changeBackground()\{\
    bg.style.backgroundImage = `url($\{images[index]\})`;\
    index = (index + 1) % images.length;\
\}\
\
setInterval(changeBackground, 3000);\
changeBackground();\
\
\
/* FLOATING HEARTS */\
function createHeart()\{\
    const heart = document.createElement("div");\
    heart.className = "heart";\
    heart.innerHTML = "\uc0\u10084 \u65039 ";\
    heart.style.left = Math.random()*100 + "vw";\
    heart.style.fontSize = (Math.random()*20+15)+"px";\
    document.body.appendChild(heart);\
\
    setTimeout(()=>heart.remove(),6000);\
\}\
\
setInterval(createHeart, 300);\
\
\
/* RUNNING NO BUTTON */\
const noBtn = document.getElementById("no");\
\
noBtn.addEventListener("mouseover", ()=>\{\
    const x = Math.random()*(window.innerWidth-100);\
    const y = Math.random()*(window.innerHeight-50);\
\
    noBtn.style.position = "absolute";\
    noBtn.style.left = x+"px";\
    noBtn.style.top = y+"px";\
\});\
\
\
/* YES BUTTON */\
document.getElementById("yes").onclick = ()=>\{\
    document.getElementById("question").style.display="none";\
    document.getElementById("result").style.display="block";\
\};\
}