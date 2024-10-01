document.addEventListener('DOMContentLoaded', () => {
    const scoreMessage = document.getElementById('score-message');
    const restartButton = document.getElementById('restart');

    const score = localStorage.getItem('gameScore');

    if (score !== null) {
        scoreMessage.textContent = `Congratulations! Your score is ${score}.`;
    } else {
        scoreMessage.textContent = 'Score not found.';
    }

    restartButton.addEventListener('click', () => {
        window.location.href = 'mainpage.html'; 
    });
});

// Disable mobile responsiveness
function disableMobileResponsive() {
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (metaViewport) {
        metaViewport.setAttribute('content', 'width=1024');
    } else {
        const newMeta = document.createElement('meta');
        newMeta.name = "viewport";
        newMeta.content = "width=1024";
        document.head.appendChild(newMeta);
    }
}
disableMobileResponsive();
