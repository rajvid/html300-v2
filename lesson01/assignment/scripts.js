// Code that requires the DOM be loaded should not be run until the DOM is loaded
document. addEventListener("DOMContentLoaded", function(){

  let myArray = [5, 8, 23, 25, 60, 80, 30];

  //The following function uses Reduce as es6 script
  const adderForm = document.querySelector('#adder-form')

  adderForm.addEventListener('submit', function(event){
    event.preventDefault()
    let array = [];
    let sum = 0;

    //using push to generate array of two numbers and then reduce function provides the sum.
    array.push(parseInt(document.querySelector('#adder-form .input1').value))
    array.push(parseInt(document.querySelector('#adder-form .input2').value))

    //Added value uses reduce function of es6 to sum up the array numbers.
    let addedValue = array.reduce(function(sum, value){
      return sum + value;
    });

    let text = document.createTextNode(`The summation of ${array[0]} and ${array[1]} is : ${addedValue}`)
    const p = document.createElement('p')
    p.appendChild(text)
    adderForm.appendChild(p)
  });

  // Find the divider form, and handle its submit event
  const dividerForm = document.querySelector('#divider-form')

  dividerForm.addEventListener('submit', function(event){
    event.preventDefault()
    const inputField = document.querySelector('#divider-form .input').value;
    const denominator = parseInt(inputField);
    let array = [];
    //using map funciton of array to map values to new array
    array = myArray.map(function(value){
      return (value/denominator);
    });
    document.querySelector('#divider-form .output').innerHTML = `Divided Array is: [${array}]`;
    inputField.value = '';
  });

    // Find the Filter form, and handle its submit event
    const filterForm = document.querySelector('#filter-form')

    filterForm.addEventListener('submit', function(event){
      event.preventDefault()
      const inputField = document.querySelector('#filter-form .input').value;
      const filterValue = parseInt(inputField);
      let array = [];
      //array.filter method to filter numbers greater than user value.
      array = myArray.filter(function(value){
        return value > filterValue;
      });
      document.querySelector('#filter-form .output').innerHTML = `Filtered Array is: [${array}]`;
      inputField.value = '';
    });

    // Find the Say-Hi! form, and handle its submit event
    const sayHiForm = document.querySelector('#say-hi-form')

    sayHiForm.addEventListener('submit', function(event){
      event.preventDefault();
      const inputField = document.querySelector('#say-hi-form .input').value;
      const ifNumber = parseInt(inputField);

      //Using string function
      if(isNaN(ifNumber)){
        document.querySelector('#say-hi-form .output').innerHTML = `Hi ${inputField}. I am Ayaan and I am 1 year old!`;
      } else {
        document.querySelector('#say-hi-form .output').innerHTML = `Hi ${ifNumber}. You cheated, you are a number! Angry Face.`;
      }
    });
})