const radius = 40;
const inset = 1.5;
const n = 10;

function drawShape(x, y, radius, inset, n)
{
    
    ctx.fillStyle = '';
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'lightblue';
    // ctx.shadowOffsetX = 2;
    // ctx.shadowOffsetY = 2; 
    // ctx.shadowBlur = 6;
    
    ctx.shadowColor = 'black';
    ctx.beginPath();
    ctx.save();
    ctx.translate(x, y);
    ctx.moveTo(0, 0 - radius);
    
    if(model.pressedBtn == 'Shape')
    {    
    for (let i = 0; i < n; i++)
        {
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - (radius * inset));
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - radius);
        }
    }
    ctx.restore();
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function handleShape()
{
  
    canvas.addEventListener('mousemove', function(e)
    {
      
        drawShape(e.x, e.y, radius, inset, n);
    });
    
    app.addEventListener('mousemove', function(e)
    {
        
         drawShape(e.x, e.y, radius, inset, n);
    });
    
}


