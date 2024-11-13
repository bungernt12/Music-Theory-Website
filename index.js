const chords = {
    "A": ["A", "C#", "E"],
    "Am": ["A", "C", "E"],
    "B": ["B", "D#", "F#"],
    "Bm": ["B", "D", "F#"],
    "C": ["C", "E", "G"],
    "Cm": ["C", "D#", "G"],
    "D": ["D", "F#", "A"],
    "Dm": ["D", "F", "A"],
    "E": ["E", "G#", "B"],
    "Em": ["E", "G", "B"],
    "F": ["F", "A", "C"],
    "Fm": ["F", "G#", "C"],
    "G": ["G", "B", "D"],
    "Gm": ["G", "A#", "D"]
};

let currentChord = "";

function generateChord() {
    const chordNames = Object.keys(chords);
    const randomIndex = Math.floor(Math.random() * chordNames.length);
    currentChord = chordNames[randomIndex];
    document.getElementById("chordDisplay").textContent = currentChord;

    clearHighlights();
}

function showChord() {
    if (currentChord) {
        clearHighlights();
        const notes = chords[currentChord];
        notes.forEach(note => {
            document.getElementById(note).classList.add("highlighted");
        });
    }
}

function clearHighlights() {
    const keys = document.querySelectorAll(".key");
    keys.forEach(key => key.classList.remove("highlighted"));
}

const keys = document.querySelectorAll('.piano-keys');

// Creating a object of Audio with a default sound
const pianoSound = new Audio('./KeySounds/key01.mp3');

keys.forEach((key)=> {
    key.addEventListener('click', (e) =>{
        const clickedKey = e.target.dataset.list;
        pianoSound.src = `./KeySounds/key${clickedKey}.mp3`;
        pianoSound.play();
    });
})

