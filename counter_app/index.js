let saveEl = document.getElementById("save-el");
let totalEl = document.getElementById("total-el");
let count = 0;
let total = 0;
function increase() {
    count++;
    document.getElementById("Count").innerText = count;
    console.log("Button clicked");
}

function save() {
    // console.log(count)
    let record = count + " - "
    saveEl.textContent += record;
   
        total +=count;
    totalEl.innerText = total;
    count = 0;
    document.getElementById("Count").innerText = count;
}