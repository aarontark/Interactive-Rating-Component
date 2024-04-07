let submitBtn = document.querySelector('.submit');
let radioBtns = document.querySelectorAll('.checkbox')
let radioLabels = document.querySelectorAll('.number')
let selectionDisplay = document.querySelector('.selection-display');
let mainSection = document.querySelector('.main-section');
let confirmation = document.querySelector('.confirmation-section');

submitBtn.addEventListener('click', () => {
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