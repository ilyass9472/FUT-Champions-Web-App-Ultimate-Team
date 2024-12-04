document.getElementById('openModal').addEventListener('click', () => {
    document.getElementById('modal-add-card').classList.remove('hidden');
  });
  
  document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('modal-add-card').classList.add('hidden');
  });
  
  document.getElementById('addCardForm').addEventListener('submit', (e) => {
    e.preventDefault();
  
    
    const playerName = document.getElementById('playerName').value;
    const nationality = document.getElementById('nationality').value;
    const position = document.getElementById('position').value;
    const rating = document.getElementById('rating').value;
    const pac = document.getElementById('pac').value;
    const sho = document.getElementById('sho').value;
    const pas = document.getElementById('pas').value;
    const dri = document.getElementById('dri').value;
    const def = document.getElementById('def').value;
    const phy = document.getElementById('phy').value;
  
    
    const cardHTML = `
      <div class="player-card text-white w-35 h-30 rounded-lg p-2 shadow-lg bg-gray-800" draggable="true" data-player="${playerName}">
        <div class="flex justify-between items-center">
          <div class="text-center">
            <p class="text-[8px] font-bold">${rating}</p>
            <p class="text-[8px] font-semibold">${position}</p>
          </div>
          <img
            src="https://flagcdn.com/w320/${nationality.slice(0, 2).toLowerCase()}.png"
            alt="${nationality} Flag"
            class="w-4 h-4 rounded-full border border-white"
          />
        </div>
        <div class="flex justify-center mt-2">
          <img
            src="https://via.placeholder.com/48?text=${playerName.charAt(0)}"
            alt="${playerName}"
            class="rounded-full w-12 h-12 border border-gray-300"
          />
        </div>
        <div class="text-center text-sm pt-2 font-bold">
          <h1 class="text-[8px]">${playerName}</h1>
        </div>
        <div class="flex flex-wrap justify-center mt-2">
          <div class="w-1/3 text-center">
            <p class="text-[6px] font-semibold">${pac}</p>
            <p class="text-[6px] text-gray-300">PAC</p>
          </div>
          <div class="w-1/3 text-center">
            <p class="text-[6px] font-semibold">${sho}</p>
            <p class="text-[6px] text-gray-300">SHO</p>
          </div>
          <div class="w-1/3 text-center">
            <p class="text-[6px] font-semibold">${pas}</p>
            <p class="text-[6px] text-gray-300">PAS</p>
          </div>
          <div class="w-1/3 text-center">
            <p class="text-[6px] font-semibold">${dri}</p>
            <p class="text-[6px] text-gray-300">DRI</p>
          </div>
          <div class="w-1/3 text-center">
            <p class="text-[6px] font-semibold">${def}</p>
            <p class="text-[6px] text-gray-300">DEF</p>
          </div>
          <div class="w-1/3 text-center">
            <p class="text-[6px] font-semibold">${phy}</p>
            <p class="text-[6px] text-gray-300">PHY</p>
          </div>
        </div>
      </div>
    `;
  
    
    const cardContainer = document.getElementById('cardContainer');
    const newCard = document.createElement('div');
    newCard.innerHTML = cardHTML.trim();
    cardContainer.appendChild(newCard.firstChild);
  
  
    document.getElementById('modal-add-card').classList.add('hidden');
  });