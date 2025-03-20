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

    calc_field1_1.style.display = "block";
    calc_field2_2.style.display = "block";
    calc_field3_3.style.display = "block";

    calc_field1.placeholder = "Enter Height";
    calc_field2.placeholder = "Enter Weight";
    calc_field3.placeholder = "Enter Neck Circumference";
    calc_field4.placeholder = "Enter Hip Circumference";
    calc_field5.placeholder = "Enter Waist Circumference";

    submit.addEventListener("click", function() {
        if (MorF1 == true) {
            bodyfat = calculateBodyFatWomen(calc_field5.value, calc_field3.value, calc_field1.value, calc_field4.value)
        } else {
            bodyfat = calculateBodyFatMen(calc_field5.value, calc_field3.value, calc_field1.value)
        }
        console.log(bodyfat)
    })
} else if (calculation == "Lean Body Mass") {

}

function calculateBodyFatMen(waist, neck, height) {
    const log10 = Math.log10;
    return 86.010 * log10(waist - neck) - 70.041 * log10(height) + 36.76;
}

function calculateBodyFatWomen(waist, neck, height, hip) {
    const log10 = Math.log10;
    return 163.205 * log10(waist + hip - neck) - 97.684 * log10(height) - 78.387;
}
