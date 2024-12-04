function enableDragAndDrop(players) {
    const terrainSlots = document.querySelectorAll(".terrain-slot");

    
    function makeCardDraggable(card) {
        card.addEventListener("dragstart", (e) => {
            const cardHTML = card.outerHTML;
            e.dataTransfer.setData("text/html", cardHTML);

            const parentSlot = card.parentElement;
            if (parentSlot.classList.contains("terrain-slot")) {
                parentSlot.setAttribute("data-dragged", "true");
            }

            setTimeout(() => {
                card.style.display = "none";
            }, 0);
        });

        card.addEventListener("dragend", (e) => {
            card.style.display = "block";
        });
    }

    
    terrainSlots.forEach((slot) => {
        slot.addEventListener("dragover", (e) => {
            e.preventDefault();
            slot.classList.add("bg-gray-200");
        });

        slot.addEventListener("dragleave", () => {
            slot.classList.remove("bg-gray-200");
        });

        slot.addEventListener("drop", (e) => {
            e.preventDefault();
            slot.classList.remove("bg-gray-200");

            
            if (slot.innerHTML.trim() !== "" && !slot.getAttribute("data-dragged")) {
                alert("This slot is already occupied!");
                return;
            }

            
            const cardHTML = e.dataTransfer.getData("text/html");

            if (cardHTML) {
                
                
                slot.innerHTML = cardHTML;


                const droppedCard = slot.querySelector(".player-card");
                makeCardDraggable(droppedCard);

                
                const previousSlot = document.querySelector(".terrain-slot[data-dragged='true']");
                if (previousSlot) {
                    previousSlot.innerHTML = "";
                    previousSlot.removeAttribute("data-dragged");
                }
            }
        });
    });

    
    const playerCards = document.querySelectorAll(".player-card");
    playerCards.forEach((card) => {
        makeCardDraggable(card);
    });
}