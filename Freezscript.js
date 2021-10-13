let frozenArray = [];

class Frozen {
    constructor(x, y, size) {
       
        this.x = mouse.x;
        this.y = mouse.y;
        
        this.size = Math.random() * 8 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 5 - 1.5;
        this.color = 'hsl(188, 97%, 76%)';
     }
    update()
    {
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size >= 0.3) this.size -= 0.1;
    }
    draw()
    {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.filter = 'none';
        ctx.fill();
    }
}

function handleFrozen() 
{    
    if(model.hasGeneratedArray){
        for (let i = 0; i < frozenArray.length; i++){
            frozenArray[i].update();
            frozenArray[i].draw();
            if (frozenArray[i].size <= 1){
                frozenArray.splice(i, 1);
                i--;
            }
        }
        return;    
    }  
  

    frozenArray = [];
    model.hasGeneratedArray = true;

    // if(model.pressedBtn == "Frozen") return;

    canvas.addEventListener('mousemove',  function(event){
        mouse.x = event.x;
        mouse.y = event.y;
        for (let i = 0; i < 15; i++)
        frozenArray.push(new Frozen());
    });

    app.addEventListener('mousemove',  function(event){
        mouse.x = event.x;
        mouse.y = event.y;
        for (let i = 0; i < 15; i++)
        frozenArray.push(new Frozen());
    });
}