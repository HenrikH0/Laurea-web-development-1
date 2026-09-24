//teht 1
const changeHeadingButton = document.querySelector("#changeHeadingButton");
const taskOneHeading = document.querySelector("#taskOneHeading");

changeHeadingButton.addEventListener("click", function() {
    taskOneHeading.textContent = "Muokattu otsikko!";
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
const animalimage = document.querySelector("#animalImage");
const animalDescription = document.querySelector("#animalDescription");

animalSelect.addEventListener("change", function() {
    const selectedAnimal = animalSelect.value;
    console.log("selected animal:", selectedAnimal);

    if (selectedAnimal === "tiger") {
        animalName.textContent = "Tiikeri";
        animalimage.src = "images/tiger.png";
        animalimage.alt = "Tämä on tiikeri";
        animalDescription.textContent = "Tiikerit on raidallisia ja melko rauhallisia eläimiä.";
    }

});
