var inputs = getInputs(window.location.search);
var bmr = computeBMR(inputs['gender'], parseFloat(inputs['weight']), parseFloat(inputs['height']), parseInt(inputs['age']));
var totalCalories = getCalories(bmr, parseInt(inputs['activity']));

displayCalories(totalCalories);

document.getElementById('calorie-tracker-form').addEventListener('submit', function(ev) {
  ev.preventDefault();

  var foodLogs = document.getElementById('food-logs');
  var children = ev.target.children;
  var foodName = children.namedItem('food-name').value;
  var calories = parseFloat(children.namedItem('calories').value);

  var foodLog = document.createElement('div');
  foodLog.classList.add('row', 'card');
  foodLog.style = 'justify-content: space-between; padding-top: 1em; padding-bottom: 1em;';

  // food name
  var foodLogName = document.createElement('p');
  foodLogName.textContent = foodName;

  // food calorie
  var foodLogCalories = document.createElement('p');
  foodLogCalories.textContent = calories + 'cal';

  foodLog.appendChild(foodLogName);
  foodLog.appendChild(foodLogCalories);
  foodLogs.appendChild(foodLog);

  var totalCalcResult = document.getElementById('total-calc-result');
  displayCalories(parseFloat(totalCalcResult.textContent) - calories);

  ev.target.reset();
});

function getInputs(rawInputs) {
  var inputs = {};

  if (rawInputs.length != 0 && rawInputs[0] == '?') {
    var rawInputsArray = rawInputs.substring(1).split('&');
    for (var i = 0; i < rawInputsArray.length; i++) {
      var rawInput = rawInputsArray[i];
      var equalIdx = rawInput.indexOf('=');
      if (equalIdx != -1) {
        var key = rawInput.substring(0, equalIdx);
        var value = rawInput.substring(equalIdx + 1);
        inputs[key] = value;
      } else {
        inputs[rawInput] = '';
      }
    }
  }

  return inputs;
}

function computeBMR(gender, weightKg, heightCm, age) {
  console.log(gender, weightKg, heightCm, age);
  if (gender === 'male') {
    return 88.362 + (13.397 * weightKg) + (4.799 * heightCm) - (5.677 * age);
  } else if (gender === 'female') {
    return 447.593 + (9.247 * weightKg) + (3.098 * heightCm) - (4.330 * age);
  } else {
    return 0;
  }
}

function getCalories(bmr, activityType) {
  if (activityType < 1 && activityType > 5) {
    return 0;
  }
  
  var activityTypeBase = 1.2;
  var activityTypeMulti = 0.175;
  var result = bmr * (activityTypeBase + (activityTypeMulti * activityType));
  return result;
}

function displayCalories(result) {
  var totalCalcResult = document.getElementById('total-calc-result');
  totalCalcResult.textContent = Math.round(result * 100) / 100;
}