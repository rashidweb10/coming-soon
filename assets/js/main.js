  $(document).ready(function () {
    const launchDate = new Date("2025-12-31T00:00:00").getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      const d = Math.floor(distance / (1000 * 60 * 60 * 24));
      const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((distance % (1000 * 60)) / 1000);

      $('#days').text(d.toString().padStart(2, '0'));
      $('#hours').text(h.toString().padStart(2, '0'));
      $('#minutes').text(m.toString().padStart(2, '0'));
      $('#seconds').text(s.toString().padStart(2, '0'));

      if (distance < 0) {
        clearInterval(countdown);
        $('#countdown').html('<h2>🎉 We are Live!</h2>');
      }
    }, 1000);
  });

$(document).ready(function () {
    setTimeout(() => {
    $('#panel').addClass('active');
    }, 400);
});  

// Disable Right-Click
document.addEventListener('contextmenu', e => e.preventDefault());

// Disable common Inspect/View Source key combinations
document.onkeydown = function(e) {
if (
    e.keyCode == 123 || // F12
    (e.ctrlKey && e.shiftKey && e.keyCode == 73) || // Ctrl+Shift+I
    (e.ctrlKey && e.shiftKey && e.keyCode == 74) || // Ctrl+Shift+J
    (e.ctrlKey && e.keyCode == 85) || // Ctrl+U
    (e.ctrlKey && e.keyCode == 83) || // Ctrl+S
    (e.ctrlKey && e.keyCode == 67) || // Ctrl+C
    (e.ctrlKey && e.keyCode == 65) // Ctrl+A
) {
    return false;
}
};

// Detect DevTools open by window size difference
(function () {
const threshold = 160;
let check = setInterval(function () {
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    if (widthThreshold || heightThreshold) {
    document.body.innerHTML = "";
    clearInterval(check);
    }
}, 1000);
})();

// Disable copy/cut/paste/select
document.addEventListener('copy', e => e.preventDefault());
document.addEventListener('cut', e => e.preventDefault());
document.addEventListener('paste', e => e.preventDefault());
document.addEventListener('selectstart', e => e.preventDefault());