document.addEventListener("DOMContentLoaded", () => {
    const playerListContainer = document.getElementById("playerList");
    fetch("../data/players.json")
        .then((response) => response.json())
        .then((data) => {
            const players = data.players;
            players.forEach((player) => {
                    const cardHTML = `
                    <div class="player-card text-white w-35 h-30 rounded-lg p-2 shadow-lg bg-gray-800" draggable="true" data-player="${player.name}">
                        <div class="flex justify-between items-center">
                            <div class="text-center">
                                <p class="text-[8px] font-bold">${player.rating}</p>
                                <p class="text-[8px] font-semibold">${player.position}</p>
                            </div>

                            <img src="${player.flag}" alt="${player.nationality} Flag" class="w-4 h-4 rounded-full border border-white">
                        </div>
                        <div class="flex justify-center mt-2">
                         
                            <img src="${player.photo}" alt="${player.name}" class="rounded-full w-12 h-12 border border-gray-300">
                        </div>
                        <div class="flex justify-center mt-1">
                           
                            <img src="${player.logo}" alt="${player.club} Logo" class="w-6 h-6 rounded-lg">
                        </div>
                        <div class="text-center text-sm pt-2 font-bold">
                            
                            <h1 class="text-[8px]">${player.name}</h1>
                        </div>
                        <div class="flex flex-wrap justify-center mt-2">
                            <!-- Player Stats -->
                            <div class="w-1/3 text-center">
                                <p class="text-[6px] font-semibold">${player.pace}</p>
                                <p class="text-[6px] text-gray-300">PAC</p>
                            </div>
                            <div class="w-1/3 text-center">
                                <p class="text-[6px] font-semibold">${player.shooting}</p>
                                <p class="text-[6px] text-gray-300">SHO</p>
                            </div>
                            <div class="w-1/3 text-center">
                                <p class="text-[6px] font-semibold">${player.passing}</p>
                                <p class="text-[6px] text-gray-300">PAS</p>
                            </div>
                            <div class="w-1/3 text-center">
                                <p class="text-[6px] font-semibold">${player.dribbling}</p>
                                <p class="text-[6px] text-gray-300">DRI</p>
                            </div>
                            <div class="w-1/3 text-center">
                                <p class="text-[6px] font-semibold">${player.defending}</p>
                                <p class="text-[6px] text-gray-300">DEF</p>
                            </div>
                            <div class="w-1/3 text-center">
                                <p class="text-[6px] font-semibold">${player.physical}</p>
                                <p class="text-[6px] text-gray-300">PHY</p>
                            </div>
                        </div>
                    </div>
                `;
             playerListContainer.innerHTML += cardHTML;
            });
            enableDragAndDrop();
        })
        .catch((error) => console.error("Error fetching player data:", error)); 
    function enableDragAndDrop() {
        const playerCards = document.querySelectorAll(".player-card");

        playerCards.forEach((card) => {
            card.addEventListener("dragstart", (e) => {
                e.dataTransfer.setData("text/plain", e.target.getAttribute("data-player"));
                setTimeout(() => {
                    e.target.style.display = "none";
                }, 0);
            });

            card.addEventListener("dragend", (e) => {
                e.target.style.display = "block";
            });
        });
    }
});