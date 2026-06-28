// Nav shadow on scroll
window.addEventListener('scroll', () => {
    document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20);
});

// Scroll reveal
const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
        if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('visible'), (e.target.dataset.delay || 0) * 80);
        }
    });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach((el, i) => { el.dataset.delay = i % 4; obs.observe(el); });

// Interactive emoji scale in phone mockup
const SEL = ['sel-red', 'sel-amber', 'sel-purple', 'sel-blue', 'sel-green'];
const LBL = ['INSATISFATÓRIO', 'PRECISA MELHORAR', 'REGULAR', 'BOM', 'EXCELENTE'];
const CLR = ['#ec485e', '#f59f0b', '#8B5CF6', '#3b83f6', '#10b981'];

document.querySelectorAll('.em-row').forEach(row => {
    const btns = row.querySelectorAll('.em-btn');
    const lbl = row.nextElementSibling;
    btns.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove(...SEL));
            btn.classList.add(SEL[i]);
            if (lbl?.classList.contains('em-lbl')) {
                lbl.textContent = LBL[i];
                lbl.style.color = CLR[i];
            }
        });
    });
});