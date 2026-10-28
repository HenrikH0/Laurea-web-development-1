//1
const animalForm = document.getElementById("animalForm");

animalForm.addEventListener("submit", function(event) {
  event.preventDefault();

const name = document.getElementById("animalName").value.trim();
const species = document.getElementById("animalSpecies").value.trim();
const note = document.getElementById("careNote").value.trim();

const nameError = document.getElementById("nameError");
const speciesError = document.getElementById("speciesError");
const noteError = document.getElementById("noteError");
const formResult = document.getElementById("formResult");

nameError.textContent = "";
speciesError.textContent = "";
noteError.textContent = "";
formResult.textContent = "";

let isValid = true;

if (name === "") {
    nameError.textContent = "Anna eläimen nimi.";
    isValid = false;
  }
if (species === "") {
    speciesError.textContent = "Anna eläimen laji.";
    isValid = false;
  }

if (note.length < 1 || note.length > 150) {
    noteError.textContent =
        "Hoitomuistion pitää olla 1–150 merkkiä pitkä.";
    isValid = false;
  }

if (isValid) if (isValid) {
	console.log(name + " / " + species + " / " + note);
	formResult.textContent = name + " / " + species + " / " + note;

const animal = {
	name: name,
	species: species,
	note: note
};
localStorage.setItem("ws05Animal", JSON.stringify(animal));
animalForm.reset();
}
});

//2

const sponsorForm = document.getElementById("sponsorForm");

sponsorForm.addEventListener("submit", function(event) {
    event.preventDefault();

const vuosimaksu = Number(document.getElementById("animalType").value);
const vuodetInput = document.getElementById("years");
const vuodet = vuodetInput.valueAsNumber;
const cost = document.getElementById("cost");
const discountMessage = document.getElementById("discountMessage");

if (vuodetInput.value.trim() === "" || !Number.isInteger(vuodet) || vuodet <= 0) {
    cost.textContent = "Anna positiivinen kokonaisluku vuosille.";
    discountMessage.textContent = "";
    return;
}

let hinta = vuosimaksu * vuodet;
let alennus = "Ei alennusta.";

if (vuodet > 2) {
    hinta = hinta * 0.80;
    alennus = "20 % alennus.";
}

if (vuodet >= 5) {
    hinta = hinta - 5;
    alennus = "20 % alennus ja lisäksi 5 € alennus.";
}

cost.textContent = "Yhteensä: " + hinta.toFixed(2) + " €";
discountMessage.textContent = "Alennustieto: " + alennus;
});

//4
function loadAnimal() {
    const savedAnimal = document.getElementById("savedAnimal");
    const data = localStorage.getItem("ws05Animal");

    if (data === null) {
        savedAnimal.textContent = "Ei vielä tallennettua eläintä.";
        return;
    }
    const animal = JSON.parse(data);
    savedAnimal.textContent = "Nimi: " + animal.name + " / Laji: " + animal.species + " / Hoitomuistio: " + animal.note;
}
document.getElementById("loadAnimal").addEventListener("click", function() {
    loadAnimal();
});
document.getElementById("clearAnimal").addEventListener("click", function() {
    localStorage.removeItem("ws05Animal");
    document.getElementById("savedAnimal").textContent = "Ei vielä tallennettua eläintä.";
});
loadAnimal();
