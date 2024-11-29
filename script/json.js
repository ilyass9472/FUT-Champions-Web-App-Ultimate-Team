<html>
<head>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"></link>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            fetch('data.json')
                .then(response => response.json())
                .then(data => {
                    const cardContainer = document.getElementById('cardContainer');
                    data.players.forEach(player => {
                        const playerCard = `
                            <div class="text-white h-32 bg-[#1d3557] rounded-lg">
                                <div class="flex justify-between px-1 pt-1.5 items-center">
                                    <div class="text-center">
                                        <p class="text-[5px] font-bold">${player.rating}</p>
                                        <p class="text-[5px] font-semibold">${player.position}</p>
                                    </div>
                                    <img 
                                        src="${player.countryFlag}" 
                                        alt="${player.countryAlt}"
                                        class="w-4 h-4 rounded-full border-white"
                                    />
                                </div>
                                <div class="flex justify-center">
                                    <img
                                        src="${player.playerImage}"
                                        alt="${player.playerAlt}"
                                        class="rounded-full w-6 h-6 border-1 border-gray-100 bg-gray-300"
                                    />
                                </div>
                                <div class="text-center text-xs pt-0.5 flex items-center justify-center">
                                    <h1 class="text-[5px]">${player.name}</h1>
                                </div>
                                <div class="flex justify-center w-full">
                                    <div class="flex flex-wrap p-1 w-[90%] justify-center text-center text-xs font-semibold stats-bg">
                                        <div class="w-1/3">
                                            <p class="text-[5px]">${player.stats.PAC}</p>
                                            <p class="text-[5px] text-gray-300">PAC</p>
                                        </div>
                                        <div class="w-1/3">
                                            <p class="text-[5px]">${player.stats.SHO}</p>
                                            <p class="text-[5px] text-gray-300">SHO</p>
                                        </div>
                                        <div class="w-1/3">
                                            <p class="text-[5px]">${player.stats.PAS}</p>
                                            <p class="text-[5px] text-gray-300">PAS</p>
                                        </div>
                                        <div class="w-1/3">
                                            <p class="text-[5px]">${player.stats.DRI}</p>
                                            <p class="text-[5px] text-gray-300">DRI</p>
                                        </div>
                                        <div class="w-1/3">
                                            <p class="text-[5px]">${player.stats.DEF}</p>
                                            <p class="text-[5px] text-gray-300">DEF</p>
                                        </div>
                                        <div class="w-1/3">
                                            <p class="text-[5px]">${player.stats.PHY}</p>
                                            <p class="text-[5px] text-gray-300">PHY</p>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        `;
                        cardContainer.innerHTML += playerCard;
                    });
                });
        });
    </script>
</head>
<body>
    <div class="w-20" id="4_6">
        <div id="cardContainer"></div>
    </div>
</body>
</html>