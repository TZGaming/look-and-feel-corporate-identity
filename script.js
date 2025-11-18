    (function () {
        const btn = document.querySelector('.menu-toggle');
        const headerContainer = document.querySelector('.header-container');
        if (!btn || !headerContainer) return;
        btn.addEventListener('click', function () {
            const expanded = btn.getAttribute('aria-expanded') === 'true';
            btn.setAttribute('aria-expanded', String(!expanded));
            headerContainer.classList.toggle('open');
        });

        window.addEventListener('resize', function () {
            if (window.innerWidth > 768) {
                headerContainer.classList.remove('open');
                btn.setAttribute('aria-expanded', 'false');
            }
        });
    })();