console.log("JS LOADED");
window.sendMessage = function () {
    let input = document.getElementById("messageInput");
    let message = input.value.trim();
    let chatBox = document.getElementById("chatBox");

    if (message === "") return;

    let studentMsg = document.createElement("p");
    studentMsg.className = "student";
    studentMsg.innerHTML = "<strong>Studerende:</strong> " + message;
    chatBox.appendChild(studentMsg);

    input.value = "";

    setTimeout(() => {
        let tutorMsg = document.createElement("p");
        tutorMsg.className = "tutor";

        if (message.toLowerCase().includes("projekt")) {
            tutorMsg.innerHTML = "<strong>Tutor:</strong> Start med problemformuleringen og arbejd derfra.";
        } else {
            tutorMsg.innerHTML = "<strong>Tutor:</strong> Det er et godt spørgsmål! Prøv at uddybe det.";
        }

        chatBox.appendChild(tutorMsg);
    }, 1000);
};

function searchNotes() {
    let input = document.getElementById("searchInput").value.toLowerCase();
    let notes = document.getElementsByClassName("note");

    for (let i = 0; i < notes.length; i++) {
        let text = notes[i].innerText.toLowerCase();

        if (text.includes(input)) {
            notes[i].style.display = "";
        } else {
            notes[i].style.display = "none";
        }
    }
}
};
