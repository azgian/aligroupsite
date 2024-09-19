document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('show');
        this.setAttribute('aria-expanded', this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
    });

    // 기존 코드 유지
    const subsidiariesItems = document.querySelectorAll('#subsidiaries li');
    
    subsidiariesItems.forEach(item => {
        item.addEventListener('click', function() {
            alert(`${this.textContent} 페이지로 이동합니다.`);
        });
    });

    window.addEventListener('scroll', function() {
        const scrollPosition = window.pageYOffset;
        const hero = document.getElementById('hero');
        hero.style.backgroundPositionY = scrollPosition * -0.5 + 'px';
    });
});
