document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileIcon = mobileBtn.querySelector('i');

    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        
        if (mobileMenu.classList.contains('hidden')) {
            mobileIcon.classList.remove('ph-x');
            mobileIcon.classList.add('ph-list');
        } else {
            mobileIcon.classList.remove('ph-list');
            mobileIcon.classList.add('ph-x');
        }
    });

    // Close mobile menu when a link is clicked
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            mobileMenu.classList.remove('flex');
            mobileIcon.classList.remove('ph-x');
            mobileIcon.classList.add('ph-list');
        });
    });

    // 2. Sticky Navbar Styling
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-md');
            navbar.classList.remove('shadow-sm', 'py-4');
            navbar.classList.add('py-2');
        } else {
            navbar.classList.remove('shadow-md', 'py-2');
            navbar.classList.add('shadow-sm', 'py-4');
        }
    });

    // 3. Scroll Reveal Animation
    const revealElements = document.querySelectorAll('.reveal-up');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // 4. Counters Animation
    const counters = document.querySelectorAll('.counter-value');
    let hasAnimated = false;

    const animateCounters = () => {
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const duration = 2000; // 2 seconds
            const increment = target / (duration / 16); // 60fps
            
            let current = 0;
            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.innerText = Math.ceil(current) + "+";
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.innerText = target + "+";
                }
            };
            updateCounter();
        });
    };

    // Trigger counter animation when in view
    const counterSection = document.querySelector('.counter-value')?.closest('section');
    if (counterSection) {
        const counterObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimated) {
                animateCounters();
                hasAnimated = true;
            }
        }, { threshold: 0.5 });
        
        counterObserver.observe(counterSection);
    }

    // 5. Material Calculator Logic
    const calcBtn = document.getElementById('btn-hitung');
    const calcResult = document.getElementById('calc-result');
    const resultAngka = document.getElementById('result-angka');

    if (calcBtn) {
        calcBtn.addEventListener('click', () => {
            const panjang = parseFloat(document.getElementById('calc-panjang').value);
            const lebar = parseFloat(document.getElementById('calc-lebar').value);
            const material = document.getElementById('calc-material').value;

            if (!panjang || !lebar || panjang <= 0 || lebar <= 0) {
                alert('Silakan masukkan panjang dan lebar ruangan yang valid.');
                return;
            }

            // Rumus sederhana: Luas ruangan / Luas efektif 1 lembar PVC
            // Lebar PVC standar = 20cm (0.2m)
            const luasRuangan = panjang * lebar;
            let luasPerLembar = 0;

            if (material === 'pvc_4m') {
                luasPerLembar = 4 * 0.2; // 0.8 m2
            } else if (material === 'pvc_6m') {
                luasPerLembar = 6 * 0.2; // 1.2 m2
            }

            // Hasil murni
            let kebutuhanMurni = luasRuangan / luasPerLembar;
            
            // Tambah waste 5%
            let kebutuhanTotal = Math.ceil(kebutuhanMurni * 1.05);

            // Animate result presentation
            resultAngka.innerText = '...';
            calcResult.classList.remove('hidden');
            
            // Allow display block to render before changing opacity for transition
            setTimeout(() => {
                calcResult.classList.remove('opacity-0');
                calcResult.classList.add('opacity-100');
            }, 10);

            setTimeout(() => {
                resultAngka.innerText = kebutuhanTotal;
            }, 500);
        });
    }
});
