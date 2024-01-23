document.addEventListener('DOMContentLoaded', function () {
    const runningTextContainer = document.getElementById('running-text-container');
    const originalText = document.querySelector('.running-text').textContent;

    function createClone() {
        const clone = document.createElement('div');
        clone.className = 'running-text';
        clone.textContent = originalText;
        runningTextContainer.appendChild(clone);
    }

    function runAnimation() {
        const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        const textWidth = runningTextContainer.scrollWidth;

        const numberOfClones = Math.ceil(screenWidth / textWidth);

        for (let i = 0; i < numberOfClones; i++) {
            createClone();
        }

        const runningTexts = document.querySelectorAll('.running-text');
        runningTexts.forEach(function(text, index) {
            text.style.animation = `runText 20s linear infinite ${index * 2}s`;
        });
    }

    runAnimation();
});