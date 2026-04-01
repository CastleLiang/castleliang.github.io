(function () {
  function initCfpTimeline() {
    var roots = document.querySelectorAll('[data-cfp-timeline]');

    roots.forEach(function (root) {
      var triggers = root.querySelectorAll('[data-cfp-trigger]');

      function closeAll() {
        triggers.forEach(function (trigger) {
          var targetId = trigger.getAttribute('data-cfp-target');
          var popover = targetId ? root.querySelector('#' + targetId) : null;
          trigger.setAttribute('aria-expanded', 'false');
          if (popover) {
            popover.hidden = true;
          }
        });
      }

      triggers.forEach(function (trigger) {
        trigger.addEventListener('click', function (event) {
          event.stopPropagation();

          var targetId = trigger.getAttribute('data-cfp-target');
          var popover = targetId ? root.querySelector('#' + targetId) : null;
          var isOpen = trigger.getAttribute('aria-expanded') === 'true';

          closeAll();

          if (!isOpen && popover) {
            trigger.setAttribute('aria-expanded', 'true');
            popover.hidden = false;
          }
        });
      });

      document.addEventListener('click', function (event) {
        if (!root.contains(event.target)) {
          closeAll();
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCfpTimeline);
  } else {
    initCfpTimeline();
  }
})();
