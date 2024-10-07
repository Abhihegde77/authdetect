document.addEventListener('DOMContentLoaded', () => {
    const fileUpload = document.getElementById('file-upload');
    const fileName = document.getElementById('file-name');
    const checkButton = document.getElementById('check-button');
    const resultContainer = document.getElementById('result-container');

    fileUpload.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            fileName.textContent = e.target.files[0].name;
            checkButton.disabled = false;
        } else {
            fileName.textContent = '';
            checkButton.disabled = true;
        }
    });

    checkButton.addEventListener('click', () => {
        resultContainer.innerHTML = '<p>Analyzing image...</p>';
        
        // Simulating API call with setTimeout
        setTimeout(() => {
            const result = Math.random() > 0.5 ? 'Authorities Detected' : 'No Authorities Detected';
            const color = result === 'Authorities Detected' ? 'red' : 'green';
            resultContainer.innerHTML = `<p style="color: ${color}; font-weight: bold;">${result}</p>`;
        }, 2000);
    });
});