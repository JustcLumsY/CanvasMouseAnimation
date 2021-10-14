const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
console.log(ctx);

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

 //ctx.globalCompositeOperation = 'destination-over';
let hue = 0;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const mouse = {
    x: undefined,
    y: undefined,
}

function animate()
{
    
    if (model.pressedBtn == 'Bubbles') 
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleParticles();
    }; 

    if (model.pressedBtn == 'Shape')
    { 
       // ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleShape();
       
    };
    
    if (model.pressedBtn == 'Something') 
    {
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleFlames();
        
        
    };

    if (model.pressedBtn == 'Frozen') 
    {  
       
        
        //ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'rgba(0,0,0,0.01)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);        
        handleFrozen();
      
    };
    

    if (model.pressedBtn == 'Popping') 
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        createParticle();    
    };
    
    console.log(animate)
    hue+=2;
     requestAnimationFrame(animate);
    


  
}

