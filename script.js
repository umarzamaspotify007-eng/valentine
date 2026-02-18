/* BACKGROUND SLIDESHOW */
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


/* FLOATING HEARTS */
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


/* NO BUTTON (stays near YES button) */
const noBtn=document.getElementById("no");
const yesBtn=document.getElementById("yes");

if(noBtn && yesBtn){
    noBtn.addEventListener("mouseover",()=>{

        const yesRect = yesBtn.getBoundingClientRect();

        const range = 130;

        const offsetX = (Math.random()*range*2)-range;
        const offsetY = (Math.random()*range*2)-range;

        let newX = yesRect.left + offsetX;
        let newY = yesRect.top + offsetY;

        newX = Math.max(10, Math.min(window.innerWidth-120, newX));
        newY = Math.max(10, Math.min(window.innerHeight-60, newY));

        noBtn.style.position="fixed";
        noBtn.style.left=newX+"px";
        noBtn.style.top=newY+"px";
    });
}


/* YES BUTTON RESULT */
const result=document.getElementById("result");
const question=document.getElementById("question");

if(yesBtn){
    yesBtn.onclick=()=>{
        question.style.display="none";
        result.style.display="block";
    };
}

