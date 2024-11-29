async function loadCards() {
    try {
      // Fetch the JSON data
      const response = await fetch('data.json');
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      
      const cards = await response.json();
      const container = document.getElementById('cardContainer');
      container.innerHTML = '';
      cards.forEach((card) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add(
          'card-bg',
          'text-white',
          'w-48',
          'p-3',
          "bg-[url('https://placehold.co/200x300')]",
          'bg-cover',
          'bg-center'
        );
  
        cardElement.innerHTML = `
          <div class="flex justify-between items-center">
            <div class="text-center">
              <div class="text-2xl font-bold">${card.rating}</div>
              <div class="text-sm font-semibold">${card.position}</div>
            </div>
            <img alt="Flag" class="w-6 h-6 rounded-full border-2 border-white" src="${card.flag}" />
          </div>
          <div class="mt-2 flex justify-center">
            <img alt="Player Image" class="rounded-full w-16 h-16 border-4 border-gray-100" src="${card.playerImage}" />
          </div>
          <div class="mt-2 text-center text-lg font-bold">${card.playerName}</div>
          <div class="grid grid-cols-3 gap-1 mt-3 text-center text-xs font-semibold stats-bg p-2">
            ${Object.entries(card.stats)
              .map(
                ([key, value]) => `
                <div>
                  <div class="text-base font-bold">${value}</div>
                  <div class="text-gray-300">${key}</div>
                </div>`
              )
              .join('')}
          </div>
        `;
        container.appendChild(cardElement);
      });
    } catch (error) {
      console.error('Error loading cards:', error);
    }
  }
  document.addEventListener('DOMContentLoaded', loadCards);
  