
const questions = [
  {
    question: "What kind of foreplay turns you on the most?",
    options: [
      ["Soft, sensual kissing", 1],
      ["Playful teasing and foreplay", 2],
      ["Passionate fingering and titty sucking", 4],
      ["Dominant rough foreplay and teasing", 5]
    ]
  },
  {
    question: "How much does dick size matter to you?",
    options: [
      ["Barely at all", 1],
      ["A little bit", 2],
      ["Quite a bit", 4],
      ["It's everything", 5]
    ]
  },
  {
    question: "What dick size do you find the most visually pleasing?",
    options: [
      ["Small thin dicks", 1],
      ["Average sized dicks", 2],
      ["Big dicks", 4],
      ["Big black cocks", 5]
    ]
  },
  {
    question: "How do you like to get fucked?",
    options: [
      ["Slow and passionate", 1],
      ["Slow strokes and foreplay", 2],
      ["Abit of everything", 4],
      ["30 minutes of non stop fucking", 5]
    ]
  },
  {
    question: "What type of experience sounds most exciting?",
    options: [
      ["Passionate", 1],
      ["Loads of foreplay", 2],
      ["Getting your pussy eaten", 4],
      ["BDSM", 5]
    ]
  },
  {
    question: "How slutty are you overall?",
    options: [
      ["Very vanilly", 1],
      ["Very Open-minded", 2],
      ["Pretty adventurous and love toys and experimenting", 4],
      ["I love pushing my female body limits", 5]
    ]
  }
];

const results = [
  {
    size: "XS",
    min: 6,
    max: 9,
    desc: "You enjoy comfort, intimacy, and a gentle experience. XS is all about ease, confidence, and sensuality."
  },
  {
    size: "S",
    min: 10,
    max: 14,
    desc: "You like simple experiences with just enough excitement to keep things playful and satisfying."
  },
  {
    size: "M",
    min: 15,
    max: 19,
    desc: "You enjoy passionate sex and orgasms. Medium is almost every girls sweet spot for comfort and sexual pleasure."
  },
  {
    size: "L",
    min: 20,
    max: 24,
    desc: "You love deeper sensations, getting your G-Spot hit, and big dicks have more chances to give penetrative orgasms."
  },
  {
    size: "XL",
    min: 25,
    max: 30,
    desc: "You are freaky in bed and love to be wild"
  }
];

let currentQuestion = 0;
let totalScore = 0;

const quizBox = document.getElementById("quiz-box");
const progress = document.getElementById("progress");

function renderQuestion() {
  const q = questions[currentQuestion];

  progress.style.width = `${((currentQuestion) / questions.length) * 100}%`;

  quizBox.innerHTML = `
    <div class="question">
      <h3>${currentQuestion + 1}. ${q.question}</h3>
      <div class="options">
        ${q.options.map(option => `
          <button class="option-btn" onclick="selectOption(${option[1]})">
            ${option[0]}
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

window.selectOption = function(score) {
  totalScore += score;
  currentQuestion++;

  if(currentQuestion < questions.length) {
    renderQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  progress.style.width = "100%";

  const result = results.find(r => totalScore >= r.min && totalScore <= r.max);

  quizBox.innerHTML = `
    <div class="result-card">
      <h2>Your Ideal Match Is...</h2>
      <div class="result-size">${result.size}</div>
      <p class="result-desc">${result.desc}</p>
      <button class="restart-btn" onclick="restartQuiz()">Try Again</button>
    </div>
  `;
}

window.restartQuiz = function() {
  currentQuestion = 0;
  totalScore = 0;
  renderQuestion();
}

renderQuestion();
