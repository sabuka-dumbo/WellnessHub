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
        let height = parseFloat(calc_field1.value);
        let weight = parseFloat(calc_field2.value); // optional, not used
        let neck = parseFloat(calc_field3.value);
        let hip = parseFloat(calc_field4.value);
        let waist = parseFloat(calc_field5.value);

        let bodyfat;

        if (MorF1 === true) {
            bodyfat = calculateBodyFatWomen(waist, neck, height, hip);
        } else {
            bodyfat = calculateBodyFatMen(waist, neck, height);
        }
                
        console.log("Body Fat %:", bodyfat.toFixed(1));
    });
}
    
function calculateBodyFatMen(waist, neck, height) {
    return 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
}

function calculateBodyFatWomen(waist, neck, height, hip) {
    return 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
}