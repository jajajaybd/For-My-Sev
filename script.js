// =====================================
// SEVI.EXE
// Made with care by Ja ♡
// =====================================


// ---------- BACKGROUND STARS ----------

const starsContainer = document.getElementById("stars");

for (let i = 0; i < 35; i++) {
    const star = document.createElement("span");

    star.className = "star";
    star.textContent = Math.random() > 0.5 ? "✦" : "✧";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.fontSize = (Math.random() * 12 + 8) + "px";
    star.style.animationDelay = Math.random() * 3 + "s";

    starsContainer.appendChild(star);
}


// ---------- MOBILE NAVIGATION ----------

const menuToggle = document.getElementById("menuToggle");
const navLinksContainer = document.getElementById("navLinks");
const navLinks = document.querySelectorAll(".nav-link");

menuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinksContainer.classList.remove("open");
    });
});


// ---------- ACTIVE NAVIGATION ----------

const sections = document.querySelectorAll(".page-section");

window.addEventListener("scroll", () => {
    let currentSection = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 130;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }
    });

    navLinks.forEach(link => {
        link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + currentSection
        );
    });
});


// ---------- TRUST TESTER SCAN ----------

const startScan = document.getElementById("startScan");
const scanProgress = document.getElementById("scanProgress");
const scanLogs = document.getElementById("scanLogs");
const scanReport = document.getElementById("scanReport");

const scanMessages = [
    "Checking sleep schedule...",
    "Checking cat compatibility...",
    "Checking dog compatibility...",
    "Measuring cuteness level...",
    "Checking biceps appreciation...",
    "Checking Jay's affection level...",
    "Finalizing personal report..."
];

let scanRunning = false;

startScan.addEventListener("click", () => {
    if (scanRunning) return;

    scanRunning = true;
    startScan.disabled = true;
    startScan.textContent = "Scanning...";

    scanProgress.style.width = "0%";
    scanLogs.innerHTML = "";
    scanReport.classList.add("hidden");

    let messageIndex = 0;

    const scanInterval = setInterval(() => {
        const progress = ((messageIndex + 1) / scanMessages.length) * 100;

        scanProgress.style.width = progress + "%";

        const log = document.createElement("p");
        log.textContent = scanMessages[messageIndex];
        scanLogs.appendChild(log);

        messageIndex++;

        if (messageIndex >= scanMessages.length) {
            clearInterval(scanInterval);

            setTimeout(() => {
                scanReport.classList.remove("hidden");
                startScan.disabled = false;
                startScan.textContent = "Scan again ♡";
                scanRunning = false;
            }, 500);
        }
    }, 550);
});


// ---------- TRUST TESTER QUIZ ----------

const trustQuestions = [
    {
        question: 'What happens when Sev says, "I\'m sick, I\'m tired"?',
        options: [
            "He's actually sick",
            "He's probably going to sleep",
            "All of the above"
        ],
        answer: 2,
        feedback: "Correct. This behavior has been documented. ♡"
    },
    {
        question: "What is Sev's compatibility with cats and dogs?",
        options: [
            "Not compatible",
            "Highly compatible",
            "Still under investigation"
        ],
        answer: 1,
        feedback: "Correct! The animal-loving allegations are true."
    },
    {
        question: "What happens when Ja asks, 'Kumain ka na ba?'",
        options: [
            "It's just a random question",
            "She's checking if you ate because she cares",
            "She's asking for your food"
        ],
        answer: 1,
        feedback: "Correct. That's one of Ja's little ways of showing affection."
    }
];

let trustQuestionIndex = 0;

const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizSubmit = document.getElementById("quizSubmit");
const quizFeedback = document.getElementById("quizFeedback");

function displayTrustQuestion() {
    const question = trustQuestions[trustQuestionIndex];

    quizQuestion.textContent = question.question;
    quizOptions.innerHTML = "";
    quizFeedback.textContent = "";

    question.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.className = "option-label";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "trustAnswer";
        input.value = index;

        const span = document.createElement("span");
        span.textContent = option;

        label.appendChild(input);
        label.appendChild(span);
        quizOptions.appendChild(label);
    });

    quizSubmit.textContent = "Submit answer ♡";
    quizSubmit.disabled = false;
}

quizSubmit.addEventListener("click", () => {
    const selected = document.querySelector(
        'input[name="trustAnswer"]:checked'
    );

    if (!selected) {
        quizFeedback.textContent = "Choose an answer first, Sev. ♡";
        return;
    }

    const question = trustQuestions[trustQuestionIndex];
    const answer = Number(selected.value);

    if (answer === question.answer) {
        quizFeedback.textContent = question.feedback;
    } else {
        quizFeedback.textContent = "Not quite! Ja believes in you. Try again next time.";
    }

    quizOptions.querySelectorAll("input").forEach(input => {
        input.disabled = true;
    });

    if (trustQuestionIndex < trustQuestions.length - 1) {
        quizSubmit.textContent = "Next question →";
    } else {
        quizSubmit.textContent = "Quiz completed ✓";
    }

    quizSubmit.dataset.next = "true";
});

quizSubmit.addEventListener("click", () => {
    if (quizSubmit.dataset.next !== "true") return;

    if (trustQuestionIndex < trustQuestions.length - 1) {
        trustQuestionIndex++;
        quizSubmit.dataset.next = "";
        displayTrustQuestion();
    } else {
        quizSubmit.disabled = true;
    }
});

displayTrustQuestion();


// ---------- FILIPINO SURVIVAL KIT ----------

const phrases = [
    {
        filipino: "Mano po",
        english: "A respectful Filipino greeting to elders.",
        french: "Une salutation respectueuse adressée aux personnes âgées.",
        pronunciation: "MAH-noh poh",
        context: "You take an older person's hand and gently bring it to your forehead as a sign of respect. You might need this when meeting my family.",
        category: "family"
    },
    {
        filipino: "Papakasalan ko na po anak niyo",
        english: "I'm going to marry your child.",
        french: "Je vais épouser votre enfant.",
        pronunciation: "Pa-pa-ka-sa-lan koh nah poh ah-nak nyoh",
        context: "A very bold, mock-formal way to tell someone's parent that you plan to marry their child. Use carefully. Hahaha.",
        category: "sweet"
    },
    {
        filipino: "Masarap",
        english: "Delicious or tasty.",
        french: "Délicieux / délicieuse.",
        pronunciation: "Mah-sah-rahp",
        context: "Used for food. You already know this one, so congratulations, your Filipino vocabulary is growing.",
        category: "everyday"
    },
    {
        filipino: "Ang sarap",
        english: "It's so delicious / It's so good.",
        french: "C'est tellement bon.",
        pronunciation: "Ahng sah-rahp",
        context: "A stronger way to compliment something delicious. Context matters, though. Don't accidentally make a normal food conversation suspicious.",
        category: "everyday"
    },
    {
        filipino: "Kain ka na",
        english: "Go eat now / Please eat.",
        french: "Va manger, s'il te plaît.",
        pronunciation: "Kah-in kah nah",
        context: "A casual way of telling someone to eat. Sometimes caring about someone sounds as simple as reminding them to have a meal.",
        category: "sweet"
    },
    {
        filipino: "Kumain ka na ba?",
        english: "Have you eaten yet?",
        french: "Tu as déjà mangé ?",
        pronunciation: "Koo-mah-in kah nah bah",
        context: "A common question in Filipino conversations. It can be a simple question or a way of showing concern. For Ja, it's sometimes both.",
        category: "sweet"
    },
    {
        filipino: "Miss na kita",
        english: "I miss you.",
        french: "Tu me manques déjà.",
        pronunciation: "Miss nah kee-tah",
        context: "A simple way to tell someone you miss them. No complicated explanation needed.",
        category: "sweet"
    },
    {
        filipino: "Gwapo mo",
        english: "You're handsome.",
        french: "Tu es beau.",
        pronunciation: "Gwah-poh moh",
        context: "A compliment. Don't let this one make you too confident, okay?",
        category: "sweet"
    },
    {
        filipino: "Ang kulit mo",
        english: "You're so annoying / You're such a tease.",
        french: "Tu es vraiment pénible.",
        pronunciation: "Ahng koo-lit moh",
        context: "Usually playful when said to someone you're comfortable with. It can be affectionate teasing.",
        category: "slang"
    },
    {
        filipino: "Charot!",
        english: "Just kidding!",
        french: "Je plaisante !",
        pronunciation: "Chah-roht",
        context: "A playful expression used after saying something dramatic or teasing. Basically, a quick escape route.",
        category: "slang"
    },
    {
        filipino: "Ewan ko sa'yo",
        english: "I don't know what to do with you.",
        french: "Je ne sais vraiment pas quoi faire de toi.",
        pronunciation: "Eh-wahn koh sah-yoh",
        context: "Can sound annoyed, amused, or affectionate depending on your tone.",
        category: "slang"
    },
    {
        filipino: "Grabe ka naman",
        english: "You're really something / You're too much.",
        french: "Tu exagères, quand même.",
        pronunciation: "Grah-beh kah nah-mahn",
        context: "A reaction to someone being dramatic, surprising, or extra.",
        category: "slang"
    },
    {
        filipino: "Ingat ka",
        english: "Take care.",
        french: "Prends soin de toi.",
        pronunciation: "Eeng-aht kah",
        context: "A simple way to tell someone to stay safe and take care of themselves.",
        category: "sweet"
    },
    {
        filipino: "Naku po!",
        english: "Oh my goodness!",
        french: "Oh là là !",
        pronunciation: "Nah-koo poh",
        context: "An expression of surprise, worry, or disbelief. Very Filipino auntie energy.",
        category: "slang"
    },
    {
        filipino: "Galing mo naman",
        english: "You're really good at that.",
        french: "Tu es vraiment doué(e).",
        pronunciation: "Gah-leeng moh nah-mahn",
        context: "A compliment when someone does something well. Use it when you want to make someone feel appreciated.",
        category: "sweet"
    },
    {
        filipino: "Proud ako sa'yo",
        english: "I'm proud of you.",
        french: "Je suis fier / fière de toi.",
        pronunciation: "Prowd ah-koh sah-yoh",
        context: "A sincere way to let someone know you recognize their efforts.",
        category: "sweet"
    },
    {
        filipino: "Susmaryosep!",
        english: "Good grief! / Oh my goodness!",
        french: "Mon Dieu !",
        pronunciation: "Soos-mah-ryoh-sehp",
        context: "An expressive Filipino reaction to something shocking, ridiculous, or unbelievable.",
        category: "slang"
    },
    {
        filipino: "Bahala ka",
        english: "Suit yourself / It's up to you.",
        french: "Comme tu veux.",
        pronunciation: "Bah-hah-lah kah",
        context: "This can sound casual or dismissive depending on your tone. Be careful when using it.",
        category: "everyday"
    }
];

const phraseButtons = document.getElementById("phraseButtons");
const phraseDetail = document.getElementById("phraseDetail");
const filterButtons = document.querySelectorAll(".filter-button");

let selectedPhraseIndex = 0;

function renderPhraseButtons(filter = "all") {
    phraseButtons.innerHTML = "";

    const filteredPhrases = phrases
        .map((phrase, index) => ({
            ...phrase,
            originalIndex: index
        }))
        .filter(phrase => filter === "all" || phrase.category === filter);

    filteredPhrases.forEach(phrase => {
        const button = document.createElement("button");

        button.className = "phrase-choice";
        button.textContent = phrase.filipino;

        if (phrase.originalIndex === selectedPhraseIndex) {
            button.classList.add("selected");
        }

        button.addEventListener("click", () => {
            selectedPhraseIndex = phrase.originalIndex;

            renderPhraseButtons(filter);
            showPhrase(selectedPhraseIndex);
        });

        phraseButtons.appendChild(button);
    });
}

function showPhrase(index) {
    const phrase = phrases[index];

    phraseDetail.innerHTML = `
        <p class="detail-category">${phrase.category} phrase</p>
        <h3 class="phrase-main">${phrase.filipino} ♡</h3>

        <div class="translation-line">
            <strong>ENGLISH</strong>
            ${phrase.english}
        </div>

        <div class="translation-line">
            <strong>FRENCH</strong>
            ${phrase.french}
        </div>

        <div class="translation-line">
            <strong>PRONUNCIATION (APPROXIMATE)</strong>
            ${phrase.pronunciation}
        </div>

        <div class="phrase-context">
            <strong>WHEN TO USE IT</strong><br>
            ${phrase.context}
        </div>

        <button class="button copy-phrase" id="copyPhrase">
            Copy Filipino phrase ♡
        </button>

        <span id="phraseCopyFeedback" class="copy-feedback"></span>
    `;

    document.getElementById("copyPhrase").addEventListener("click", async () => {
        await copyText(phrase.filipino);

        document.getElementById("phraseCopyFeedback").textContent = "Copied!";
    });
}

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(item => item.classList.remove("active"));

        button.classList.add("active");

        renderPhraseButtons(button.dataset.filter);
    });
});

renderPhraseButtons();
showPhrase(0);


// ---------- FILIPINO CHALLENGE ----------

const challengeQuestions = [
    {
        question: 'What does "Ang sarap" mean?',
        options: [
            "It's delicious",
            "I'm tired",
            "It's expensive",
            "I miss you"
        ],
        answer: 0
    },
    {
        question: 'What does "Mano po" mean in Filipino culture?',
        options: [
            "Good night",
            "A respectful greeting to elders",
            "Thank you",
            "I'm hungry"
        ],
        answer: 1
    },
    {
        question: 'What does "Miss na kita" mean?',
        options: [
            "I like you",
            "I'm going home",
            "I miss you",
            "I'm sleepy"
        ],
        answer: 2
    },
    {
        question: 'What does "Ang kulit mo" usually mean?',
        options: [
            "You're so annoying / playful",
            "You're handsome",
            "You're hungry",
            "You're very kind"
        ],
        answer: 0
    },
    {
        question: 'What does "Kain ka na" mean?',
        options: [
            "Go to sleep",
            "Come here",
            "Go eat now",
            "Take care"
        ],
        answer: 2
    },
    {
        question: 'What does "Papakasalan ko na po anak niyo" mean?',
        options: [
            "I want to meet your family",
            "I'm going to marry your child",
            "Your child is beautiful",
            "I'm going home"
        ],
        answer: 1
    }
];

let challengeIndex = 0;
let challengeScore = 0;
let challengeAnswered = false;

const challengeQuestion = document.getElementById("challengeQuestion");
const challengeOptions = document.getElementById("challengeOptions");
const checkChallenge = document.getElementById("checkChallenge");
const challengeFeedback = document.getElementById("challengeFeedback");
const questionCount = document.getElementById("questionCount");
const scoreDisplay = document.getElementById("scoreDisplay");
const challengeProgress = document.getElementById("challengeProgress");
const challengeContent = document.getElementById("challengeContent");
const challengeResult = document.getElementById("challengeResult");

function displayChallengeQuestion() {
    const question = challengeQuestions[challengeIndex];

    challengeAnswered = false;

    questionCount.textContent =
        `QUESTION ${String(challengeIndex + 1).padStart(2, "0")} / 06`;

    scoreDisplay.textContent = `SCORE: ${challengeScore}`;

    challengeProgress.style.width =
        `${(challengeIndex / challengeQuestions.length) * 100}%`;

    challengeQuestion.textContent = question.question;
    challengeOptions.innerHTML = "";
    challengeFeedback.textContent = "";

    question.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.className = "option-label";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "challengeAnswer";
        input.value = index;

        const span = document.createElement("span");
        span.textContent = option;

        label.appendChild(input);
        label.appendChild(span);

        challengeOptions.appendChild(label);
    });

    checkChallenge.textContent = "Check answer ♡";
    checkChallenge.disabled = false;
}

checkChallenge.addEventListener("click", () => {
    if (challengeAnswered) {
        challengeIndex++;

        if (challengeIndex < challengeQuestions.length) {
            displayChallengeQuestion();
        } else {
            showChallengeResult();
        }

        return;
    }

    const selected = document.querySelector(
        'input[name="challengeAnswer"]:checked'
    );

    if (!selected) {
        challengeFeedback.textContent = "Choose an answer first!";
        return;
    }

    const correctAnswer = challengeQuestions[challengeIndex].answer;
    const selectedAnswer = Number(selected.value);

    if (selectedAnswer === correctAnswer) {
        challengeScore++;
        challengeFeedback.textContent =
            "Correct! Look at you learning Filipino. ♡";
    } else {
        challengeFeedback.textContent =
            "Not quite! Don't worry, you'll get it next time.";
    }

    challengeAnswered = true;

    challengeOptions.querySelectorAll("input").forEach(input => {
        input.disabled = true;
    });

    scoreDisplay.textContent = `SCORE: ${challengeScore}`;

    checkChallenge.textContent =
        challengeIndex === challengeQuestions.length - 1
            ? "See my results →"
            : "Next question →";
});

function showChallengeResult() {
    challengeContent.classList.add("hidden");
    challengeResult.classList.remove("hidden");

    challengeProgress.style.width = "100%";

    const resultTitle = document.getElementById("resultTitle");
    const resultText = document.getElementById("resultText");

    if (challengeScore === 6) {
        resultTitle.textContent = "PERFECT SCORE!";
        resultText.textContent =
            "Okay, excuse me? You're getting too good at this. I'm impressed. ♡";
    } else if (challengeScore >= 4) {
        resultTitle.textContent = "Not bad, Sev!";
        resultText.textContent =
            `You got ${challengeScore} out of 6. You're learning, and I'm proud of you.`;
    } else {
        resultTitle.textContent = "We need more lessons.";
        resultText.textContent =
            `You got ${challengeScore} out of 6. Don't worry, I can teach you. Just don't fall asleep during class.`;
    }
}

document.getElementById("restartChallenge").addEventListener("click", () => {
    challengeIndex = 0;
    challengeScore = 0;

    challengeContent.classList.remove("hidden");
    challengeResult.classList.add("hidden");

    displayChallengeQuestion();
});

displayChallengeQuestion();


// ---------- WHAT SHOULD I SAY? ----------

const messages = [
    {
        filipino: "Kumain ka na ba, Sev?",
        english: "Have you eaten yet? I hope you haven't been forgetting to eat because of work."
    },
    {
        filipino: "Ingat ka palagi, bigboy.",
        english: "Always take care of yourself. I want you healthy and happy."
    },
    {
        filipino: "Gwapo mo naman.",
        english: "You're so handsome. I just thought you should know."
    },
    {
        filipino: "Miss na kita.",
        english: "I miss you. Even if we only talked a little today."
    },
    {
        filipino: "Proud ako sa'yo, Sev.",
        english: "I'm proud of you. I see how hard you're working, and I hope you see how amazing you are, too."
    },
    {
        filipino: "Pahinga ka rin, ha?",
        english: "Don't forget to rest, okay? You deserve a break, too."
    },
    {
        filipino: "Ang sarap mong kausap.",
        english: "I really enjoy talking to you. Even a little time with you makes my day better."
    },
    {
        filipino: "Gwapo mo, pero mas gusto ko yung biceps mo.",
        english: "You're handsome, but I might be a little more interested in those biceps. Just saying. ♡"
    },
    {
        filipino: "Sana okay ang araw mo.",
        english: "I hope your day is going well. And if it isn't, I hope tomorrow is kinder to you."
    },
    {
        filipino: "Salamat sa oras mo, Sev.",
        english: "Thank you for making time for me, even when you're busy. It means more than you know."
    },
    {
        filipino: "Papakasalan ko na po anak niyo.",
        english: "I'm going to marry your child. Please tell the family I'm coming. ♡"
    },
    {
        filipino: "You're doing well, bigboy.",
        english: "I hope you give yourself credit for everything you're doing. I'm proud of you."
    },
    {
        filipino: "Kahit saglit lang, masaya na ako.",
        english: "Even if we only get a little time together, it still makes me happy."
    },
    {
        filipino: "I like having you in my day.",
        english: "Even the smallest conversations with you have become something I look forward to."
    },
    {
        filipino: "Mahal Ja is asking you to eat.",
        english: "That's basically her way of saying she cares about you. So please, go eat."
    }
];

let currentMessage = null;

const messageOutput = document.getElementById("messageOutput");
const generateMessage = document.getElementById("generateMessage");
const copyMessage = document.getElementById("copyMessage");
const copyFeedback = document.getElementById("copyFeedback");

generateMessage.addEventListener("click", () => {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * messages.length);
    } while (
        messages[randomIndex] === currentMessage &&
        messages.length > 1
    );

    currentMessage = messages[randomIndex];

    messageOutput.innerHTML = `
        <p class="message-filipino">${currentMessage.filipino}</p>
        <p class="message-english">${currentMessage.english}</p>
    `;

    copyFeedback.textContent = "";
});

copyMessage.addEventListener("click", async () => {
    if (!currentMessage) {
        copyFeedback.textContent = "Generate a message first!";
        return;
    }

    await copyText(
        `${currentMessage.filipino}\n${currentMessage.english}`
    );

    copyFeedback.textContent = "Copied! ♡";
});


// ---------- UNDERSTANDING JA ----------

const jokes = [
    "You're my favorite notification, Sev. Don't let that get to your head.",
    "I hope you know that someone is quietly cheering for you. It's me, obviously. ♡",
    "Your biceps have officially caught my attention. Congratulations.",
    "You work hard, bigboy. Please remember to take breaks, too.",
    "I don't need a long conversation every day. I just like knowing you're there.",
    "You're handsome. That's the entire announcement.",
    "If I ask whether you've eaten, just know there's a little affection hidden in that question.",
    "I hope you get enough sleep tonight. Consider this an order from Ja.",
    "You make ordinary days a little nicer. I hope you know that.",
    "One day, I might actually stop looking forward to your messages. Just kidding. Not happening."
];

const randomJoke = document.getElementById("randomJoke");
const newJoke = document.getElementById("newJoke");

let previousJoke = -1;

newJoke.addEventListener("click", () => {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * jokes.length);
    } while (randomIndex === previousJoke && jokes.length > 1);

    previousJoke = randomIndex;
    randomJoke.textContent = jokes[randomIndex];
});


const sleepStatuses = [
    {
        status: "Probably sleeping.",
        description: "No signs of activity. Either you're asleep or ignoring the world. Both are possible."
    },
    {
        status: "I'm sick.",
        description: "A classic Sev status. Please rest and take care of yourself."
    },
    {
        status: "I'm tired.",
        description: "We have detected low energy levels. Recommended action: rest, drink water, and stop pushing yourself."
    },
    {
        status: "I fell asleep.",
        description: "Case closed. The most predictable outcome in this entire website."
    },
    {
        status: "Somehow still awake.",
        description: "An unexpected development. We recommend enjoying this rare moment."
    },
    {
        status: "Needs food.",
        description: "This is your reminder to eat something. Yes, I'm serious."
    },
    {
        status: "Needs affection.",
        description: "System detected a possible need for a little extra care today. Sending you a virtual hug. ♡"
    },
    {
        status: "Being dramatic.",
        description: "No further explanation required. We know you."
    }
];

document.getElementById("detectSleep").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * sleepStatuses.length);
    const result = sleepStatuses[randomIndex];

    document.getElementById("sleepStatus").textContent = result.status;
    document.getElementById("sleepDescription").textContent =
        result.description;
});

async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        const temporaryInput = document.createElement("textarea");

        temporaryInput.value = text;
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";

        document.body.appendChild(temporaryInput);
        temporaryInput.select();

        document.execCommand("copy");
        temporaryInput.remove();
    }
}