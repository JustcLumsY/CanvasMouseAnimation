const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;
// ctx.globalCompositeOperation = 'destination-over';
let hue = 0;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});


const mouse = {
    x: undefined,
    y: undefined,
}

function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}

//The rectangle should have x,y,width,height properties
var rect = {
    x:54,
    y:390,
    width:60,
    height:40
};
//Binding the click event on the canvas
canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt);
    
    if (isInside(mousePos,rect)) {
        alert('clicked inside rect');
    }else{
        // alert('clicked outside rect');
    }   
}, false);


//test BTN for å skifte style
function Playbutton(rect) {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.fillRect(54,390,60,40);
    ctx.fill(); 
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.closePath();
    
    
  }


let particleArray = [];
class Particle {
    constructor(x, y, size) {
        this.x = mouse.x;
        this.y = mouse.y;
        //this.x = Math.random() * canvas.width;
        //this.y = Math.random() * canvas.height;
        this.size = Math.random() * 6 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 5 - 1.5;
        this.color = 'hsl(' + hue + ', 100%, 50%';
     }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.2) this.size -= 0.1;
    }
    draw(){
        ctx.fillStyle = this.color;
        // ctx.strokeStyle ='red';
        // ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 26);
        ctx.fill();
        // ctx.stroke();
    }
}

canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 15; i++)
    particleArray.push(new Particle());

});

canvas.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    for (let i = 0; i < 55; i++)
    particleArray.push(new Particle());

})

function handleParticles(){
    for (let i = 0; i < particleArray.length; i++){
        particleArray[i].update();
        particleArray[i].draw();
        if (particleArray[i].size <= 1){
            particleArray.splice(i, 1);
            i--;
        }
    }
}



// function createParticle(){
    
//         let size = Math.random() * 5 + 20;
//         let x = canvas.height/2;
//         let y = canvas.width/2;
//         particleArray.push(new Particle(x, y, size));
    
// }


function animate(){
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    Playbutton();
    //ctx.fillStyle = 'rgba(,0,0,0,0.02)';
    //createParticle();
    handleParticles();
    console.log(animate)
    hue+=2;
    requestAnimationFrame(animate);
}
animate();