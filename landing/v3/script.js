document.addEventListener('DOMContentLoaded', () => {

    // 1. FAQ Accordion Logic
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            // Toggle current item
            item.classList.toggle('active');
        });
    });

    // 2. Form Submission Mock
    const signupForm = document.getElementById('signupForm');

    if (signupForm) {
        signupForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = signupForm.querySelector('button');
            const originalText = btn.innerText;
            const emailInput = signupForm.querySelector('input[type="email"]');

            // Basic validation visualization
            if (!emailInput.value.includes('@')) {
                alert('올바른 이메일 형식을 입력해주세요.');
                return;
            }

            // Simulate API call
            btn.innerHTML = '신청 처리중... <span class="loading-spinner">↻</span>';
            btn.disabled = true;
            btn.style.opacity = '0.7';

            setTimeout(() => {
                alert(`환영합니다! ${emailInput.value}로 강의 링크가 발송되었습니다.`);
                btn.innerText = '신청 완료!';
                btn.style.background = '#4CAF50';
                signupForm.reset();

                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    btn.style.background = '';
                    btn.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }

    // 3. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Scroll Animation (Fade In)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const fadeInObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Run once
            }
        });
    }, observerOptions);

    // Initial styles for animations are handled in JS to avoid accessibility issues if JS fails
    const animatedElements = document.querySelectorAll('.hero-content, .pain-card, .benefit-card, .solution-item, .timeline-item');

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = `opacity 0.6s ease-out ${index * 0.1}s, transform 0.6s ease-out ${index * 0.1}s`;
        fadeInObserver.observe(el);

        // Add class for handling the 'visible' state
        el.dataset.index = index;
    });

    // CSS class to trigger transition
    const style = document.createElement('style');
    style.innerHTML = `
        .visible {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
