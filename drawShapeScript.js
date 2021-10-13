const radius = 130;
const inset = 0.5;
const n = 6;


ctx.fillStyle = '';
ctx.lineWidth = 10;
ctx.strokeStyle = 'lightblue';
// ctx.shadowOffsetX = 2;
// ctx.shadowOffsetY = 2; 
// ctx.shadowBlur = 6;
ctx.shadowColor = 'black';
ctx.globalCompositeOperation = '';
function drawShape(x, y, radius, inset, n){
    ctx.beginPath();
    ctx.save();
    ctx.translate(x, y);
    ctx.moveTo(0, 0 - radius);
    for (let i = 0; i < n; i++){
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - (radius * inset));
        ctx.rotate(Math.PI / n);
        ctx.lineTo(0, 0 - radius);
    }



    ctx.restore();
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
 
}




// canvas.addEventListener('mousemove', function(e){
//     drawShape(e.x, e.y, radius, inset, n);
// });
// app.addEventListener('mousemove', function(e){
//      drawShape(e.x, e.y, radius, inset, n);
// });