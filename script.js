// Save The needed elements
const adviceId = document.getElementById('advice-id');
const adviceContent = document.getElementById('advice-content');
const generator = document.getElementById('generator');

function getAdvice () {
    fetch('https://api.adviceslip.com/advice').then(res => res.json()).then(res => {
        const advId = res.slip.id;    
        const advice = res.slip.advice;
        adviceId.textContent = `Advice #${advId}`;
        adviceContent.textContent = `"${advice}"`;
    });
}

window.onload = () => getAdvice;


// Add functionality To the Generator Button
generator.addEventListener('click', () => getAdvice());
