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

let calculation = "Body Fat";

if (calculation == "Body Fat") {
    calc_field1.style.display = "block";
    calc_field2.style.display = "block";
    calc_field3.style.display = "block";

    calc_field1_1.style.display = "block";
    calc_field2_2.style.display = "block";
    calc_field3_3.style.display = "block";

    calc_field1.placeholder = "sa";
} else if (calculation == "Lean Body Mass") {

}