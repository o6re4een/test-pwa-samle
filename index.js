

document.addEventListener('DOMContentLoaded', () => {
const calculaateBtn = document.getElementById('calculate');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const result = document.getElementById('result');

calculaateBtn.addEventListener('click', () => {
    const heightValue = parseFloat(height.value)/100;
    const weightValue = parseFloat(weight.value);
    const bmi = weightValue / (heightValue * heightValue);
    result.innerText = `Your BMI is ${bmi.toFixed(2)}`;    
});
if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('sw.js')
      .then(() => console.log('Service Worker registered successfully.'))
      .catch((error) => console.log('Service Worker registration failed:', error));
  }

})

