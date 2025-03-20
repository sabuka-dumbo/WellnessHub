const notes_div = document.getElementById("notes-div");
const add_notes_div = document.getElementById("add-notes-div");

const note_text = document.getElementById("note_text");
const notes_title2 = document.getElementById("notes-title2");

function new_note() {
    notes_div.style.display = "block";
    add_notes_div.style.display = "block";
    notes_div.style.animation = "fade_out 0.5s ease";

    const handleNotesFadeOut = function () {
        notes_title2.value = '';
        note_text.value = '';

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
        notes_title2.value = '';
        note_text.value = '';

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
    if (notes_title2.value && note_text.value) {
        // FIRST SEND THEM TO BACK
        
        add_notes_div.style.animation = "fade_out 0.5s ease";

        const handleAddNotesFadeOut = function () {
            notes_title2.value = '';
            note_text.value = '';
    
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
    } else {
        // GIVE ALARM TO PERSON, THAT ALL OF THE FIELDS MUST BE FILLED!
    }
}

/* 

fetch("/edit_word/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            "old_word": old_word,
            "old_meaning": old_meaning,
            "new_word": edit_input.value,
            "new_meaning": edit_input2.value,
        }),
    })
    .then(response => response.json())
    .then(data => {
        let done = data.done;

        if (done == false) {
            warning_div.style.display = 'block';
            warning_div.style.animation = 'warning-animation 1s ease';
            warning_text.innerText = "Please fill in all the fields above";
            
            warning_div.addEventListener("animationend", function() {
                warning_div.style.animation = '';
                warning_div.style.display = "block";
                
                setTimeout(function() {
                    warning_div.style.animation = 'warning-animation2 2s ease';
            
                    warning_div.addEventListener("animationend", function() {
                        warning_div.style.animation = '';
                        warning_div.style.display = "none";
                    });
                }, 1500);
            });
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

*/