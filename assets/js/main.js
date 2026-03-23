var NAV_HTML = `<nav>
  <a href="/" class="nav-logo"><img src="/assets/images/blueprint-logo.png" alt="Blueprint" height="40" style="display:block;"></a>
  <ul class="nav-links">
    <li>
      <button class="nav-dropdown-trigger" onclick="toggleDropdown('dd-serve')">
        Who we serve
        <svg class="nav-chevron" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M2 4l4 4 4-4"/></svg>
      </button>
      <div class="nav-dropdown" id="dd-serve">
        <div class="nav-dropdown-label">Capital Stewards</div>
        <a href="/investors/"><span class="dd-title">Investors &amp; Foundations</span><span class="dd-sub">DAFs, family offices, individual investors</span></a>
        <a href="/fund-managers/"><span class="dd-title">Fund Managers</span><span class="dd-sub">Impact funds &amp; movement finance vehicles</span></a>
        <a href="/advisors/"><span class="dd-title">Advisors</span><span class="dd-sub">RIA's &amp; impact advisors</span></a>
        <hr>
        <div class="nav-dropdown-label">Community</div>
        <a href="/community-stewards/"><span class="dd-title">Community Stewards</span><span class="dd-sub">Nonprofits, cooperatives &amp; CDFIs</span></a>
        <hr>
        <div class="nav-dropdown-label">Networks</div>
        <a href="/ecosystem-builders/"><span class="dd-title">Ecosystem Builders</span><span class="dd-sub">Networks, Coalitions &amp; Advocacy Orgs</span></a>
      </div>
    </li>
    <li><a href="/about/">About</a></li>
  </ul>
  <div class="nav-actions">
    <a href="https://investor.blueprintcollaborative.org/organizations" class="btn-ghost">Log in</a>
    <a href="/request-access/" class="btn-primary">Request access</a>
    <button class="nav-hamburger" id="nav-hamburger" aria-label="Open menu" onclick="toggleMobileNav()">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>`;

(function () {
  var placeholder = document.getElementById('site-nav');
  if (placeholder) placeholder.outerHTML = NAV_HTML;

  function closeAllDropdowns() {
    document.querySelectorAll('.nav-dropdown').forEach(function (dropdown) {
      dropdown.classList.remove('open');
    });
    document.querySelectorAll('.nav-dropdown-trigger').forEach(function (trigger) {
      trigger.classList.remove('open');
    });
  }

  function toggleDropdown(id) {
    var target = document.getElementById(id);
    if (!target) return;

    var isOpen = target.classList.contains('open');
    closeAllDropdowns();

    if (!isOpen) {
      target.classList.add('open');
      if (target.previousElementSibling) {
        target.previousElementSibling.classList.add('open');
      }
    }
  }

  function toggleMobileNav() {
    var links = document.querySelector('.nav-links');
    var btn = document.getElementById('nav-hamburger');
    if (!links || !btn) return;

    var isOpen = links.classList.contains('mobile-open');
    links.classList.toggle('mobile-open', !isOpen);
    btn.classList.toggle('open', !isOpen);
    btn.setAttribute('aria-label', isOpen ? 'Open menu' : 'Close menu');
  }

  window.toggleDropdown = toggleDropdown;
  window.toggleMobileNav = toggleMobileNav;

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-links li')) {
      closeAllDropdowns();
    }
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('nav')) {
      var links = document.querySelector('.nav-links');
      var btn = document.getElementById('nav-hamburger');
      if (links) links.classList.remove('mobile-open');
      if (btn) btn.classList.remove('open');
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
      var links = document.querySelector('.nav-links');
      var btn = document.getElementById('nav-hamburger');
      if (links) links.classList.remove('mobile-open');
      if (btn) btn.classList.remove('open');
    }
  });
})();
