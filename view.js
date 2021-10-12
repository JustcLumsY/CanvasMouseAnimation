function viewSelector() {
    let html = ``;
    html = navBar();
    
    const app = document.getElementById('app');


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
    <button class="BubblesBtn buttons changeStyleBtn" data-number='0' onclick='changeStyle("Bubbles")'></button>
    <button class="FrozenBtn buttons changeStyleBtn" data-number='1' onclick='changeStyle("Frozen")'></button>
    <button class="changeStyleBtn buttons flameBtn" data-number='2' onclick='changeStyle("Flames")'></button>
    <button class="PoppingBtn buttons changeStyleBtn" data-number='3' onclick='changeStyle("Popping")'></button>
      

     
    
    `;
    
    return html;
}


function homeView() {
    
    let html = /*html*/`
    
    <div id="homeContainer">
        <div id="homeInnerContainer">

    
        </div>
    </div>
    
    `;
    
    
    return html;
    
}

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
























