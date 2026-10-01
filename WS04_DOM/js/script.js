//teht 1
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function() {
    taskOneHeading.textContent = "Muokattu otsikko!";
});

const changeStyleButton = document.querySelector("#changeStyleButton");

changeStyleButton.addEventListener("click", function() {
    taskOneHeading.classList.toggle("highlight");
});

const changeTextButton = document.querySelector("#changeTextButton");
const animalText = document.querySelector("#animalText");

changeTextButton.addEventListener("click", function() {
    animalText.textContent = "Tiikeri on kissaeläin.";
});

//teht 2
const animalContent = document.querySelector("#animalContent");

const animalHeading = document.createElement("h3");
animalHeading.textContent = "Päivän eläin";
animalHeading.classList.add("animal-heading");

const animalParagraph = document.createElement("p");
animalParagraph.textContent = "Pingviinit ovat lentokyvyttömiä, vesielämään sopeutuneita lintuja.";

const createdAnimalImage = document.createElement("img");
createdAnimalImage.src = "images/penguin.png";
createdAnimalImage.alt = "Pingviini";
animalContent.append(animalHeading, animalParagraph, createdAnimalImage);
const hideAnimalButton = document.querySelector("#hideAnimalButton");
const showAnimalButton = document.querySelector("#showAnimalButton");

hideAnimalButton.addEventListener("click", function() {
    animalContent.hidden = true;
});
showAnimalButton.addEventListener("click", function() {
    animalContent.hidden = false;
});

//animal table
const animalButton = document.querySelector("#animalButton");
const animalTable = document.querySelector("#animalTable");

animalButton.addEventListener("click", function() {
    animalTable.hidden = !animalTable.hidden;
    console.log("nappia painettu!");
}); 

//teh3
const animalSelect = document.querySelector("#animalSelect");
const animalName = document.querySelector("#animalName");
const animalImage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function() {
    const selectedAnimal = animalSelect.value;
    console.log("selected animal:", selectedAnimal);

    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri";
        animalImage.src = "images/tiger.png";
        animalImage.alt = "Tämä on tiikeri";
        animalDescription.textContent = "Tiikerit on raidallisia ja melko rauhallisia eläimiä.";
    }
    if (selectedAnimal === "penguin") {
        animalName.textContent = "Pingviini";
        animalImage.src = "images/penguin.png";
        animalImage.alt = "Tämä on pingviini";
        animalDescription.textContent = "Pingviinit ovat lentokyvyttömiä, vesielämään sopeutuneita lintuja.";
    }
    if (selectedAnimal === "panda") {
        animalName.textContent = "Panda";
        animalImage.src = "images/panda.png";
        animalImage.alt = "Tämä on panda";
        animalDescription.textContent = "Panda on kiinan vuoristometsissä elävä karhu eläin.";
    }
});

animalImage.addEventListener("mouseenter", function() {
    animalImage.classList.add("image-highlight");
});

animalImage.addEventListener("mouseleave", function() {
    animalImage.classList.remove("image-highlight");
});
//teht 4
const animalForm = document.querySelector("#animalForm");
const observationAnimal = document.querySelector("#observationAnimal");
const observationLocation = document.querySelector("#observationLocation");
const observationDate = document.querySelector("#observationDate");
const observationTableBody = document.querySelector("#observationTableBody");

animalForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const animal = observationAnimal.value.trim();
    const location = observationLocation.value.trim();
    const date = observationDate.value;

    if (animal === "" || location === "" || date === "") {
        alert("Täytä kaikki kentät!");
        return;
    }

    const newRow = document.createElement("tr");
    const animalCell = document.createElement("td");
    const locationCell = document.createElement("td");
    const dateCell = document.createElement("td");

    animalCell.textContent = animal;
    locationCell.textContent = location;

    const dateParts = date.split("-");
    dateCell.textContent = `${dateParts[2]}.${dateParts[1]}.${dateParts[0]}`;

    newRow.append(animalCell, locationCell, dateCell);
    observationTableBody.append(newRow);
    animalForm.reset();
});
