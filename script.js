document.querySelectorAll('.number').forEach(number => {
    number.addEventListener('click', () => {
        const targetId = number.getAttribute('data-target');
        document.getElementById(targetId).style.display = 'flex';
    });
});

document.querySelectorAll('.popup').forEach(popup => {
    popup.addEventListener('click', () => {
        popup.style.display = 'none';
    });
});