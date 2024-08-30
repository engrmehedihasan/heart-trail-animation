const bodyEL = document.querySelector("body")

bodyEL.addEventListener("mousemove", (event)=> {
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEL = document.createElement("span");
    spanEL.style.left = xPos + "px";
    spanEL.style.top = yPos + "px";
    const size = Math.random() * 100; 
    spanEL.style.width = size + "px";
    spanEL.style.height = size + "px";
    bodyEL.appendChild(spanEL);
    setTimeout(() => {
        spanEL.remove();
    }, 3000);
});
//https://cdn4.iconfinder.com/data/icons/new-year-christmas-nativity-xmas-noel-yule/192/.svg-2-512.png
//background: url("https://cdn4.iconfinder.com/data/icons/general-office/91/General_Office_54-512.png");
