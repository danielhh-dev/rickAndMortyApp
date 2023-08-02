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

        characterCards.appendChild(characterCard);
      });
    })
    .catch((error) => console.error("Error fetching data:", error));
});
