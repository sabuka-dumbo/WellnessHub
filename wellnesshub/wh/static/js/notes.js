const notes_div = document.getElementById("notes-div");
const add_notes_div = document.getElementById("add-notes-div");

function new_note() {
    notes_div.style.display = "block";
    add_notes_div.style.display = "block";

    notes_div.style.animation = "fade_out 0.5s ease";

    notes_div.addEventListener("animationend", function() {
        notes_div.style.animation = "";
        notes_div.style.display = "none";

        add_notes_div.style.display = "block"
        add_notes_div.style.animation = "fade_in 0.5s ease";
    })
}