//window.onresize = getViewportSize;

window.addEventListener('resize', getViewportSize);
document.addEventListener('DOMContentLoaded', getViewportSize);

document.addEventListener('DOMContentLoaded', function () {
  arr = document.getElementsByClassName('box');

  for (var i = arr.length - 1; i >= 0; i--) {
    arr[i].addEventListener('mouseover', function () {
      this.id += this.id ? ' busey' : 'busey';
    }, false);

    arr[i].addEventListener('mouseleave', function () {
      this.id = this.id.replace(/busey/, '');
    }, false);
  }

})

function getViewportSize () {
  var viewportWidth  = document.documentElement.clientWidth
    , viewportHeight = document.documentElement.clientHeight;

  arr = document.getElementsByClassName('box');

  for (var i = arr.length - 1; i >= 0; i--) {
    arr[i].textContent = viewportHeight + " x " + viewportWidth;
  }

}