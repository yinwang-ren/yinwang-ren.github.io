(function () {
  var STORAGE_KEY = 'site-lang';

  function setLang(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    localStorage.setItem(STORAGE_KEY, lang);

    var enBlocks = document.querySelectorAll('.lang-en');
    var zhBlocks = document.querySelectorAll('.lang-zh');

    for (var i = 0; i < enBlocks.length; i++) {
      enBlocks[i].style.display = lang === 'en' ? '' : 'none';
    }
    for (var i = 0; i < zhBlocks.length; i++) {
      zhBlocks[i].style.display = lang === 'zh' ? '' : 'none';
    }

    var btn = document.getElementById('lang-toggle-btn');
    if (btn) {
      btn.textContent = lang === 'en' ? '中文' : 'EN';
      btn.setAttribute('title', lang === 'en' ? 'Switch to Chinese' : 'Switch to English');
    }

    var navLinks = document.querySelectorAll('[data-nav-en]');
    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].textContent = lang === 'en'
        ? navLinks[i].getAttribute('data-nav-en')
        : navLinks[i].getAttribute('data-nav-zh');
    }
  }

  function init() {
    var saved = localStorage.getItem(STORAGE_KEY) || 'en';
    setLang(saved);

    var btn = document.getElementById('lang-toggle-btn');
    if (btn) {
      btn.addEventListener('click', function () {
        var current = localStorage.getItem(STORAGE_KEY) || 'en';
        setLang(current === 'en' ? 'zh' : 'en');
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
