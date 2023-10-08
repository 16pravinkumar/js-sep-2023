let form = document.querySelector('form');
let under_weight = document.querySelector('#under_weight');
let noram_wei = document.querySelector('#noram_wei');
let over_wei = document.querySelector('#over_wei');
under_weight.style.display = 'none';
noram_wei.style.display = 'none';
over_wei.style.display = 'none';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let height = document.querySelector('#height').value;
  let heightValidation = document.querySelector('#height');

  let weight = document.querySelector('#weight').value;
  let weightValidation = document.querySelector('#weight');

  let displayAns = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    displayAns.innerHTML = 'Please give a valid height';
    heightValidation.style.border = '2px solid red';
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    displayAns.innerHTML = 'Please give a valid weight';
    weightValidation.style.border = '2px solid red';
  } else {
    let result = (weight / ((height * height) / 10000)).toFixed(2);

    displayAns.innerText = result;
    if (result < 18.6) {
      under_weight.style.display = 'block';
    } else if (result >= 18.6 && result <= 24.9) {
      noram_wei.style.display = 'block';
    } else if (result > 24.9) {
      over_wei.style.display = 'block';
    }
  }

  //   Under Weight = Less than 18.6

  // Normal Range = 18.6 and 24.9

  // Overweight = Greater than 24.9
});
