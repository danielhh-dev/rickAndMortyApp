document.addEventListener("DOMContentLoaded", () => {
  const characterCards = document.getElementById("characterCards");

  fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results;

      characters.forEach((character) => {
        const characterCard = document.createElement("div");
        characterCard.classList.add("character-card");

        const img = document.createElement("img");
        img.src = character.image;
        characterCard.appendChild(img);

        const name = document.createElement("h2");
        name.textContent = character.name;
        characterCard.appendChild(name);

        const species = document.createElement("p");
        species.textContent = character.species;
        characterCard.appendChild(species);

        characterCards.appendChild(characterCard);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
