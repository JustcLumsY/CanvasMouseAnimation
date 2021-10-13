let flamesArray = [];

class Flames {
    constructor (size) {

        this.x = mouse.x;
        this.y = mouse.y;
       // this.blur = 'blur(3px) contrast(2)'; 
        this.weight = Math.random() * 2.5 + 2.5;
        this.size = size;
        this.color = 'hsl(' + hue + ', 100%, 50%';
        // this.speedX = Math.random() * 3 - 1.5;
        // this.speedY = Math.random() * 3 - 1.5;
        this.directionX = Math.random() * 5;
        
    }
    updateFlames(){
        
         this.y -= this.weight;
         this.x += this.directionX;
         if(this.size >= 0.3) this.size -= 0.1;

    }
    drawFlames(){
    
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = this.color;
       // ctx.filter = this.blur;
        ctx.fill(); 
       
    }  
}
//canvas.style.webkitfilter = "blur(2)";

function handleFlames(){ 

    if(model.hasGeneratedArray){
        for (let i = 0; i < flamesArray.length; i++){
            flamesArray[i].updateFlames();
            flamesArray[i].drawFlames();
            if (flamesArray[i].size <= 1){
                    flamesArray.splice(i, 1);
                    i--;
                }
            }
            return;    
      }  
    
        flamesArray = [];  
        model.hasGeneratedArray = true;

          //if(model.pressedBtn == "Flames") return;

        canvas.addEventListener('mousemove', function(event){
            mouse.x = event.x;
            mouse.y = event.y;
            for (let i = 0; i < 15; i++)
            flamesArray.push(new Flames());
        });
    
        app.addEventListener('mousemove', function(event){
            mouse.x = event.x;
            mouse.y = event.y;
            for (let i = 0; i < 15; i++)
            flamesArray.push(new Flames());
        });
}

function createFlames(){
        
    let size = Math.random() * 30 + 5;
    // let x = this.directionX;
    // let y = this.weight;
    flamesArray.push(new Flames(size));

}

