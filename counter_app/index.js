let a = 0;
function increase() {
    a++;
    document.getElementById("Count").innerText = a;
    console.log("Button clicked");
}

function save() {
    console.log(a)
}