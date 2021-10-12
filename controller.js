
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
    




