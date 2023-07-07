let saveEl = document.getElementById("sav");
let incEl = document.getElementById("nm");
let count = 0;

function incr(){
    count += 1;
    incEl.textContent = count;
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    incEl.textContent = 0
    count = 0
}