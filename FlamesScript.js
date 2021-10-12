let flamesArray = [];

class Flames {
    constructor (size) {

        this.x = mouse.x;
        this.y = mouse.y;
        //this.blur = 'blur(6px) contrast(2)';
        this.weight = Math.random() * 1.5 + 1.5;
        this.size = size;
        
        // this.speedX = Math.random() * 3 - 1.5;
        // this.speedY = Math.random() * 3 - 1.5;
        this.directionX = Math.random() * 2;
        
    }
    update(){
        this.y -= this.weight;
         this.x += this.directionX;
         if(this.size >= 0.3) this.size -= 0.2;

    }
    draw(){
    
        ctx.beginPath();
        ctx.fillStyle = 'red';
        //ctx.filter = this.blur;
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.filter = 'blur(6px) contrast(2)';
        ctx.fill(); 
       
    }  
}

function createFlames(){
        
    let size = Math.random() * 10 + 5;
    // let x = this.directionX;
    // let y = this.weight;
    flamesArray.push(new Flames(size));

}
function handleFlames(){ 

    if(model.hasGeneratedArray){
        for (let i = 0; i < flamesArray.length; i++){
            flamesArray[i].update();
            flamesArray[i].draw();
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
            for (let i = 0; i < 5; i++)
            flamesArray.push(new Flames());
        });
    
        app.addEventListener('mousemove', function(event){
            mouse.x = event.x;
            mouse.y = event.y;
            for (let i = 0; i < 5; i++)
            flamesArray.push(new Flames());
        });
}



