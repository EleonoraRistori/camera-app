function placeButton() {
    var cameraView = document.getElementById("camera--view")
    x_pos = Math.floor(Math.random() * (cameraView.offsetWidth + 1))
    y_pos = Math.floor(Math.random() * (cameraView.offsetHeight + 1))
    var d = document.getElementById('camera--trigger');
    d.style.position = "absolute";
    d.style.left = x_pos+'px';
    d.style.top = y_pos+'px';
    d.style.width = Math.floor(Math.random() * (200))+'px';
    d.style.height = Math.floor(Math.random() * (200))+'px';
}
const interval = setInterval(placeButton, 500);

