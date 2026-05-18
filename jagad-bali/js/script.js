document.addEventListener('DOMContentLoaded', () => {

    // ─── 1. Mobile Menu Toggle ───────────────────────────────────────────────
    const mobileBtn  = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        const mobileIcon = mobileBtn.querySelector('i');

        mobileBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.toggle('hidden');
            mobileMenu.classList.toggle('flex', !isHidden);
            if (mobileIcon) {
                mobileIcon.classList.toggle('ph-list', isHidden);
                mobileIcon.classList.toggle('ph-x',   !isHidden);
            }
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                mobileMenu.classList.remove('flex');
                if (mobileIcon) {
                    mobileIcon.classList.add('ph-list');
                    mobileIcon.classList.remove('ph-x');
                }
            });
        });
    }

    // ─── 2. Sticky Navbar ────────────────────────────────────────────────────
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-md', 'py-2');
                navbar.classList.remove('shadow-sm', 'py-4');
            } else {
                navbar.classList.remove('shadow-md', 'py-2');
                navbar.classList.add('shadow-sm', 'py-4');
            }
        });
    }

    // ─── 3. Scroll Progress Indicator ───────────────────────────────────────
    const progressBar = document.createElement('div');
    progressBar.style.cssText = 'position:fixed;top:0;left:0;height:3px;width:0%;background:linear-gradient(90deg,#ea580c,#f97316);z-index:9999;transition:width 0.1s linear;';
    document.body.appendChild(progressBar);
    window.addEventListener('scroll', () => {
        const scrollTop  = window.scrollY;
        const docHeight  = document.documentElement.scrollHeight - window.innerHeight;
        const progress   = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        progressBar.style.width = progress + '%';
    });

    // ─── 4. Reveal-on-Scroll Animation ──────────────────────────────────────
    const revealObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));

    // ─── 5. Counter Animation ────────────────────────────────────────────────
    const counters = document.querySelectorAll('.counter-value');
    if (counters.length > 0) {
        let animated = false;
        const animateCounters = () => {
            counters.forEach(counter => {
                const target    = +counter.getAttribute('data-target');
                const increment = target / (2000 / 16);
                let current     = 0;
                const tick = () => {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current) + '+';
                        requestAnimationFrame(tick);
                    } else {
                        counter.innerText = target + '+';
                    }
                };
                tick();
            });
        };

        const counterSection = counters[0].closest('section');
        if (counterSection) {
            new IntersectionObserver(entries => {
                if (entries[0].isIntersecting && !animated) {
                    animated = true;
                    animateCounters();
                }
            }, { threshold: 0.5 }).observe(counterSection);
        }
    }

    // ─── 6. PVC / Material Calculator ───────────────────────────────────────
    const calcBtn    = document.getElementById('btn-hitung');
    const calcResult = document.getElementById('calc-result');
    const resultEl   = document.getElementById('result-angka');

    if (calcBtn && calcResult && resultEl) {
        calcBtn.addEventListener('click', () => {
            const panjang  = parseFloat(document.getElementById('calc-panjang')?.value);
            const lebar    = parseFloat(document.getElementById('calc-lebar')?.value);
            const material = document.getElementById('calc-material')?.value;

            if (!panjang || !lebar || panjang <= 0 || lebar <= 0) {
                alert('Silakan masukkan panjang dan lebar ruangan yang valid.');
                return;
            }

            const luasRuangan   = panjang * lebar;
            const luasPerLembar = material === 'pvc_6m' ? 1.2 : 0.8;
            const kebutuhan     = Math.ceil((luasRuangan / luasPerLembar) * 1.05);

            resultEl.innerText = '...';
            calcResult.classList.remove('hidden', 'opacity-0');

            setTimeout(() => { calcResult.classList.add('opacity-100'); }, 10);
            setTimeout(() => { resultEl.innerText = kebutuhan; }, 500);
        });
    }

    // ─── 7. Floating WA Pulse Effect ────────────────────────────────────────
    const waBtn = document.querySelector('a[href*="wa.me"].fixed');
    if (waBtn) {
        const pulse = document.createElement('span');
        pulse.style.cssText = 'position:absolute;inset:0;border-radius:9999px;background:rgba(34,197,94,0.4);animation:ping 1.5s cubic-bezier(0,0,0.2,1) infinite;';
        waBtn.style.position = 'relative';
        waBtn.appendChild(pulse);
        if (!document.getElementById('wa-ping-style')) {
            const style = document.createElement('style');
            style.id = 'wa-ping-style';
            style.textContent = '@keyframes ping{75%,100%{transform:scale(1.5);opacity:0;}}';
            document.head.appendChild(style);
        }
    }

});
