(function () {
  'use strict';

  /* Mobile nav toggle */
  var burger = document.getElementById('nav-burger');
  var links = document.getElementById('nav-links');

  if (burger && links) {
    burger.addEventListener('click', function () {
      var isOpen = links.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* Scroll-spy active nav link */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.nav__links a[href^="#"]');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.getAttribute('id');
            navLinks.forEach(function (link) {
              link.classList.toggle('active', link.getAttribute('href') === '#' + id);
            });
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px' }
    );
    sections.forEach(function (section) { spy.observe(section); });
  }
})();
