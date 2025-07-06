function startExperience() {
  playMusic();
  showSection('messages');
  typeMessage(fullLoveMessage);
}

function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
  const section = document.getElementById(id);
  if (section) section.classList.remove('hidden');
}

function playMusic() {
  const music = document.getElementById("bg-music");
  if (music) music.play().catch(() => {});
}

const fullLoveMessage = `You weren’t just a surprise in my life, you became the reason I started believing in the beautiful kind of unexpected.
Maybe I can’t show up at your door with flowers,
but I hope this shows I’m still there,
in every silly line of code, in every soft detail.
You make distance feel smaller, and emotions feel louder.
You’re the reason I smile at my screen like a fool,
the reason I overthink,
and the reason I believe in caring.
This isn’t just a birthday page. It’s a quiet love letter.
To the chaos you bring,
the calm you leave,
and the soul you are.
You’ve been worth every word, every click, and every single heartbeat
Happy 20th, Perfect One.♥️`;


let msgIndex = 0;

function typeMessage(message) {
  const container = document.getElementById("typed-message");
  if (!container) return;

  container.innerHTML = ""; // Clear any previous
  const paragraph = document.createElement("p");
  container.appendChild(paragraph);

  let i = 0;
  const interval = setInterval(() => {
    if (i < message.length) {
      paragraph.textContent += message[i++];
    } else {
      clearInterval(interval);
    }
  }, 55); // typing speed
}



function showChoice() {
  msgIndex++;
  if (msgIndex < loveMessages.length) {
    typeMessage(loveMessages[msgIndex]);
  } else {
    showSection('choice');
  }
}


//function goToSection(id) {
//  showSection(id);
//  if (id === 'gallery') loadGallery();
//  if (id === 'quiz') loadQuiz();
//  if (id === 'chat') loadChatScreenshots();
//  if (id === 'countdown') startCountdown();
//  if (id === 'video-section') {
//  // Scrolls smoothly to video
//  const vid = document.getElementById("youtube-video");
//  if (vid) {
 //   window.scrollTo({ top: vid.offsetTop, behavior: "smooth" });
 // }
//}

//}
const galleryData = [
  { img: "assets/images/photo1.jpg", msg: "The Hottest one so far ❤️", class: "img1" },
  { img: "assets/images/photo2.jpg", msg: "Skincare, almost daily ritual nowadays.", class: "img2" },
  { img: "assets/images/photo3.jpg", msg: "Who has the time to look at the dog when this face pulls up!!", class: "img3" },
  { img: "assets/images/photo4.jpg", msg: "Upgrade the laptop camera now!", class: "img4" },
  { img: "assets/images/photo5.jpg", msg: "This bitch can’t keep her eyes open 💁🏻", class: "img5" },
  { img: "assets/images/photo6.jpg", msg: "But when her eyes are open , then Her Eyes >>> 9.81",class: "img6" },
  { img: "assets/images/photo7.jpg", msg: "The small girl really grew up or grown them upp!😏", class: "img7" },
  { img: "assets/images/photo8.jpg", msg: "I didn't think perfection existed...until God introduced me to you.", class: "img8" }
];

/*const galleryData = [
  { img: "assets/images/photo1.jpg", msg: "The Hottest one so far ❤️ " },
  { img: "assets/images/photo2.jpg", msg: "Skincare,almost daily ritual nowadays." },
  { img: "assets/images/photo3.jpg", msg: "Who has the time to look at the dog , When these cute face pulls.😘" },
   { img: "assets/images/photo4.jpg", msg: "Need to upgade the laptop camera now!" },
    { img: "assets/images/photo5.jpg", msg: "This bitch can never kepp her eyes open .💁🏻" }
];*/

/* function loadGallery() {
  const container = document.getElementById("gallery-carousel");
  if (!container) return;
  container.innerHTML = "";
  galleryData.forEach((item, index) => {
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = "Gallery Image";
    img.className = `gallery-img img${index + 1}`; // 
    const caption = document.createElement("p");
    caption.textContent = item.msg;
    container.appendChild(img);
    container.appendChild(caption);
  });
} */

let currentFlipIndex = 0;

function loadGallery() {
  const imgEl = document.getElementById("flipbook-image");
  const capEl = document.getElementById("flipbook-caption");
  if (!imgEl || !capEl) return;

  currentFlipIndex = 0;
  imgEl.src = galleryData[0].img;
  imgEl.alt = "Gallery Image";
  imgEl.className = `flipbook-img img${currentFlipIndex + 1}`; 
  capEl.textContent = galleryData[0].msg;
}

function showNextFlip() {
  currentFlipIndex++;
  if (currentFlipIndex >= galleryData.length) currentFlipIndex = 0;

  const imgEl = document.getElementById("flipbook-image");
  const capEl = document.getElementById("flipbook-caption");
  if (!imgEl || !capEl) return;

  imgEl.style.transform = 'scale(0.95)';
  setTimeout(() => {
    imgEl.src = galleryData[currentFlipIndex].img;
    imgEl.className = `flipbook-img img${currentFlipIndex + 1}`; 
    capEl.textContent = galleryData[currentFlipIndex].msg;
    imgEl.style.transform = 'scale(1)';
  }, 150);
}





const quizData = [
  { q: "What’s his most chaotic love language??",
     options: [ 
      "Sending Good morning message",
      "sticker notes on lip balm",
      "Building a whole damn web app",
      "All of the above"],
       a:[3]},
  { q: "Theodoron means...?",
     options: [
      "Theodoron? Sounds like a Pokémon",
      "Gift of God",
      "It’s what he calls me when he's being extra",
      "His name for me", 
      "A whole emotion in one word, don’t ask"], 
        a: [1, 3]},
  { q:"How does he try to “take care” of me?",
     options: [
      "Sends me choki choki",
      "Builds me a digital surprise I didn’t ask for but secretly love",
      "Worries more about my sleep than I do",
      "Tells me not to ruin the lungs he loves. 🫁💀"], 
      a:[0, 1, 3]},
  {q :"What’s the most him thing ever?", 
    options: [
      "Freaking out because i dont reply",
      "Writing drafts and not sending",
      "Drawing something and calling it 'not perfect yet' ",
      "All of it"],
       a: [0, 3]},
  {q: "What would he write under my favorite photo?" , 
    options:[
      "You’re literally unfairly attractive",
      "Found a 10/10 — time to gym harder",
      "You’re my reason, my riot, my rest",
      "One more pic like this and I’m proposing"],
      a:[1, 3]}
];

let currentQuizIndex = 0;
const userAnswers = [];

function loadQuiz() {
  currentQuizIndex = 0;
  showQuizQuestion(currentQuizIndex);
}

function showQuizQuestion(index) {
  const container = document.getElementById("quiz-container");
  container.innerHTML = ""; // Clear previous question

  const q = quizData[index];
  const block = document.createElement("div");
  block.className = "quiz-question";

  const question = document.createElement("p");
  question.textContent = q.q;
  block.appendChild(question);

  q.options.forEach((opt, j) => {
    const label = document.createElement("label");
    label.className = "quiz-option";
    
    label.innerHTML = `<input type="checkbox" name="q${index}" value="${j}"> ${opt}`;
    block.appendChild(label);
  });

  container.appendChild(block);

  const nextBtn = document.createElement("button");
  nextBtn.id = "quiz-next-btn";
  nextBtn.textContent = index < quizData.length - 1 ? "Next ➡️" : "Submit ✅";

  nextBtn.onclick = () => {
    const checkedOptions = [...document.querySelectorAll(`input[name="q${index}"]:checked`)];
    if (checkedOptions.length === 0) {
      alert("Please select at least one answer!");
    return;
  }
    userAnswers[index] = checkedOptions.map(el => parseInt(el.value));
  if (index < quizData.length - 1) {
    showQuizQuestion(index + 1);
  } else {
    submitQuiz();
  }
};


  container.appendChild(nextBtn);
}

let quizSubmitted = false;

function submitQuiz() {
  if (quizSubmitted) return;
  quizSubmitted = true;

  let score = 0;
  const reviewContainer = document.createElement("div");
  reviewContainer.id = "quiz-review";
  reviewContainer.style.padding = "1rem";

  quizData.forEach((q, i) => {
    const selected = Array.from(document.querySelectorAll(`input[name="q${i}"]:checked`))
      .map(input => parseInt(input.value));
    const correctAnswers = q.a;

    // Scoring logic
    let questionScore = 0;
    const correctSet = new Set(correctAnswers);
    const selectedSet = new Set(selected);

    let numCorrectChosen = 0;
    selected.forEach(ans => {
      if (correctSet.has(ans)) numCorrectChosen++;
    });

    questionScore = numCorrectChosen / correctAnswers.length;
    score += questionScore;

    // Display review
    const block = document.createElement("div");
    block.style.marginBottom = "1rem";

    const question = document.createElement("p");
    question.textContent = `Q${i + 1}: ${q.q}`;
    block.appendChild(question);

    const correct = document.createElement("p");
    correct.style.color = "green";
    correct.textContent = "✅ Correct: " + correctAnswers.map(idx => q.options[idx]).join(", ");
    block.appendChild(correct);

    const yourAnswer = document.createElement("p");
    yourAnswer.style.color = selected.length > 0 ? "blue" : "red";
    yourAnswer.textContent = "📝 Your answer: " + (selected.length ? selected.map(idx => q.options[idx]).join(", ") : "No answer");
    block.appendChild(yourAnswer);

    reviewContainer.appendChild(block);
  });

  const finalScore = score.toFixed(1);
  alert(`You got ${finalScore} out of ${quizData.length} (Partial Credit)! 💕`);

  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "<h3>Review Your Answers</h3>";
  quizContainer.appendChild(reviewContainer);

  setTimeout(() => goToSection("game"), 3000);
}

/*let quizSubmitted = false;

function submitQuiz() {
  if (quizSubmitted) return; // prevent double-submit
  quizSubmitted = true;

  let score = 0;
  const reviewContainer = document.createElement("div");
  reviewContainer.id = "quiz-review";
  reviewContainer.style.padding = "1rem";

  quizData.forEach((q, i) => {
    const selected = Array.from(document.querySelectorAll(`input[name="q${i}"]:checked`))
      .map(input => parseInt(input.value));

    const correctAnswers = q.a;

    let questionScore = 0;
const correctSet = new Set(correctAnswers);
const selectedSet = new Set(selected);

let numCorrectChosen = 0;

selected.forEach(ans => {
  if (correctSet.has(ans)) numCorrectChosen++;
});

questionScore = numCorrectChosen / correctAnswers.length;
score += questionScore;


    const block = document.createElement("div");
    block.style.marginBottom = "1rem";

    const question = document.createElement("p");
    question.textContent = `Q${i + 1}: ${q.q}`;
    block.appendChild(question);

    const correct = document.createElement("p");
    correct.style.color = "green";
    correct.textContent = "✅ Correct: " + correctAnswers.map(idx => q.options[idx]).join(", ");
    block.appendChild(correct);

    const yourAnswer = document.createElement("p");
    yourAnswer.style.color = isPartiallyCorrect > 0 ? "blue" : "red";
    yourAnswer.textContent = "📝 Your answer: " + (selected.length ? selected.map(idx => q.options[idx]).join(", ") : "No answer");
    block.appendChild(yourAnswer);

    reviewContainer.appendChild(block);
  });

  alert(`You got ${score} out of ${quizData.length} (Partial Credit)! 💕`);

  const quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "<h3>Review Your Answers</h3>";
  quizContainer.appendChild(reviewContainer);

  

  // ✅ Optional: Go to game after 3 seconds
  setTimeout(() => goToSection("game"), 3000);
}
*/



/*function loadQuiz() {
  const container = document.getElementById("quiz-container");
  if (!container) return;
  container.innerHTML = "";
  quizData.forEach((q, i) => {
    const block = document.createElement("div");
    block.innerHTML = `<p>${q.q}</p>` + q.options.map((opt, j) =>
      `<label><input type="radio" name="q${i}" value="${j}"> ${opt}</label><br>`).join("");
    container.appendChild(block);
  });
}

function submitQuiz() {
  let score = 0;
  quizData.forEach((q, i) => {
    const answer = document.querySelector(`input[name="q${i}"]:checked`);
    if (answer && parseInt(answer.value) === q.a) score++;
  });
  alert(`You got ${score} out of ${quizData.length} correct! 💕`);
  showSection('game');
}*/

function loadChatScreenshots() {
  const container = document.getElementById("chat-screenshots");
  if (!container) return;
  container.innerHTML = "";
  const captions = ["Where it all started for me 💬", "Made my mind to tell how i feel","This was always for you" , "Made my Day" , "Hehe ", " Bit emotional" , "for u" , "Somthing that we both made"];
  for (let i = 1; i <= captions.length; i++) {
    const img = document.createElement("img");
    img.src = `assets/screenshots/chat${i}.jpg`;
    img.alt = "Chat Screenshot";
    const cap = document.createElement("p");
    cap.textContent = captions[i - 1];
    container.appendChild(img);
    container.appendChild(cap);
  }
}

let userMsgInterval;
function animateUserMessage() {
  const msgInput = document.getElementById("userMessage");
  const display = document.getElementById("animatedUserMessage");
  if (!msgInput || !display) return;
  const msg = msgInput.value;
  display.textContent = "";
  let i = 0;
  clearInterval(userMsgInterval);
  userMsgInterval = setInterval(() => {
    if (i < msg.length) {
      display.textContent += msg[i++];
    } else {
      clearInterval(userMsgInterval);
    }
  }, 40);
}

function startCountdown() {
  let timer = 10;
  const display = document.getElementById("countdown-timer");
  const final = document.getElementById("finalMessage");
  const banner = document.getElementById("birthdayBanner");
  const avatar = document.getElementById("birthdayAvatar");
  if (!display || !final) return;

  const interval = setInterval(() => {
    display.textContent = timer;
    if (timer === 0) {
      clearInterval(interval);
      final.classList.remove("hidden");
      banner.classList.remove("hidden");
       avatar.classList.remove("hidden");
      launchConfetti(); // 🎉 trigger
    }
    timer--;
  }, 1000);
}

function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

/*function startCountdown() {
  let timer = 10;
  const display = document.getElementById("countdown-timer");
  const final = document.getElementById("finalMessage");
  if (!display || !final) return;
  const interval = setInterval(() => {
    display.textContent = timer;
    if (timer === 0) {
      clearInterval(interval);
      final.classList.remove("hidden");
    }
    timer--;
  }, 1000);
}*/

setInterval(() => {
  const container = document.getElementById("floating-hearts");
  if (!container) return;
  if (container.querySelectorAll('.heart').length >= 50) return;
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 2 + Math.random() * 3 + "s";
  container.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 500);
// 🎮 Catch-the-Heart Game
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let hearts = [];
let score = 0;

function createHeart() {
  const heart = {
    x: Math.random() * (canvas.width - 30),
    y: -30,
    size: 30,
    speed: 2 + Math.random() * 2,
  };
  hearts.push(heart);
}

function drawHeart(heart) {
  const x = heart.x + heart.size / 2;
  const y = heart.y + heart.size / 2;
  const size = heart.size;

  ctx.fillStyle = "#ff4d4d";
  ctx.beginPath();

  const topCurveHeight = size * 0.3;

  ctx.moveTo(x, y + topCurveHeight);
  ctx.bezierCurveTo(
    x, y,
    x - size / 2, y,
    x - size / 2, y + topCurveHeight
  );
  ctx.bezierCurveTo(
    x - size / 2, y + (size + topCurveHeight) / 2,
    x, y + (size + topCurveHeight) / 2,
    x, y + size
  );
  ctx.bezierCurveTo(
    x, y + (size + topCurveHeight) / 2,
    x + size / 2, y + (size + topCurveHeight) / 2,
    x + size / 2, y + topCurveHeight
  );
  ctx.bezierCurveTo(
    x + size / 2, y,
    x, y,
    x, y + topCurveHeight
  );

  ctx.closePath();
  ctx.fill();
}


function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart, index) => {
    heart.y += heart.speed;
    drawHeart(heart);

    // Remove if it falls off screen
    if (heart.y > canvas.height) {
      hearts.splice(index, 1);
    }
  });

  requestAnimationFrame(updateGame);
}

canvas.addEventListener("click", (e) => {
  const rect = canvas.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  hearts.forEach((heart, index) => {
    const dx = heart.x + heart.size / 2 - mouseX;
    const dy = heart.y + heart.size / 2 - mouseY;
    if (Math.sqrt(dx * dx + dy * dy) < heart.size) {
      hearts.splice(index, 1);
      score++;
      document.getElementById("gameScore").textContent = `Score: ${score}`;
    }
  });
});

function startGameLoop() {
  hearts = [];
  score = 0;
  document.getElementById("gameScore").textContent = "Score: 0";
  setInterval(createHeart, 1000);
  updateGame();
}

// Start game when game section is shown
function goToSection(id) {
  showSection(id);
  if (id === 'gallery') loadGallery();
  if (id === 'quiz') loadQuiz();
  if (id === 'chat') loadChatScreenshots();
  if (id === 'countdown') startCountdown();
  if (id === 'game') startGameLoop();
  const music = document.getElementById("bg-music");
  /* const video = document.getElementById("birthday-video");*/
  if (id === 'video-section') {
    scrollToVideo();
    if (music && !music.paused) music.pause();
  } else {
    if (music && music.paused) music.play().catch(() => {});
  }
}
function scrollToVideo() {
  const vid = document.getElementById("youtube-video");
  if (vid) {
    setTimeout(() => {
      vid.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 500);
  }
}
let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-video', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.ENDED) {
    setTimeout(() => goToSection('message-wall'), 2000); // move to next section after 2s
  }
}

