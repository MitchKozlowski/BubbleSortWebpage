const arrayContainer = document.getElementById('array-container');
let array = [];

function createBars(array) {
    arrayContainer.innerHTML = '';
    array.forEach(value => {
        const barContainer = document.createElement('div');
        barContainer.classList.add('bar-container');

        const bar = document.createElement('div');
        bar.classList.add('bar');
        bar.style.height = `${value * 3}px`; // Adjusted to fit within the container

        const label = document.createElement('span');
        label.classList.add('bar-label');
        label.innerText = value;

        barContainer.appendChild(bar);
        barContainer.appendChild(label);
        arrayContainer.appendChild(barContainer);
    });
    console.log('Bars created:', array);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bubbleSort(array) {
    console.log('Starting bubble sort...');
    const bars = document.getElementsByClassName('bar');
    const labels = document.getElementsByClassName('bar-label');
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                bars[j].style.height = `${array[j] * 3}px`;
                bars[j + 1].style.height = `${array[j + 1] * 3}px`;
                labels[j].innerText = array[j];
                labels[j + 1].innerText = array[j + 1];
                await sleep(100);
                console.log('Swapped:', array[j], array[j + 1]);
            }
        }
        bars[array.length - i - 1].classList.add('sorted');
    }
    console.log('Bubble sort completed.');
}

function generateArray() {
    const arraySize = document.getElementById('array-size').value;
    if (arraySize < 2 || arraySize > 50) {
        alert('Please enter a value between 2 and 50.');
        return;
    }
    array = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 100) + 1);
    createBars(array);
    console.log('Array generated:', array);
}

function startSorting() {
    console.log('Start sorting button clicked');
    bubbleSort(array);
}

function resetPage() {
    document.getElementById('array-size').value = 10;
    generateArray();
}

// Initial array generation for demo purposes
generateArray();