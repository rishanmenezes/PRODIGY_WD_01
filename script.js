const menuLinks = document.querySelectorAll('.Menu a');
const registerButton = document.querySelector('.Register a');

menuLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.position = 'relative';
        const underline = document.createElement('span');
        underline.style.position = 'absolute';
        underline.style.bottom = '0';
        underline.style.left = '0';
        underline.style.width = '0%';
        underline.style.height = '2px';
        underline.style.backgroundColor = 'orange';
        underline.style.transition = 'width 0.4s ease';
        link.appendChild(underline);

        setTimeout(() => {
            underline.style.width = '90%';
        }, 10);
    });

    link.addEventListener('mouseleave', () => {
        const underline = link.querySelector('span');
        if (underline) {
            underline.style.width = '0%';
            setTimeout(() => {
                underline.remove();
            }, 400);
        }
    });
});

registerButton.addEventListener('mouseenter', () => {
    registerButton.style.transform = 'scale(1.05)';
    registerButton.style.transition = 'transform 0.4s ease-in-out';
});

registerButton.addEventListener('mouseleave', () => {
    registerButton.style.transform = 'scale(1)';
});