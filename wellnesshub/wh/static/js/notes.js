const notes_div = document.getElementById("notes-div");
const add_notes_div = document.getElementById("add-notes-div");

function new_note() {
    notes_div.style.display = "block";
    add_notes_div.style.display = "block";
    notes_div.style.animation = "fade_out 0.5s ease";

    const handleNotesFadeOut = function () {
        notes_div.style.animation = "";
        notes_div.style.display = "none";

        add_notes_div.style.display = "block";
        add_notes_div.style.animation = "fade_in 0.5s ease";

        const handleAddNotesFadeIn = function () {
            add_notes_div.style.animation = "";
            add_notes_div.removeEventListener("animationend", handleAddNotesFadeIn);
        };

        add_notes_div.addEventListener("animationend", handleAddNotesFadeIn);
        notes_div.removeEventListener("animationend", handleNotesFadeOut);
    };

    notes_div.addEventListener("animationend", handleNotesFadeOut);
}

function close_note() {
    add_notes_div.style.animation = "fade_out 0.5s ease";

    const handleAddNotesFadeOut = function () {
        add_notes_div.style.animation = "";
        add_notes_div.style.display = "none";

        notes_div.style.display = "block";
        notes_div.style.animation = "fade_in 0.5s ease";

        const handleNotesFadeIn = function () {
            notes_div.style.animation = "";
            notes_div.removeEventListener("animationend", handleNotesFadeIn);
        };

        notes_div.addEventListener("animationend", handleNotesFadeIn);
        add_notes_div.removeEventListener("animationend", handleAddNotesFadeOut);
    };

    add_notes_div.addEventListener("animationend", handleAddNotesFadeOut);
}

function save_note() {
    add_notes_div.style.animation = "fade_out 0.5s ease";

    const handleAddNotesFadeOut = function () {
        add_notes_div.style.animation = "";
        add_notes_div.style.display = "none";

        notes_div.style.display = "block";
        notes_div.style.animation = "fade_in 0.5s ease";

        const handleNotesFadeIn = function () {
            notes_div.style.animation = "";
            notes_div.removeEventListener("animationend", handleNotesFadeIn);
        };

        notes_div.addEventListener("animationend", handleNotesFadeIn);
        add_notes_div.removeEventListener("animationend", handleAddNotesFadeOut);
    };

    add_notes_div.addEventListener("animationend", handleAddNotesFadeOut);
}