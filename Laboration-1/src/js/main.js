/*Program som visar en bild när knappeen på index sidan klickas*/
"use strict";

window.onload = getJammed;

function getJammed() {
    let button = document.querySelector(".btn");
    let jam = document.querySelector(".jammed");

    button.addEventListener("click", () => {
        if (jam.style.display === "") {
            jam.style.display = "block";
        } else {
            jam.style.display = "";
        }
    });
}

/*TIDIGARE IF-STATEMENT:

 if (jam.style.display === "none") {
            jam.style.display = "block";
        } else {
            jam.style.display = "none";
        }

Problem: Behövde klicka två gånger på knappen för att aktivera click-event
Lösning: Genom att ge style.display ett tomt värde istället för "none" aktiveras eventet vid första klick
 */