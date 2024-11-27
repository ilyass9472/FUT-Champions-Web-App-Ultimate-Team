const data = {
    home: [
      { name: 'Ronaldo', img: 'ronaldo.png', height: 180, goals: 22, position: [60, 70] },
      { name: 'Bale', img: 'bale.png', height: 175, goals: 12, position: [210, 150] },
      { name: 'Benzema', img: 'benzema.png', height: 180, goals: 19, position: [360, 50] }
    ],
    away: [
      { name: 'Messi', img: 'messi.png', height: 165, goals: 30, position: [60, 70] },
      { name: 'Neymar', img: 'neymar.png', height: 170, goals: 20, position: [210, 150] },
      { name: 'Suarez', img: 'suarez.png', height: 180, goals: 18, position: [360, 50] }
    ]
  };
  
  const state = {
    currentTeam: 'home',
    switchSides: function () {
      this.currentTeam = this.currentTeam === 'home' ? 'away' : 'home';
    }
  };
  
  const displayNone = (selector) => $(selector).css('display', 'none');
  const displayBlock = (selector) => $(selector).css('display', 'block');
  
  const addPlayer = (player) => {
    const $player = $('<div class="player">').append(
      $('<img>').attr('src', player.img),
      $('<div class="info">').append(
        $('<h2>').text(player.name),
        $('<p>').text(`Height: ${player.height}cm`),
        $('<p>').text(`Goals: ${player.goals}`)
      )
    );
  
    $player.css({ left: player.position[0], top: player.position[1] });
    $player.on('click', () => {
      $player.velocity({ scale: 1.5 }, 300);
    });
  
    $('#field').append($player);
  };
  
  const addPlayers = (team) => {
    data[team].forEach((player) => addPlayer(player));
  };
  
  const setup = () => {
    addPlayers(state.currentTeam);
  
    $('#switch').on('click', () => {
      state.switchSides();
      $('#field').empty();
      addPlayers(state.currentTeam);
    });
  
    $('#field').on('mouseleave', () => {
      $('.player').velocity({ scale: 1 }, 300);
    });
  };
  
  $(document).ready(setup);
  