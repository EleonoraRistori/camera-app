// Set constraints for the video stream
var constraints = { video: { facingMode: "environment" }, audio: false, zoom: true};
// Define constants
const cameraView = document.querySelector("#camera--view")

// Access the device camera and stream to cameraView
function cameraStart() {
    navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function(stream) {
            track = stream.getTracks()[0];
            cameraView.srcObject = stream;
            const settings = track.getSettings();
        })
        .catch(function(error) {
            console.error("Oops. Something is broken.", error);
        });
}
// Take a picture when cameraTrigger is tapped

// Start the video stream when the window loads
window.addEventListener("load", cameraStart, false);
