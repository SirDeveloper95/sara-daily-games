const games = [
  {
    name: "Angle",
    emoji: "📐",
    category: "Curiosità",
    description: "Indovina la giusta angolazione.",
    url: "https://angle.wtf/"
  },
  {
    name: "Clue",
    emoji: "🔎",
    category: "Parole",
    description: "Trova la parola corretta dagli indizi.",
    url: "https://www.lilsnack.co/game/clue"
  },
  {
    name: "Crosstune",
    emoji: "🎼",
    category: "Musica",
    description: "Cruciverba musicale.",
    url: "https://crosstune.io/"
  },
  {
    name: "Cutle",
    emoji: "✂️",
    category: "Curiosità",
    description: "Prova a tagliare perfettamente una forma.",
    url: "https://pfiffel.com/cutle/"
  },
  {
    name: "Daily Red",
    emoji: "🧩",
    category: "Curiosità",
    description: "Una sfida Pokémon contro Rosso ogni giorno.",
    url: "https://daily-red.com/"
  },
  {
    name: "Farflung",
    emoji: "✈️",
    category: "Geografia",
    description: "Scopri luoghi misteriosi nel mondo.",
    url: "https://farflung.game/"
  },
  {
    name: "Flagle",
    emoji: "🏴",
    category: "Geografia",
    description: "Indovina la bandiera nascosta.",
    url: "https://flagle-game.com/"
  },
  {
    name: "FoodGuessr",
    emoji: "🍜",
    category: "Curiosità",
    description: "Riconosci piatti da tutto il mondo.",
    url: "https://www.foodguessr.com/"
  },
  {
    name: "Geotrivia",
    emoji: "🌍",
    category: "Geografia",
    description: "Quiz geografici quotidiani.",
    url: "https://geotrivia.com/it"
  },
  {
    name: "Globle",
    emoji: "🌎",
    category: "Geografia",
    description: "Trova il paese misterioso.",
    url: "https://globle-game.com/game"
  },
  {
    name: "Higher or Lower",
    emoji: "📈",
    category: "Curiosità",
    description: "Indovina quale valore è più alto in diverse categorie.",
    url: "https://www.higherorlowergame.com/"
  },
{
    name: "Kordle",
    emoji: "🇰🇷",
    category: "Curiosità",
    description: "Korean Wordle.",
    url: "https://wordly.org/wordle-games/kordle"
  },
{
    name: "Krillion",
    emoji: "🚢",
    category: "Curiosità",
    description: "Quiz quotidiano che premia le risposte più rare.",
    url: "https://krillion.io"
  },
  {
    name: "Narutodle",
    emoji: "🍥",
    category: "Anime",
    description: "Sfide dedicate al mondo di Naruto.",
    url: "https://narutodle.net/"
  },
  {
    name: "OnePiecedle",
    emoji: "☠️",
    category: "Anime",
    description: "Metti alla prova la tua conoscenza di One Piece.",
    url: "https://onepiecedle.net/"
  },
  {
    name: "Parle",
    emoji: "🇮🇹",
    category: "Parole",
    description: "La versione italiana di Wordle.",
    url: "https://wordle.global/it"
  },
  {
    name: "Pokédle",
    emoji: "⚡",
    category: "Anime",
    description: "Indovina il Pokémon corretto.",
    url: "https://pokedle.net/"
  },
  {
    name: "Quordle",
    emoji: "🔠",
    category: "Parole",
    description: "Quattro Wordle collegati contemporaneamente.",
    url: "https://www.merriam-webster.com/games/quordle/#/"
  },
  {
    name: "Songless",
    emoji: "🎵",
    category: "Musica",
    description: "Riconosci la canzone del giorno.",
    url: "https://lessgames.com/songless"
  },
  {
    name: "Songspot",
    emoji: "🎧",
    category: "Musica",
    description: "Indovina il brano ascoltandolo.",
    url: "https://songspot.net/"
  },
 {
    name: "SpellingBee",
    emoji: "🤔",
    category: "Parole",
    description: "Esercizio di Spelling.",
    url: "https://lessgames.com/spellingbee"
  },
  {
    name: "TimeGuessr",
    emoji: "🧭",
    category: "Geografia",
    description: "Indovina luogo e anno della foto.",
    url: "https://timeguessr.com/it"
  },
  {
    name: "Wordle",
    emoji: "✏️",
    category: "Parole",
    description: "La parola del giorno.",
    url: "https://www.nytimes.com/games/wordle/index.html"
  }
];

const container = document.getElementById("gamesContainer");

function getCategoryClass(category) {
  switch (category) {
    case "Anime":
      return "anime";

    case "Parole":
      return "parole";

    case "Musica":
      return "musica";

    case "Geografia":
      return "geografia";

    default:
      return "curiosita";
  }
}

function renderGames() {

  container.innerHTML = "";

  games.forEach(game => {

    container.innerHTML += `
    
      <div class="game-card">

        <div class="favorite">
          ☆
        </div>

        <div class="emoji">
          ${game.emoji}
        </div>

        <h2>
          ${game.name}
        </h2>

        <span class="tag ${getCategoryClass(game.category)}">
          ${game.category}
        </span>

        <p>
          ${game.description}
        </p>

        <a
          href="${game.url}"
          target="_blank"
          class="play-btn">

          Gioca

        </a>

      </div>

    `;
  });
}

renderGames();