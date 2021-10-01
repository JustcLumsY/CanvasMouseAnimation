function viewSelector() {
    let html = ``;
    html = navBar();
    
    const app = document.getElementById('app');
    // if (model.currentPage == 'Home') html += homeView();
    // else if (model.currentPage == 'About') html += aboutView();
    // else if (model.currentPage == 'Contact') html += contactView();
    // else { html += noPageFound(); }

    switch (model.currentPage) {
        case 'Home':
            html += homeView();
           break;
        case 'About':
            html += aboutView();
           break;
        case 'Contact':
            html += contactView();
            break;
        case 'Cart':
            html += cartInventory();
            break;
        default:
            html = noPageFound();  
    }
    app.innerHTML = html;
}


function navBar() {
    let html = /*html*/`
    <div id="navPageContainer">
    <div id="navPage">
    
    </div>
    </div>
    <button class="Btns" onclick="changeView('Home')">Home</button>
    <button class="Btns" onclick="changeView('About')">About</button>
    <button class="Btns" onclick="changeView('Contact')">Contact</button>
    
    <div class="search-container">
    <form action="/action_page.php">
      
      
     </div>
     
     
    
    `;
    
    return html;
}


{/* <button type="button" onclick="changeView('Cart')" class="cartBtn">Cart:${cartItemsNumber}</button>
<button type="button" onclick="clearCart()" class="clearCartBtn">Clear Cart</button> */}

function homeView() {
    
    let html = /*html*/`
    
    <div id="homeContainer">
    <div id="homeInnerContainer">
    <button class="BubblesBtn changeStyle" onclick='changeStyle("Bubbles")'>BUBBLES</button>
    <button class="FrozenBtn changeStyle" onclick='changeStyle("Frozen")'>FROZEN</button>
    <button class="changeStyle" onclick='changeBackground("Background")'>Something</button>
    <button class="PoppingBtn changeStyle" onclick='changeBackground("Background2")'>PoppingBUBBLES</button>
    
    </div>
    </div>
    
    `;
    
   
    return html;
    
}
{/* <button class="changeStyle"></button> */}
// onclick="AddtoCart(wares[0])"
{/* <input type="text" value="1" class="item_Quantity"></input> */}
{/* <select class="item_size">
    <option value="Small"> Small </option>
    <option value="Medium"> Medium </option>
    <option value="Large"> Large </option>
    </select> */}
    // <span class="warePlace1Sale">kr: 20.-</span>
{/* <div class="wareShelf">
    
    // <div id="warePlace1">
    // <img value="image1" alt="Tshirt" src="PLANDEMIC-15879067002119060680.png" class="item_thumb" />
    // <span class="item_name"> ${wares[0].description} </span>
    // <span class="item_price">kr: ${wares[0].price} </span>
    // <a class="item_add" > <input class ="InputBox" type="number" min="1" max="10" name="NumberInputBox" > </a>
    // <a class="item_add" onclick="AddtoCart(wares[0])"><span type="button" id="addToCartPlussIcon">&#43;</span> </a>
    // </div>
    

    // <div id="warePlace2">
    // <img value="image1" alt="Jeans" src="JeansModel.png" class="item_thumb" />
    // <span class="item_name"> ${wares[1].description} </span>
    // <span class="item_price">kr: ${wares[1].price} </span>
    // <a class="item_add" > <input class ="InputBox" type="number" min="1" max="10" name="NumberInputBox" > </a>
    // <a class="item_add" onclick="AddtoCart(wares[1])"><span type="button" id="addToCartPlussIcon">&#43;</span> </a>
    // </div>

    
    // </div>  */}
// function cartInventory(){

//     let html = /*html*/ 
//     `
// <div id="homeContainer">
//     <button id="ReturnHome" type="button" onclick="changeView('Home')"><-------</button>
//     <div id="cartInventoryContainer">
    
// </div>
//     `
    
//     for (let i = 0; i < model.shoppingCart.length; i++) {
//     html += `
//     <li>
    
//     <img class="shoppingCartImages" 
    
//     src="${model.shoppingCart[i].image}">
//     </br>
//         ${model.shoppingCart[i].description}
//     </br>
//         ${model.shoppingCart[i].price},- 
//     </li>

    
    
//     `;
//     }
//     `</div> 
//     `
//     return html;
// }

function contactView() {
    let html = /*html*/`
    <div id="homeContainer">
    <div id="homeInnerContainer">
    

    </div>
</div>
    `;
    return html;
}

function noPageFound() {
    let html = /*html*/`
    404! Page not found!`;
    return html;
}



