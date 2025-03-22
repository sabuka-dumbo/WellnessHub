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

    calc_field1.value = '';
    calc_field2.value = '';
    calc_field3.value = '';
    calc_field4.value = '';
    calc_field5.value = '';
    calc_field6.value = '';

    calc_field1.placeholder = "Enter Height";
    calc_field2.placeholder = "Enter Weight";
    calc_field3.placeholder = "Enter Neck Circumference";
    calc_field4.placeholder = "Enter Hip Circumference";
    calc_field5.placeholder = "Enter Waist Circumference";

    submit.addEventListener("click", function() {
        let bodyfat;
        if (MorF1.checked) {
            bodyfat = calculateBodyFatWomen(calc_field5.value, calc_field3.value, calc_field1.value, calc_field4.value);
        } else {
            bodyfat = calculateBodyFatMen(calc_field5.value, calc_field3.value, calc_field1.value);
        }

        const result2_title = document.getElementById("result2-title");
        const results_title2 = document.getElementById("results-title2");

        result2_title.innerText = Math.floor(bodyfat * 10) / 10 + "% Body Fat";
        results_title2.innerText = Math.floor(bodyfat * 10) / 10 + "% Body Fat";

        const result_for_ai = Math.floor(bodyfat * 10) / 10;
        const result2_for_ai = "Body Fat";

        async function generateInsight() {
            const prompt = `Give a short health explanation about a person with ${result_for_ai}% ${result2_for_ai}. Include if it's normal or not, what it could mean, and any possible health effects.`;

            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer YOUR_API_KEY_HERE"
                },
                body: JSON.stringify({
                    model: "gpt-3.5-turbo",
                    messages: [
                        { role: "user", content: prompt }
                    ]
                })
            });

            const data = await response.json();
            const aiReply = data.choices[0].message.content;
            document.getElementById("aiInsight").innerText = aiReply;
        }

        generateInsight();
    });
}

function leanmasscalculation() {
    calculator_title.innerText = "Lean Body Mass Calculator:"

    calc_field1.style.opacity = "100%";
    calc_field2.style.opacity = "100%";
    calc_field3.style.opacity = "50%";
    calc_field4.style.opacity = "50%";
    calc_field5.style.opacity = "50%";
    calc_field6.style.opacity = "50%";

    calc_field1.value = '';
    calc_field2.value = '';
    calc_field3.value = '';
    calc_field4.value = '';
    calc_field5.value = '';
    calc_field6.value = '';

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
        let result2 = 0;

        if (MorF1.checked) {
            result2 = calculateLeanMassWomen(calc_field1.value, calc_field2.value)
        } else {
            result2 = calculateLeanMassMen(calc_field1.value, calc_field2.value)
        }

        let last_result = (Math.floor(result2 * 10) / 10) + " Kg Mass"

        const result2_title = document.getElementById("result2-title");
        const results_title2 = document.getElementById("results-title2");

        result2_title.innerText = last_result;
        results_title2.innerText = last_result;
    })
}

function BMIcalculator() {
    calculator_title.innerText = "BMI Calculator:"

    calc_field1.style.opacity = "100%";
    calc_field2.style.opacity = "100%";
    calc_field3.style.opacity = "50%";
    calc_field4.style.opacity = "50%";
    calc_field5.style.opacity = "50%";
    calc_field6.style.opacity = "50%";

    calc_field1.value = '';
    calc_field2.value = '';
    calc_field3.value = '';
    calc_field4.value = '';
    calc_field5.value = '';
    calc_field6.value = '';

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
        let result2 = 0;

        if (MorF1.checked) {
            result2 = calculateBMI(calc_field1.value, calc_field2.value)
        } else {
            result2 = calculateBMI(calc_field1.value, calc_field2.value)
        }

        let last_result = (Math.floor(result2 * 10) / 10) + " Kg Mass"

        const result2_title = document.getElementById("result2-title");
        const results_title2 = document.getElementById("results-title2");

        result2_title.innerText = last_result;
        results_title2.innerText = last_result;
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

function calculateBMI(height, weight) {
    const heightM = height / 100;
    const bmi = weight / (heightM * heightM);
    return Math.round(bmi * 10) / 10;
}