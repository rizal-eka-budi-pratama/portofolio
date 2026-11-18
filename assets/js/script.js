
$(window).on('scroll', function () {
  if ($(this).scrollTop() > 10) {
    $('.navbar').addClass('scrolled');
  } else {
    $('.navbar').removeClass('scrolled');
  }
});

$(document).ready(function () {
  $('#menu-toggle').on('click', function () {
    const expanded = $(this).attr('aria-expanded') === 'true';

    $('#nav-menu').toggleClass('active');
    $(this).attr('aria-expanded', !expanded);
  });

  $('.nav-link').on('click', function () {
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    $('#nav-menu').removeClass('active');
    $('#menu-toggle').attr('aria-expanded', 'false');
  });
});

$(document).on('click', function (e) {
  if (
    !$(e.target).closest('.navbar').length
  ) {
    $('#nav-menu').removeClass('active');
    $('#menu-toggle').attr('aria-expanded', 'false');
  }
});


$(document).ready(function () {
  const revealElements = [
    '.section-heading',
    '.about-image',
    '.about-content',
    '.skill-category',
    '.project-card',
    '.projects-footer',
    '.contact-content',
    '.contact-form-wrapper'
  ];

  $(revealElements.join(',')).addClass('reveal');
  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    }
  );

  document.querySelectorAll('.reveal').forEach(function (element) {
    observer.observe(element);
  });

});
