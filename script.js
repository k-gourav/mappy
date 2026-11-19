    const STATE_LEARNING_INFO = {
      "andaman and nicobar islands": { name: "Andaman and Nicobar Islands", type: "Union Territory", capital: "Sri Vijaya Puram (formerly Port Blair)", fact: "An island chain in the Bay of Bengal, east of mainland India." },
      "andhra pradesh": { name: "Andhra Pradesh", type: "State", capital: "Amaravati", fact: "A southeastern coastal state on the Bay of Bengal." },
      "arunachal pradesh": { name: "Arunachal Pradesh", type: "State", capital: "Itanagar", fact: "India's easternmost state; it borders Bhutan, China, and Myanmar." },
      "assam": { name: "Assam", type: "State", capital: "Dispur", fact: "The Brahmaputra River flows through the state." },
      "bihar": { name: "Bihar", type: "State", capital: "Patna", fact: "The Ganga flows across the fertile plains of Bihar." },
      "chandigarh": { name: "Chandigarh", type: "Union Territory", capital: "Chandigarh", fact: "It is the shared capital of Punjab and Haryana." },
      "chhattisgarh": { name: "Chhattisgarh", type: "State", capital: "Raipur", fact: "It was formed from Madhya Pradesh in 2000." },
      "dadra and nagar haveli and daman and diu": { name: "Dadra and Nagar Haveli and Daman and Diu", type: "Union Territory", capital: "Daman", fact: "The two former union territories merged in 2020." },
      "delhi": { name: "Delhi", type: "Union Territory", capital: "New Delhi", fact: "The National Capital Territory contains India's national capital." },
      "goa": { name: "Goa", type: "State", capital: "Panaji", fact: "Goa is India's smallest state by area." },
      "gujarat": { name: "Gujarat", type: "State", capital: "Gandhinagar", fact: "This western state has a long coastline on the Arabian Sea." },
      "haryana": { name: "Haryana", type: "State", capital: "Chandigarh", fact: "Haryana shares its capital, Chandigarh, with Punjab." },
      "himachal pradesh": { name: "Himachal Pradesh", type: "State", capital: "Shimla", fact: "A Himalayan state in northern India." },
      "jammu and kashmir": { name: "Jammu and Kashmir", type: "Union Territory", capital: "Srinagar (summer), Jammu (winter)", fact: "This union territory lies in the northern Himalayan region." },
      "jharkhand": { name: "Jharkhand", type: "State", capital: "Ranchi", fact: "It was formed from Bihar in 2000." },
      "karnataka": { name: "Karnataka", type: "State", capital: "Bengaluru", fact: "The Western Ghats run along much of its western side." },
      "kerala": { name: "Kerala", type: "State", capital: "Thiruvananthapuram", fact: "It lies between the Arabian Sea and the Western Ghats." },
      "ladakh": { name: "Ladakh", type: "Union Territory", capital: "Leh", fact: "A high-altitude region in the Himalayas." },
      "lakshadweep": { name: "Lakshadweep", type: "Union Territory", capital: "Kavaratti", fact: "A group of islands in the Arabian Sea." },
      "madhya pradesh": { name: "Madhya Pradesh", type: "State", capital: "Bhopal", fact: "Its name means 'central province' because it lies in central India." },
      "maharashtra": { name: "Maharashtra", type: "State", capital: "Mumbai", fact: "Mumbai lies on its Arabian Sea coast." },
      "manipur": { name: "Manipur", type: "State", capital: "Imphal", fact: "Loktak Lake, known for its floating phumdis, is here." },
      "meghalaya": { name: "Meghalaya", type: "State", capital: "Shillong", fact: "Its name means 'abode of clouds'." },
      "mizoram": { name: "Mizoram", type: "State", capital: "Aizawl", fact: "It shares international borders with Bangladesh and Myanmar." },
      "nagaland": { name: "Nagaland", type: "State", capital: "Kohima", fact: "Nagaland is in India's northeast and borders Myanmar." },
      "odisha": { name: "Odisha", type: "State", capital: "Bhubaneswar", fact: "It has a coastline on the Bay of Bengal." },
      "puducherry": { name: "Puducherry", type: "Union Territory", capital: "Puducherry", fact: "It is made up of four separate regions: Puducherry, Karaikal, Mahe, and Yanam." },
      "punjab": { name: "Punjab", type: "State", capital: "Chandigarh", fact: "Punjab shares its capital, Chandigarh, with Haryana." },
      "rajasthan": { name: "Rajasthan", type: "State", capital: "Jaipur", fact: "Rajasthan is India's largest state by area." },
      "sikkim": { name: "Sikkim", type: "State", capital: "Gangtok", fact: "This small Himalayan state borders Nepal, Bhutan, and China." },
      "tamil nadu": { name: "Tamil Nadu", type: "State", capital: "Chennai", fact: "It lies on India's southeastern coast along the Bay of Bengal." },
      "telangana": { name: "Telangana", type: "State", capital: "Hyderabad", fact: "Telangana became a state in 2014." },
      "tripura": { name: "Tripura", type: "State", capital: "Agartala", fact: "It is bordered by Bangladesh on three sides." },
      "uttar pradesh": { name: "Uttar Pradesh", type: "State", capital: "Lucknow", fact: "It is India's most populous state (2011 Census)." },
      "uttarakhand": { name: "Uttarakhand", type: "State", capital: "Dehradun (winter), Gairsain (summer)", fact: "A Himalayan state often called 'Devbhoomi', or Land of the Gods." },
      "west bengal": { name: "West Bengal", type: "State", capital: "Kolkata", fact: "It shares an international border with Bangladesh." }
    };

    function normalizeStateName(name) {
      return name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
    }

    function createStateDeck() {
      return window.INDIA_STATE_BOUNDARIES.map(({ name }) => {
        const state = STATE_LEARNING_INFO[normalizeStateName(name)];
        if (!state) throw new Error(`Missing learning information for map feature: ${name}`);
        return {
          ...state,
          id: normalizeStateName(name),
          question: `Find ${state.name} on the map.`
        };
      });
    }
    // ================= RETRO 8-BIT WEB AUDIO SYNTHESIZER =================
    let audioCtx = null;
    let isMuted = false;

    function playTone(freq, duration, type = "square", delay = 0) {
      if (isMuted) return;
      try {
        if (!audioCtx) {
          const AudioContextClass = window.AudioContext || window.webkitAudioContext;
          if (!AudioContextClass) return;
          audioCtx = new AudioContextClass();
        }
        if (audioCtx.state === "suspended") {
          audioCtx.resume();
        }

        const startTime = audioCtx.currentTime + delay;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.08, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

        osc.connect(gain);
        gain.connect(audioCtx.destination);

        osc.start(startTime);
        osc.stop(startTime + duration);
      } catch (e) {
        // Silently ignore audio errors if browser restricts Web Audio
      }
    }

    function playBlip() {
      playTone(520, 0.05, "square", 0);
    }

    function playWinFanfare() {
      playTone(523.25, 0.09, "square", 0);     // C5
      playTone(659.25, 0.09, "square", 0.09);  // E5
      playTone(783.99, 0.09, "square", 0.18);  // G5
      playTone(1046.5, 0.22, "square", 0.27);  // C6
    }

    function playFailBuzz() {
      playTone(180, 0.14, "sawtooth", 0);
      playTone(135, 0.22, "sawtooth", 0.13);
    }

    // ================= GAME STATE & DOM ELEMENTS =================
    let deck = [];
    let currentIndex = 0;
    let score = 0;
    let solvedIds = new Set();
    let isModalOpen = false;
    let currentQuestionFailedOnce = false;

    const stageVal = document.getElementById("stage-val");
    const scoreVal = document.getElementById("score-val");
    const questionText = document.getElementById("question-text");
    const indiaMap = document.getElementById("india-map");

    const feedbackModal = document.getElementById("feedback-modal");
    const modalBanner = document.getElementById("modal-banner");
    const modalVerdict = document.getElementById("modal-verdict");
    const modalTag = document.getElementById("modal-tag");

    const trueContent = document.getElementById("true-content");
    const falseContent = document.getElementById("false-content");
    const victoryContent = document.getElementById("victory-content");

    const infoName = document.getElementById("info-name");
    const infoImportance = document.getElementById("info-importance");
    const infoFood = document.getElementById("info-food");
    const falseMessage = document.getElementById("false-message");
    const finalScoreText = document.getElementById("final-score-text");
    const modalActionBtn = document.getElementById("modal-action-btn");

    const soundBtn = document.getElementById("sound-btn");
    const restartBtn = document.getElementById("restart-btn");

    /**
     * Fisher-Yates unbiased shuffle
     */
    function shuffleArray(items) {
      const copy = [...items];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    }

    /**
     * Initializes or completely resets the game state
     */
    function initGame() {
      deck = shuffleArray(createStateDeck()).slice(0, 5);
      currentIndex = 0;
      score = 0;
      solvedIds.clear();
      isModalOpen = false;
      currentQuestionFailedOnce = false;

      closeModal();
      updateHUD();
      renderStateBoundaries();
      displayCurrentQuestion();
    }

    function renderStateBoundaries() {
      const statesLayer = document.getElementById("states-layer");
      if (!statesLayer || !window.INDIA_STATE_BOUNDARIES) return;

      statesLayer.innerHTML = "";
      const svgNS = "http://www.w3.org/2000/svg";
      window.INDIA_STATE_BOUNDARIES.forEach((state) => {
        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", state.path);
        path.setAttribute("class", "state-path");
        path.setAttribute("data-state", normalizeStateName(state.name));
        statesLayer.appendChild(path);
      });
    }

    function updateHUD() {
      const displayStage = Math.min(currentIndex + 1, deck.length);
      stageVal.textContent = `${displayStage}/${deck.length}`;
      scoreVal.textContent = score;
    }

    function displayCurrentQuestion() {
      if (currentIndex >= deck.length) {
        showVictoryModal();
        return;
      }
      currentQuestionFailedOnce = false;
      updateHUD();
      questionText.textContent = deck[currentIndex].question;
    }

    function handleMapSelection(event) {
      if (isModalOpen || currentIndex >= deck.length) return;

      const targetState = deck[currentIndex];
      const selectedPath = event.target.closest(".state-path");
      const selectedStateId = selectedPath?.dataset.state;
      const isCorrect = selectedStateId === targetState.id;

      if (isCorrect) {
        playWinFanfare();

        const pointsEarned = currentQuestionFailedOnce ? 50 : 100;
        if (!solvedIds.has(targetState.id)) {
          score += pointsEarned;
          solvedIds.add(targetState.id);
        }

        updateHUD();
        showTrueModal(targetState, pointsEarned);
      } else {
        playFailBuzz();
        currentQuestionFailedOnce = true;
        showFalseModal(targetState, selectedStateId);
      }
    }

    function openModal() {
      isModalOpen = true;
      feedbackModal.classList.remove("hidden");
      feedbackModal.classList.add("flex");
      modalActionBtn.focus();
    }

    function closeModal() {
      isModalOpen = false;
      feedbackModal.classList.add("hidden");
      feedbackModal.classList.remove("flex");
    }

    function showTrueModal(place, pointsEarned) {
      modalBanner.className = "px-5 py-4 border-b-4 border-slate-950 flex items-center justify-between bg-emerald-600 text-white";
      modalVerdict.textContent = "TRUE! ★";
      modalTag.textContent = `+${pointsEarned} PTS`;
      modalTag.classList.remove("hidden");

      infoName.textContent = place.name;
      infoImportance.textContent = place.capital;
      infoFood.textContent = place.fact;

      trueContent.classList.remove("hidden");
      falseContent.classList.add("hidden");
      victoryContent.classList.add("hidden");

      const isLastQuestion = currentIndex + 1 >= deck.length;
      modalActionBtn.textContent = isLastQuestion ? "VIEW FINAL SCORE ★" : "NEXT STAGE ►";
      modalActionBtn.className = "retro-btn w-full py-3.5 rounded font-pixel text-xs text-slate-950 bg-emerald-400";

      modalActionBtn.onclick = () => {
        playBlip();
        closeModal();
        currentIndex += 1;
        displayCurrentQuestion();
      };

      openModal();
    }

    function showFalseModal(targetState, selectedStateId) {
      modalBanner.className = "px-5 py-4 border-b-4 border-slate-950 flex items-center justify-between bg-rose-600 text-white";
      modalVerdict.textContent = "FALSE! ✖";
      modalTag.textContent = "MISS";
      modalTag.classList.remove("hidden");

      const selectedState = selectedStateId
        ? STATE_LEARNING_INFO[selectedStateId]
        : null;
      falseMessage.textContent = selectedState
        ? `You tapped ${selectedState.name}. Find ${targetState.name} instead.`
        : `Tap inside a state or union territory to find ${targetState.name}.`;

      trueContent.classList.add("hidden");
      falseContent.classList.remove("hidden");
      victoryContent.classList.add("hidden");

      modalActionBtn.textContent = "TRY AGAIN ↺";
      modalActionBtn.className = "retro-btn w-full py-3.5 rounded font-pixel text-xs text-white bg-rose-500";

      modalActionBtn.onclick = () => {
        playBlip();
        closeModal();
      };

      openModal();
    }

    function showVictoryModal() {
      playWinFanfare();
      questionText.textContent = "QUEST COMPLETE! You finished all 5 state challenges.";

      modalBanner.className = "px-5 py-4 border-b-4 border-slate-950 flex items-center justify-between bg-amber-400 text-slate-950";
      modalVerdict.textContent = "VICTORY! 🏆";
      modalTag.classList.add("hidden");

      finalScoreText.textContent = `${score} / ${deck.length * 100}`;

      trueContent.classList.add("hidden");
      falseContent.classList.add("hidden");
      victoryContent.classList.remove("hidden");

      modalActionBtn.textContent = "PLAY AGAIN ↺";
      modalActionBtn.className = "retro-btn w-full py-3.5 rounded font-pixel text-xs text-slate-950 bg-amber-400";

      modalActionBtn.onclick = () => {
        playBlip();
        initGame();
      };

      openModal();
    }

    // ================= EVENT LISTENERS =================
    soundBtn.addEventListener("click", () => {
      isMuted = !isMuted;
      soundBtn.textContent = isMuted ? "SFX: OFF" : "SFX: ON";
      soundBtn.classList.toggle("text-amber-200", !isMuted);
      soundBtn.classList.toggle("text-slate-400", isMuted);
      if (!isMuted) playBlip();
    });

    restartBtn.addEventListener("click", () => {
      playBlip();
      initGame();
    });

    indiaMap.addEventListener("click", handleMapSelection);

    // Keyboard accessibility: Escape closes FALSE modal; Enter triggers modal button
    document.addEventListener("keydown", (e) => {
      if (!isModalOpen) return;
      if (e.key === "Escape" && !falseContent.classList.contains("hidden")) {
        e.preventDefault();
        closeModal();
      }
    });

    // Boot game safely after window loads
    window.onload = initGame;
  
