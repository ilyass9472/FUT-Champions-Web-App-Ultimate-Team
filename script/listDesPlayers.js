document.addEventListener("DOMContentLoaded", () => {
    const playerListContainer = document.getElementById("playerList");
    const terrainSlots = document.querySelectorAll(".terrain-slot");

    fetch("../data/players.json")
        .then((response) => response.json())
        .then((data) => {
            const players = data.players;
            players.forEach((player) => {
                const cardHTML = createPlayerCard(player);
                playerListContainer.innerHTML += cardHTML;
            });

            enableDragAndDrop();
        })
        .catch((error) => console.error("Error fetching player data:", error));

    function createPlayerCard(player) {
        return `
            
        `;
    }

    function enableDragAndDrop() {
        const playerCards = document.querySelectorAll(".player-card");

        playerCards.forEach((card) => {
            card.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text/plain", card.outerHTML);
                setTimeout(() => card.style.display = "none", 0);
            });

            card.addEventListener("dragend", () => {
                card.style.display = "block";
            });
        });

        terrainSlots.forEach((slot) => {
            slot.addEventListener("dragover", (e) => {
                e.preventDefault();
                slot.classList.add("highlight");
            });

            slot.addEventListener("dragleave", () => {
                slot.classList.remove("highlight");
            });

            slot.addEventListener("drop", (e) => {
                e.preventDefault();
                slot.classList.remove("highlight");
                const cardHTML = e.dataTransfer.getData("text/plain");
                slot.innerHTML = cardHTML;

                const droppedCard = slot.querySelector(".player-card");
                droppedCard.style.display = "block";
                droppedCard.addEventListener("dragstart", (e) => {
                    e.dataTransfer.setData("text/plain", cardHTML);
                    setTimeout(() => droppedCard.style.display = "none", 0);
                });
            });
        });
    }
});
