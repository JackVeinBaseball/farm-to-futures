document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.filter-btn');
  var rows = document.querySelectorAll('.post-row');

  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var filter = btn.getAttribute('data-filter');

      rows.forEach(function (row) {
        var cat = row.getAttribute('data-cat');
        row.style.display = (filter === 'all' || cat === filter) ? '' : 'none';
      });
    });
  });
});
