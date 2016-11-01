var constraints = {
  video: {
    mandatory: {
      maxWidth: 640,
      maxHeight: 360
    }
  }
};

function successCallback(stream) {
  window.stream = stream; // stream available to console
  var video = document.querySelector("video");
  video.src = window.URL.createObjectURL(stream);
  video.play();
}

function errorCallback(error){
  console.log("getUserMedia error: ", error);
}

navigator.getUserMedia(constraints, successCallback, errorCallback);