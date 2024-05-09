// احضر العنصر
const firchap = document.querySelector('.firchap');

// حساب ارتفاع النافذة لعرض العنصر عند التمرير
const windowHeight = window.innerHeight;

// استمع إلى حدث التمرير
window.addEventListener('scroll', () => {
    // حساب موضع العنصر بالنسبة لأعلى الصفحة
    const elemTop = firchap.getBoundingClientRect().top;

    // تنفيذ التأثير عندما يظهر العنصر على الشاشة
    if (elemTop < windowHeight) {
        firchap.classList.add('active');
        // قم بتخزين الحالة في مخزن محلي
        localStorage.setItem('firchapActive', true);
    }
});


window.addEventListener('scroll', () => {
    const sec = document.getElementById('sec');
    const windowHeight = window.innerHeight;
    const secTop = sec.getBoundingClientRect().top;

    if (secTop < windowHeight) {
        if (!sec.classList.contains('active')) {
            sec.classList.add('active');
        }
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    popup.classList.add('show-popup');
});

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show-popup');
}

window.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    const topPosition = (windowHeight - containerHeight) / 2;
    const leftPosition = (windowWidth - containerWidth) / 2;

    container.style.top = topPosition + 'px';
    container.style.left = leftPosition + 'px';
});

