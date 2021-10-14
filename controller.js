
function changeView(selectedPage){
    model.currentPage = selectedPage;

    viewSelector();
}



var isAnimateTrue = false;

function changeStyle(changeBtn){
    
    if(model.pressedBtn == changeBtn)
        return;

    model.hasGeneratedArray = false;
    model.pressedBtn = changeBtn;    

   if(isAnimateTrue != true) {
       isAnimateTrue = true;
     
        animate();
    }
    
}


function resetCtx() 
{
    ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.shadowBlur = 0;
        ctx.shadowColor = 0;
        ctx.filter = 'none';
        ctx.fillStyle = 0;
        ctx.lineWidth = 0;
        ctx.strokeStyle = '';
        // ctx.this.color = '';
        ctx.globalCompositeOperation = 'source-over'; //Source-over er Default. (Default. Displays the source image over the destination image)
       
     
    
     

     
}


// source-over	Default. Displays the source image over the destination image	
// source-atop	Displays the source image on top of the destination image. The part of the source image that is outside the destination image is not shown	
// source-in	Displays the source image in to the destination image. Only the part of the source image that is INSIDE the destination image is shown, and the destination image is transparent	
// source-out	Displays the source image out of the destination image. Only the part of the source image that is OUTSIDE the destination image is shown, and the destination image is transparent	
// destination-over	Displays the destination image over the source image	
// destination-atop	Displays the destination image on top of the source image. The part of the destination image that is outside the source image is not shown	
// destination-in	Displays the destination image in to the source image. Only the part of the destination image that is INSIDE the source image is shown, and the source image is transparent	
// destination-out	Displays the destination image out of the source image. Only the part of the destination image that is OUTSIDE the source image is shown, and the source image is transparent	
// lighter	Displays the source image + the destination image	
// copy	Displays the source image. The destination image is ignored	
// xor	The source image is combined by using an exclusive OR with the destination image



