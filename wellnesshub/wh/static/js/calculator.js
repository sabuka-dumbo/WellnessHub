const calc_field1 = document.getElementById("calc_field1");
const calc_field2 = document.getElementById("calc_field2");
const calc_field3 = document.getElementById("calc_field3");
const calc_field4 = document.getElementById("calc_field4");
const calc_field5 = document.getElementById("calc_field5");
const calc_field6 = document.getElementById("calc_field6");

const calculator_title = document.getElementById("calculator_title");

const MorF1 = document.getElementById("MorF1"); // Female
const MorF2 = document.getElementById("MorF2"); // Male

const submit = document.getElementById("submit");

let calculation = "Body Fat";

addEventListener("DOMContentLoaded", bodyfatcalculation())

function bodyfatcalculation() {
    calculator_title.innerText = "Body Fat Calculator:"

    calc_field1.style.opacity = "100%";
    calc_field2.style.opacity = "100%";
    calc_field3.style.opacity = "100%";
    calc_field4.style.opacity = "100%";
    calc_field5.style.opacity = "100%";
    calc_field6.style.opacity = "50%";
    calc_field1.disabled = false;
    calc_field2.disabled = false;
    calc_field3.disabled = false;
    calc_field4.disabled = false;
    calc_field5.disabled = false;
    calc_field6.disabled = true;

    calc_field1.placeholder = "Enter Height";
    calc_field2.placeholder = "Enter Weight";
    calc_field3.placeholder = "Enter Neck Circumference";
    calc_field4.placeholder = "Enter Hip Circumference";
    calc_field5.placeholder = "Enter Waist Circumference";

    submit.addEventListener("click", function() {
        if (MorF1.checked) {
            bodyfat = calculateBodyFatWomen(calc_field5.value, calc_field3.value, calc_field1.value, calc_field4.value);
        } else {
            bodyfat = calculateBodyFatMen(calc_field5.value, calc_field3.value, calc_field1.value);
        }

        const result2_title = document.getElementById("result2-title");
        const results_title2 = document.getElementById("results-title2");

        result2_title.innerText = Math.floor(bodyfat * 10) / 10 + "% Body Fat";
        results_title2.innerText = Math.floor(bodyfat * 10) / 10 + "% Body Fat";
    })
}

function leanmasscalculation() {
    calculator_title.innerText = "Lean Body Mass Calculator:"

    calc_field1.style.opacity = "100%";
    calc_field2.style.opacity = "100%";
    calc_field3.style.opacity = "50%";
    calc_field4.style.opacity = "50%";
    calc_field5.style.opacity = "50%";
    calc_field6.style.opacity = "50%";
    calc_field1.disabled = false;
    calc_field2.disabled = false;
    calc_field3.disabled = true;
    calc_field4.disabled = true;
    calc_field5.disabled = true;
    calc_field6.disabled = true;

    calc_field1.placeholder = "Enter Height";
    calc_field2.placeholder = "Enter Weight";
    calc_field3.placeholder = "Enter Neck Circumference";
    calc_field4.placeholder = "Enter Hip Circumference";
    calc_field5.placeholder = "Enter Waist Circumference";

    submit.addEventListener("click", function() {
        if (MorF1.checked) {
            result = calculateLeanMassWomen(calc_field1.value, calc_field2.value)
        } else {
            result = calculateLeanMassMen(calc_field1.value, calc_field2.value)
        }

        const result2_title = document.getElementById("result2-title");
        const results_title2 = document.getElementById("results-title2");

        result2_title.innerText = Math.floor(result * 10) / 10 + "% Lean Mass";
        results_title2.innerText = Math.floor(result * 10) / 10; + "% Lean Mass";
    })
}

function calculateBodyFatMen(waist, neck, height) {
    const log10 = Math.log10;
    const denominator = 1.0324 - 0.19077 * log10(waist - neck) + 0.15456 * log10(height);
    return (495 / denominator) - 450;
}

function calculateBodyFatWomen(waist, neck, height, hip) {
    waist = parseFloat(waist);
    neck = parseFloat(neck);
    height = parseFloat(height);
    hip = parseFloat(hip);

    const log10 = Math.log10;
    const denominator = 1.29579 - 0.35004 * log10(waist + hip - neck) + 0.22100 * log10(height);
    const bodyFat = (495 / denominator) - 450;
    
    return bodyFat
}

function calculateLeanMassMen(height, weight) {
    const eLBM = 0.32810 * weight + 0.33929 * height - 29.5336;
    console.log(eLBM)
    return eLBM;
}

function calculateLeanMassWomen(height, weight) {
    const eLBM = 0.29569 * weight + 0.41813 * height - 43.2933;
    return eLBM;
}