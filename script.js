const images = [
"bg1.jpeg","bg2.jpeg","bg3.jpeg","bg4.jpeg","bg5.jpeg",
"bg6.jpeg","bg7.jpeg","bg8.jpeg","bg9.jpeg","bg10.jpeg"
];

let index=0;
const bg=document.getElementById("background");

function changeBackground(){
    if(bg){
        bg.style.backgroundImage="url('"+images[index]+"')";
        index=(index+1)%images.length;
    }
}
setInterval(changeBackground,3000);
changeBackground();

function createHeart(){
    const heart=document.createElement("div");
    heart.className="heart";
    heart.innerHTML="❤️";
    heart.style.left=Math.random()*100+"vw";
    heart.style.fontSize=(Math.random()*20+15)+"px";
    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),6000);
}
setInterval(createHeart,300);

const noBtn=document.getElementById("no");
if(noBtn){
    noBtn.addEventListener("mouseover",()=>{
        const x=Math.random()*(window.innerWidth-100);
        const y=Math.random()*(window.innerHeight-50);
        noBtn.style.position="absolute";
        noBtn.style.left=x+"px";
        noBtn.style.top=y+"px";
    });
}

const yesBtn=document.getElementById("yes");
if(yesBtn){
    yesBtn.onclick=()=>{
        document.getElementById("question").style.display="none";
        document.getElementById("result").style.display="block";
    };
}
