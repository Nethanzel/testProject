let rotate = document.getElementById("gBackground");
let body = document.getElementById("body");
let x = 0;

function elRotate() {
    x += 90

    if(x > 360) {
        x = 0;
    }
    rotate.style.transform = `rotate(${x}deg)`;
}

 setInterval(() => {elRotate()}, 3000);

let links = document.getElementsByTagName("a")

for (let x = 0; x < links.length; x++) {
    links[x].addEventListener("click", (e) => {
        e.preventDefault()
        x += 90
        if(x > 360) {
             x = 0;
        }
        rotate.style.transform = `rotate(${x}deg)`;
    
    })
}