var color;
function take_input() {
    color = document.getElementById("input").value;
    change_color(color);
}

function random_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    color = "rgb(" + x + "," + y + "," + z + ")";
    change_color(color);
}

function change_color(color) {
    document.body.style.backgroundColor = color;
}