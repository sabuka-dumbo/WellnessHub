const notes_div = document.getElementById("notes-div");
const add_notes_div = document.getElementById("add-notes-div");
const read_notes_div = document.getElementById("read-notes-div");

const note_text = document.getElementById("note_text");
const notes_title2 = document.getElementById("notes-title2");

let current_title = '';
let current_text = '';

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

        fetch("/add_note/", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                "note_title": notes_title2.value,
                "note_text": note_text.value,
            }),
        })
        .then(response => response.json())
        .then(data => {
            let saved = data.saved;
            let note_id = data.note_id;
            let note_date = new Date(data.note_date);
            let formattedDate = note_date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
            });

            notes_div.innerHTML += `
                <div class="note" id='note${note_id}'>
                    <h1 class="note-title">${notes_title2.value}</h1>
                    <h1 class="note-date">${formattedDate}</h1>
                    <button class="note-button1" onclick="delete_note('${note_id}')" style="cursor: pointer;">Delete Note</button>
                    <button class="note-button2" onclick="read_note('${note_id}')" style="cursor: pointer;">Read Note</button>
                </div>
            `;

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
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        // GIVE ALARM TO PERSON, THAT ALL OF THE FIELDS MUST BE FILLED!
    }
}

function delete_note(pk) {
    fetch("/delete_note/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            "note_pk": pk,
        }),
    })
    .then(response => response.json())
    .then(data => {
        let deleted = data.delete;

        let noteDiv = notes_div.querySelector(`#note${pk}`);

        if (noteDiv) {
            noteDiv.remove();
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function read_note(pk) {
    fetch("/read_note/", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            "note_pk": pk,
        }),
    })
    .then(response => response.json())
    .then(data => {
        let title = data.title;
        let text = data.text;

        current_text = text;
        current_title = title;

        notes_div.style.animation = "fade_out 0.5s ease";

        notes_div.addEventListener("animationend", function() {
            notes_div.style.animation = '';
            notes_div.style.display = "none";
            read_notes_div.style.animation = "fade_in 0.5s ease";
            read_notes_div.style.display = "block";

            document.getElementById("read-notes-title2").value = title;
            document.getElementById("read_note_text").value = text;

            read_notes_div.addEventListener("animationend", function() {
                read_notes_div.style.animation = '';
            }, { once: true });
        }, { once: true });
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function close_note() {
    if (read_notes_div.style.display === "block") {
        read_notes_div.style.animation = "fade_out 0.5s ease";

        read_notes_div.addEventListener("animationend", function() {
            read_notes_div.style.animation = '';
            read_notes_div.style.display = "none";

            notes_div.style.display = "block";
            notes_div.style.animation = "fade_in 0.5s ease";

            notes_div.addEventListener("animationend", function() {
                notes_div.style.animation = '';
            }, { once: true });
        }, { once: true });

    } else if (add_notes_div.style.display === "block") {
        add_notes_div.style.animation = "fade_out 0.5s ease";

        add_notes_div.addEventListener("animationend", function() {
            add_notes_div.style.animation = '';
            add_notes_div.style.display = "none";

            notes_div.style.display = "block";
            notes_div.style.animation = "fade_in 0.5s ease";

            notes_div.addEventListener("animationend", function() {
                notes_div.style.animation = '';
            }, { once: true });
        }, { once: true });
    }
}

function edit_note() {
    read_notes_div.style.display = "block";
    add_notes_div.style.display = "block";
    read_notes_div.style.animation = "fade_out 0.5s ease";
    notes_title2.value = current_title;
    note_text.value = current_text;
    console.log(notes_title2.value, current_title)

    const handleNotesFadeOut = function () {
        read_notes_div.style.animation = "";
        read_notes_div.style.display = "none";

        add_notes_div.style.display = "block";
        add_notes_div.style.animation = "fade_in 0.5s ease";

        const handleAddNotesFadeIn = function () {
            add_notes_div.style.animation = "";
            add_notes_div.removeEventListener("animationend", handleAddNotesFadeIn);
        };

        add_notes_div.addEventListener("animationend", handleAddNotesFadeIn);
        read_notes_div.removeEventListener("animationend", handleNotesFadeOut);
    };

    notes_div.addEventListener("animationend", handleNotesFadeOut);
}