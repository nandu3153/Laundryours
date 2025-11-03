// Simple client-side include loader for footer component
(function () {
  function loadIncludes() {
    var placeholders = document.querySelectorAll('[data-include]');
    placeholders.forEach(function (el) {
      var url = el.getAttribute('data-include');
      if (!url) return;
      fetch(url)
        .then(function (res) {
          if (!res.ok) throw new Error('Network response was not ok');
          return res.text();
        })
        .then(function (html) {
          el.innerHTML = html;
          // Optionally run any init code here (e.g., re-run AOS)
          if (window.AOS && typeof window.AOS.refresh === 'function') {
            window.AOS.refresh();
          }
        })
        .catch(function (err) {
          // For local development with file:// the fetch will fail — show simple fallback
          console.warn('Failed to load include:', url, err);
        });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadIncludes);
  } else {
    loadIncludes();
  }
})();
