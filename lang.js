/* Shared language + dark mode system for Portfolio_V2 */
(function(){
  // Dark mode
  var DARK_KEY = 'portfolio-dark';
  var darkPref = localStorage.getItem(DARK_KEY);
  if (darkPref === 'true') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // Language
  var LANG_KEY = 'portfolio-lang';
  var current = localStorage.getItem(LANG_KEY) || document.documentElement.getAttribute('data-default-lang') || 'en';

  function applyLang(lang) {
    document.documentElement.setAttribute('lang', lang);
    current = lang;
    localStorage.setItem(LANG_KEY, lang);

    var all = document.querySelectorAll('[data-lang]');
    for (var i = 0; i < all.length; i++) {
      if (all[i].getAttribute('data-lang') === lang) {
        all[i].classList.add('active');
      } else {
        all[i].classList.remove('active');
      }
    }

    var selects = document.querySelectorAll('#lang-switch');
    for (var j = 0; j < selects.length; j++) {
      selects[j].value = lang;
    }
  }

  document.addEventListener('change', function(e) {
    if (e.target && e.target.id === 'lang-switch') {
      applyLang(e.target.value);
    }
  });

  // Dark mode toggle
  document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'dark-toggle') {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem(DARK_KEY, 'false');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem(DARK_KEY, 'true');
      }
      e.target.textContent = isDark ? '🌙' : '☀️';
    }
  });

  function updateDarkBtn() {
    var btn = document.getElementById('dark-toggle');
    if (btn) {
      var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      btn.textContent = isDark ? '☀️' : '🌙';
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    applyLang(current);
    updateDarkBtn();
  });

  if (document.readyState !== 'loading') {
    applyLang(current);
    updateDarkBtn();
  }
})();
