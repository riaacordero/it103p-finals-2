function calculateCalories(results) {
    let sex = results["sex"];
    let calories = 10 * results["weight"] + 6.25 * results["height"] - 5 * results["age"];

    if (sex === "male") {
        calories += 5;
    } else {
        calories -= 161;
    }

    switch(results["activity"]) {
        case "sedentary":
            calories *= 1.2;
            break;
        case "light":
            calories *= 1.375;
            break;
        case "moderate":
            calories *= 1.55;
            break;
        case "very-active":
            calories *= 1.725;
            break;
        case "extra-active":
            calories *= 1.9;
            break;
        default:
            break;
    }

    return calories;
}

let resultsData = {};
new URLSearchParams(window.location.search).forEach((value, name) => {
    resultsData[name] = value;
});

document.getElementById("result-calories")["innerHTML"] = calculateCalories(resultsData);

document.getElementById("results-form").addEventListener("submit", (event) => {
    event.preventDefault();

    let currentCaloriesText = document.getElementById("result-calories");
    let currentCalories = parseFloat(currentCaloriesText["innerHTML"]);
    let inputCalories = parseFloat(document.getElementById("input-calories")["value"]);
    currentCaloriesText["innerHTML"] = currentCalories - inputCalories;
});