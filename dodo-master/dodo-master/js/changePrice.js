let buttons = document.getElementsByClassName("btn-add-to-cart");
let prices = document.getElementsByClassName("item-price");

let values = [];

var cnt = 0;

for (let val of buttons) {
    values[cnt] = val.innerHTML;
    cnt++;
}

if (window.innerWidth <= 320) {
    cnt = 0;
    for (let btn of buttons) {
        btn.innerHTML = prices[cnt].innerHTML;
        cnt++;
    }
}

window.addEventListener("resize", function(){  
    cnt = 0;
    if (window.innerWidth <= 320) {
        for (let btn of buttons) {
            btn.innerHTML = prices[cnt].innerHTML;
            cnt++;
        }
    }
    if (window.innerWidth >= 321) {
        cnt = 0;
        for (let btn of buttons) {
            btn.innerHTML= values[cnt];
            cnt++;
        }
    }
}, false);