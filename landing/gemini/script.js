document.addEventListener('DOMContentLoaded', () => {

    // Helper: Form Handling
    function handleFormSubmit(formId) {
        const form = document.getElementById(formId);
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = form.querySelector('.submit-btn');
            const originalContent = btn.innerHTML;
            const width = btn.offsetWidth;

            btn.style.width = `${width}px`;
            btn.innerHTML = '<span class="spinner"></span> 처리중...';
            btn.style.opacity = '0.8';
            btn.disabled = true;

            // Simulate Network Request
            setTimeout(() => {
                btn.innerHTML = '완료되었습니다!';
                btn.style.background = '#27ae60'; // Success Green

                // Optional: Show a success modal or toast here

                setTimeout(() => {
                    btn.innerHTML = originalContent;
                    btn.style.background = '';
                    btn.style.opacity = '1';
                    btn.disabled = false;
                    btn.style.width = '';
                    form.reset();
                }, 2000);
            }, 1200);
        });
    }

    // Attach to all 3 forms
    handleFormSubmit('form-hero');
    handleFormSubmit('form-middle');
    handleFormSubmit('form-final');


    // Animation Observer
    const animatedItems = document.querySelectorAll('.hero-text-col, .abstract-ui-card, .pain-item, .sol-card, .b-card, .t-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-active');
            }
        });
    }, { threshold: 0.1 });

    animatedItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
        observer.observe(item);
    });

    // Add styles for animation state
    const style = document.createElement('style');
    style.innerHTML = `
        .animate-active { opacity: 1 !important; transform: translateY(0) !important; }
        .spinner {
            display: inline-block;
            width: 12px; height: 12px;
            border: 2px solid #fff;
            border-top-color: transparent;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-right: 8px;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
    `;
    document.head.appendChild(style);

});
