//window.onresize = getViewportSize;

window.addEventListener('resize', getViewportSize);
document.addEventListener('DOMContentLoaded', getViewportSize);

function getViewportSize () {
  var viewportWidth  = document.documentElement.clientWidth
    , viewportHeight = document.documentElement.clientHeight;

  arr = document.getElementsByClassName('box');

  for (var i = arr.length - 1; i >= 0; i--) {
    arr[i].textContent = viewportHeight + " x " + viewportWidth;
  }

}