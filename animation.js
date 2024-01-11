document.addEventListener('DOMContentLoaded', function() {
  var containers = document.querySelectorAll('.container');

  function a() {
    containers.forEach(function(container) {
      var bounding = container.getBoundingClientRect();
      if (
        bounding.top >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        container.classList.add('in-view');
      } else {
        container.classList.remove('in-view');
      }
    });
  }

  window.addEventListener('scroll', a);
  window.addEventListener('resize', a);

  a;
});
