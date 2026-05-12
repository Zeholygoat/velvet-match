
const questions = [
  {
    question: "What kind of intimacy turns you on the most?",
    options: [
      ["Soft, sensual connection", 1],
      ["Playful teasing", 2],
      ["Passionate rough energy", 4],
      ["Dominant fantasy vibes", 5]
    ]
  },
  {
    question: "How much does size matter to you?",
    options: [
      ["Barely at all", 1],
      ["A little bit", 2],
      ["Quite a bit", 4],
      ["It's everything", 5]
    ]
  },
  {
    question: "What size do you find visually pleasing?",
    options: [
      ["Cute and compact", 1],
      ["Average and balanced", 2],
      ["Large and exciting", 4],
      ["Huge fantasy energy", 5]
    ]
  },
  {
    question: "How intense do you like your orgasms?",
    options: [
      ["Slow and gentle", 1],
      ["Moderate and emotional", 2],
      ["Strong and deep", 4],
      ["Mind-blowing intensity", 5]
    ]
  },
  {
    question: "What type of experience sounds most exciting?",
    options: [
      ["Romantic and relaxed", 1],
      ["Playful experimentation", 2],
      ["Wild confidence", 4],
      ["Full fantasy adventure", 5]
    ]
  },
  {
    question: "How adventurous are you overall?",
    options: [
      ["Very cautious", 1],
      ["Open-minded", 2],
      ["Pretty adventurous", 4],
      ["I love pushing limits", 5]
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
    desc: "You like balanced experiences with just enough excitement to keep things playful and satisfying."
  },
  {
    size: "M",
    min: 15,
    max: 19,
    desc: "You enjoy confident pleasure and versatility. Medium is your sweet spot for comfort and intensity."
  },
  {
    size: "L",
    min: 20,
    max: 24,
    desc: "You love bold sensations, stronger intensity, and fuller experiences with extra excitement."
  },
  {
    size: "XL",
    min: 25,
    max: 30,
    desc: "You crave fantasy-level thrills, confidence, and maximum adventurous energy."
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
