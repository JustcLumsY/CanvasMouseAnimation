
function changeView(selectedPage){
    model.currentPage = selectedPage;

    viewSelector();
}


function changeStyle(changeBtn){
    model.pressedBtn = changeBtn;

}

function changeBackground(BackgroundBubbles){
    model.BackgroundBubbles = BackgroundBubbles;
}




// function AddtoCart(wares){
// //    console.log(wares)
//     cartItemsNumber++;
//     model.shoppingCart.push(wares)
//     viewSelector();

// }

// function clearCart(){
//     cartItemsNumber = 0;
//     model.shoppingCart = [];
//     viewSelector();
// }


// function LightDarkMode(){
//     var element = document.body;
//     element.classList.toggle("dark-mode");
// }
