function addfunc() {
    var btn = document.createElement("button");
    btn.innerHTML = "Click Me!";
    btn.setAttribute("id", "btn");
    document.body.appendChild(btn);
};
function delfunc() {
    var btn = document.getElementById("btn");
    document.body.removeChild(btn);
}