let pageForm = document.querySelector('.page-form');
let radioBtns = document.querySelectorAll('.checkbox')
let selectionDisplay = document.querySelector('.selection-display');
let mainSection = document.querySelector('.main-section');
let confirmation = document.querySelector('.confirmation-section');

pageForm.addEventListener('submit', () => {
    for (const radio of radioBtns) {
        if (radio.checked) {
            mainSection.style.display = 'none';
            confirmation.style.display = 'flex';
            selectionDisplay.innerHTML = `You selected ${radio.id} out of 5`;
            break;
        } else {
            continue;
        }
    }
})