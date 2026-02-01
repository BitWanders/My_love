function oui() {
    const response = document.getElementById('response');
    response.innerHTML = '💕 Tu me rends tellement heureux ! 💕<br>Je t\'aime ! 😍';
    
    // Afficher la photo
    const photoContainer = document.getElementById('photoContainer');
    photoContainer.innerHTML = '<img src="img/photo.heic" alt="Nous deux">';
    photoContainer.classList.add('show');
    
    // Créer des cœurs animés qui explosent
    createHearts();
    createConfetti();
}

function moveButton() {
    const noBtn = document.getElementById('noBtn');
    const randomX = Math.random() * 400 - 200;
    const randomY = Math.random() * 400 - 200;
    
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
}

function createHearts() {
    const heartsCount = 40;
    
    for (let i = 0; i < heartsCount; i++) {
        const heart = document.createElement('div');
        heart.style.position = 'fixed';
        heart.style.left = window.innerWidth / 2 + 'px';
        heart.style.top = window.innerHeight / 2 + 'px';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '9999';
        
        const heartEmojis = ['❤️', '💕', '💖', '💗', '💝'];
        heart.innerHTML = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        
        document.body.appendChild(heart);
        
        // Animation de dispersion
        const angle = (Math.PI * 2 * i) / heartsCount;
        const velocity = Math.random() * 300 + 200;
        const distance = Math.random() * 400 + 300;
        
        const endX = Math.cos(angle) * distance;
        const endY = Math.sin(angle) * distance;
        
        const duration = Math.random() * 2 + 2;
        
        heart.animate([
            { transform: 'translate(0, 0) scale(1)', opacity: 1 },
            { transform: `translate(${endX}px, ${endY}px) scale(0)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        });
        
        setTimeout(() => heart.remove(), duration * 1000);
    }
}

function createConfetti() {
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-10px';
        confetti.style.fontSize = '20px';
        confetti.style.pointerEvents = 'none';
        
        const emojis = ['💕', '❤️', '💖', '💝', '✨'];
        confetti.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];
        
        document.body.appendChild(confetti);
        
        // Animation de chute
        const duration = Math.random() * 3 + 2;
        const distance = Math.random() * 300 + 200;
        
        confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${distance}px) rotate(${Math.random() * 720}deg)`, opacity: 0 }
        ], {
            duration: duration * 1000,
            easing: 'ease-in'
        });
        
        setTimeout(() => confetti.remove(), duration * 1000);
    }
}
