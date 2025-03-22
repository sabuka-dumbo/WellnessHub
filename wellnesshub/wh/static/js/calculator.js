const calc_field1 = document.getElementById("calc_field1");
const calc_field2 = document.getElementById("calc_field2");
const calc_field3 = document.getElementById("calc_field3");
const calc_field4 = document.getElementById("calc_field4");
const calc_field5 = document.getElementById("calc_field5");
const calc_field6 = document.getElementById("calc_field6");

const calc_field1_1 = document.getElementById("calc_field1_1");
const calc_field2_2 = document.getElementById("calc_field2_2");
const calc_field3_3 = document.getElementById("calc_field3_3");
const calc_field4_4 = document.getElementById("calc_field4_4");
const calc_field5_5 = document.getElementById("calc_field5_5");
const calc_field6_6 = document.getElementById("calc_field6_6");

const MorF1 = document.getElementById("MorF1"); // Female
const MorF2 = document.getElementById("MorF2"); // Male

const submit = document.getElementById("submit");

let calculation = "Body Fat";

if (calculation == "Body Fat") {
    calc_field1.style.display = "block";
    calc_field2.style.display = "block";
    calc_field3.style.display = "block";
    calc_field4.style.display = "block";
    calc_field5.style.display = "block";
    calc_field6.style.display = "none";

    calc_field1_1.style.display = "block";
    calc_field2_2.style.display = "block";
    calc_field3_3.style.display = "block";
    calc_field4_4.style.display = "block";
    calc_field5_5.style.display = "block";
    calc_field6_6.style.display = "none";

    calc_field1.placeholder = "Enter Height";
    calc_field2.placeholder = "Enter Weight";
    calc_field3.placeholder = "Enter Neck Circumference";
    calc_field4.placeholder = "Enter Hip Circumference";
    calc_field5.placeholder = "Enter Waist Circumference";

    submit.addEventListener("click", function() {
        if (MorF1.checked) {
            bodyfat = calculateBodyFatWomen(calc_field5.value, calc_field3.value, calc_field1.value, calc_field4.value, calc_field1_1);
        } else {
            bodyfat = calculateBodyFatMen(calc_field5.value, calc_field3.value, calc_field1.value, calc_field1_1);
        }
        console.log(bodyfat)
    })
} else if (calculation == "Lean Body Mass") {

}

function calculateBodyFatMen(waist, neck, height, metric) {
    if (metric != "cm") {
        const log10 = Math.log10;
        const denominator = 86.010 * log10(neck) - 70.041 * log10(height) + 36.76
        return denominator;
    } else {
        const log10 = Math.log10;
        const denominator = 1.0324 - 0.19077 * log10(waist - neck) + 0.15456 * log10(height);
        return (495 / denominator) - 450;
    }
}

function calculateBodyFatWomen(waist, neck, height, hip, metric) {
    waist = parseFloat(waist);
    neck = parseFloat(neck);
    height = parseFloat(height);
    hip = parseFloat(hip);

    if (metric != "cm") {
        const log10 = Math.log10;
        const denominator = 163.205 * log10(waist + hip + neck) - 97.684 * (log10(height)) - 78.387

        return denominator
    } else {
        const log10 = Math.log10;
        const denominator = 1.29579 - 0.35004 * log10(waist + hip - neck) + 0.22100 * log10(height);
        const bodyFat = (495 / denominator) - 450;
        
        return bodyFat
    }
}