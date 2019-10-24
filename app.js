  const degreeInput = document.getElementById('degree-temp');
  const fahrenheitInput = document.getElementById('fahrenheit-temp');
  const clearInputs = document.getElementById('clear-inputs');
  
  loadAllEvents();

  function loadAllEvents(){
    degreeInput.addEventListener('input', celciustofahrenheit);
    fahrenheitInput.addEventListener('input', fahrenheittocelcius)
    clearInputs.addEventListener('click', clear);
  }
 
  function roundNum (num){
    return Math.round(num);
  }

  function celciustofahrenheit(){
    cTemp = parseFloat(degreeInput.value);
    fTemp = (cTemp * 9/5) + 32;
    fahrenheitInput.value = roundNum(fTemp);
  }

  function fahrenheittocelcius(){
    fTemp = parseFloat(fahrenheitInput.value);
    cTemp =  (5/9) * (fTemp - 32);
    degreeInput.value = roundNum(cTemp);
  }

  function clear(e){
    degreeInput.value = '';
    fahrenheitInput.value = '';
    e.preventDefault();
  }


  
  