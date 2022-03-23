var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (event) {

  if (event.target.matches('.tab')) {

    for (var i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === event.target) {
        $tabs[i].className = 'tab active';
      } else if ($tabs[i] !== event.target) {
        $tabs[i].className = 'tab';
      }
    }

    var dataViewAttr = event.target.getAttribute('data-view');

    for (var v = 0; v < $views.length; v++) {
      var viewsAttr = $views[v].getAttribute('data-view');
      if (viewsAttr === dataViewAttr) {
        $views[v].className = 'view';
      } else {
        $views[v].className = 'view hidden';
      }
    }
  }
});
