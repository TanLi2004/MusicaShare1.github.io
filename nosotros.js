window.addEventListener('scroll', function() {
    var scrolled = window.scrollY;
    document.body.style.backgroundPositionY = -scrolled + 'px';
});