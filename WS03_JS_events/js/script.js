function showTable() {
    const animal = "Tiikeri";
    const habitat = "Metsä";
    const diet = "Liha";

    const animal2 = "Norsu";
    const habitat2 = "Savanni";
    const diet2 = "Kasvit";

    const table = `
        <table>
                <tr>
                    <th>Eläin</th>
                    <th>Elinympäristö</th>
                    <th>Ruokavalio</th>
                </tr>
                <tr>
                    <td>${animal}</td>
                    <td>${habitat}</td>
                    <td>${diet}</td>
                </tr>
                <tr>
                    <td>${animal2}</td>
                    <td>${habitat2}</td>
                    <td>${diet2}</td>
                </tr>
        </table>
    `;
    const container = document.querySelector("#tableContainer");
    container.innerHTML = table;
}

const harjoitus1 = document.querySelector("h2:nth-of-type(1)");
const harjoitus2 = document.querySelector("h2:nth-of-type(2)");
harjoitus2.addEventListener("mouseover", function() {
    console.log("stepped over me with a mouse!");
});
harjoitus1.addEventListener("click", function() {
    harjoitus1.style.color = "red";
    harjoitus1.innerHTML = "Bye Bye mouse!";
});

const feedback = document.querySelector("#feedback");
const status = document.querySelector("#status");
const charcount = document.querySelector("#charcount");
const preview = document.querySelector("#preview");

feedback.addEventListener("blur", function() {
    status.innerHTML = "Kirjoita palautteesi!";
    feedback.style.backgroundColor = "#ffffcc";
});
feedback.addEventListener("blur", function() {
    status.innerHTML = "";
    feedback.style.backgroundColor = "";
});
feedback.addEventListener("input", function() {
    const text = feedback.value;
    charcount.innerHTML = text.length + "/200";
    preview.innerHTML = text;
});

const form = document.querySelector("#feedbackForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    const text = feedback.value;
    if (text.length < 10 || text.length > 200) {
        status.innerHTML = "Palaute täytyy olla 10–200 merkkiä pitkä.";
        return;
    }
feedback.value = "";
status.innerHTML = "Kiitos palautteestasi!";
charcount.innerHTML = "0/200";
preview.innerHTML = "";