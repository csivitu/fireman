document.addEventListener('DOMContentLoaded', () => {
    const scoreMessage = document.getElementById('score-message');
    const restartButton = document.getElementById('restart');

    const score = parseInt(localStorage.getItem('gameScore'), 10);
    
    if (score !== null) {
        scoreMessage.textContent = `Congratulations! Your score is ${score}.`;
    } else {
        scoreMessage.textContent = 'Score not found.';
    }

    restartButton.addEventListener('click', () => {
        window.location.href = 'mainpage.html'; 
    });
});


