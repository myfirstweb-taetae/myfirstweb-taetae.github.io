document.addEventListener('DOMContentLoaded', () => {

    // Initialize AOS Animation Library
    AOS.init({
        duration: 800,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100
    });

    // Form Submission Handler
    const form = document.getElementById('signupForm');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            const name = document.getElementById('name').value;

            // Set loading state
            btn.innerText = '신청 처리 중...';
            btn.style.opacity = '0.7';
            btn.disabled = true;

            // Random delay to simulate server request (1~2 seconds)
            setTimeout(() => {
                // Success State
                btn.style.backgroundColor = '#48bb78'; // Success Green
                btn.innerText = '신청 완료!';

                alert(`${name}님, 수강 신청이 완료되었습니다!\n이메일로 강의 링크가 발송되었습니다.`);

                form.reset();

                // Reset Button after 3 seconds
                setTimeout(() => {
                    btn.style.backgroundColor = '';
                    btn.innerText = originalText;
                    btn.style.opacity = '1';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }

    // Smooth Scroll for Anchors
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
});
