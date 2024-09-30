document.addEventListener('DOMContentLoaded', () => {
    const scoreMessage = document.getElementById('score-message');
    const restartButton = document.getElementById('restart');

    const score = (localStorage.getItem('gameScore'));
    if (score !== null) {
        scoreMessage.textContent = `Congratulations! Your score is ${score}.`;
    } else {
        scoreMessage.textContent = 'Score not found.';
    }

    restartButton.addEventListener('click', () => {
        window.location.href = 'mainpage.html'; 
    });
});


