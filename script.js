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

    const STATE_REGIONS = [
      { name: "North India", states: ["haryana", "himachal pradesh", "jammu and kashmir", "punjab", "uttar pradesh", "uttarakhand"] },
      { name: "West-Central India", states: ["chhattisgarh", "goa", "gujarat", "madhya pradesh", "maharashtra", "rajasthan"] },
      { name: "East India", states: ["bihar", "jharkhand", "odisha", "west bengal"] },
      { name: "South India", states: ["andhra pradesh", "karnataka", "kerala", "tamil nadu", "telangana"] },
      { name: "Northeast India", states: ["arunachal pradesh", "assam", "manipur", "meghalaya", "mizoram", "nagaland", "sikkim", "tripura"] }
    ];

    const MAP_COLORS = [
      "#a33f4b", "#a16435", "#8a7a2c", "#347553"
    ];

    const LEVEL_FOUR_SELECTION_COLORS = [
      "#3478b8", "#8664ad", "#d39a21", "#4b68a8"
    ];

    const LEVEL_STATE_COUNTS = { 1: 2, 2: 3, 3: 4 };

    function createLevelFourDeck(previousStateIds = []) {
      const states = window.INDIA_STATE_BOUNDARIES
        .map(({ name }) => {
          const id = normalizeStateName(name);
          const state = STATE_LEARNING_INFO[id];
          return state?.type === "State" ? { ...state, id, question: `Find ${state.name} on the map.` } : null;
        })
        .filter(Boolean);

      const previousStateSet = new Set(previousStateIds);
      let deck = shuffleArray(states);

      if (
        previousStateSet.size === deck.length &&
        deck.every((state) => previousStateSet.has(state.id))
      ) {
        deck = shuffleArray(states);
      }

      return { states: deck };
    }

    function createStateDeck(stateCount, previousStateIds = []) {
      const stateById = new Map(window.INDIA_STATE_BOUNDARIES.map(({ name }) => {
        const id = normalizeStateName(name);
        const state = STATE_LEARNING_INFO[normalizeStateName(name)];
        if (!state) throw new Error(`Missing learning information for map feature: ${name}`);
        return [id, {
          ...state,
          id,
          question: `Find ${state.name} on the map.`
        }];
      }));
      const previousStateSet = new Set(previousStateIds);
      let states;

      do {
        const region = shuffleArray(STATE_REGIONS)[0];
        const candidates = region.states.map((id) => {
          const state = stateById.get(id);
          if (!state || !["State", "Union Territory"].includes(state.type)) {
            throw new Error(`Invalid state in ${region.name}: ${id}`);
          }
          return state;
        });
        states = shuffleArray(candidates).slice(0, stateCount);
      } while (
        previousStateSet.size === stateCount &&
        states.every((state) => previousStateSet.has(state.id))
      );

      return { states };
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

    function announceStateName(name) {
      if (!("speechSynthesis" in window) || typeof window.SpeechSynthesisUtterance !== "function") return;

      window.speechSynthesis.cancel();
      const announcement = new window.SpeechSynthesisUtterance(name);
      announcement.lang = "en-IN";
      announcement.rate = 0.82;
      announcement.pitch = 1;
      announcement.volume = 1;

      const voices = window.speechSynthesis.getVoices();
      const englishVoices = voices.filter((voice) => /^en[-_]/i.test(voice.lang));
      const preferredVoice =
        englishVoices.find((voice) =>
          /^en-(IN|GB)/i.test(voice.lang.replace("_", "-"))
          && /neural|natural|premium|google|microsoft|siri/i.test(
            `${voice.name} ${voice.voiceURI || ""}`
          )
        ) ||
        englishVoices.find((voice) =>
          /^en-(IN|GB)/i.test(voice.lang.replace("_", "-"))
        ) ||
        englishVoices.find((voice) => voice.name && !/bad|low/i.test(voice.name)) ||
        englishVoices[0];

      if (preferredVoice) {
        announcement.voice = preferredVoice;
        announcement.lang = preferredVoice.lang;
      }
      window.speechSynthesis.speak(announcement);
    }

    // ================= GAME STATE & DOM ELEMENTS =================
    let deck = [];
    let currentIndex = 0;
    let activeLevel = 1;
    let answerLocked = false;
    let answerFeedbackTimer = null;

    const questionText = document.getElementById("question-text");
    const indiaMap = document.getElementById("india-map");
    const restartBtn = document.getElementById("restart-btn");
    const rulesBtn = document.getElementById("rules-btn");
    const rulesDialog = document.getElementById("rules-dialog");
    const levelTabs = [...document.querySelectorAll(".level-tab")];
    const zoomInBtn = document.getElementById("zoom-in-btn");
    const zoomOutBtn = document.getElementById("zoom-out-btn");
    const zoomResetBtn = document.getElementById("zoom-reset-btn");
    const INITIAL_MAP_VIEWBOX = { x: 65, y: 38, width: 450, height: 474 };
    const MIN_MAP_ZOOM = 1;
    const MAX_MAP_ZOOM = 4;
    const MAP_ZOOM_STEP = 1.25;
    let mapZoom = 1;
    let mapViewBox = { ...INITIAL_MAP_VIEWBOX };

    function updateMapViewBox() {
      indiaMap.setAttribute(
        "viewBox",
        `${mapViewBox.x} ${mapViewBox.y} ${mapViewBox.width} ${mapViewBox.height}`
      );
      zoomInBtn.disabled = mapZoom >= MAX_MAP_ZOOM;
      zoomOutBtn.disabled = mapZoom <= MIN_MAP_ZOOM;
      zoomResetBtn.disabled = mapZoom === MIN_MAP_ZOOM;
    }

    function zoomMap(factor) {
      const nextZoom = Math.min(MAX_MAP_ZOOM, Math.max(MIN_MAP_ZOOM, mapZoom * factor));
      const actualFactor = nextZoom / mapZoom;
      if (actualFactor === 1) return;

      const focus = {
        x: mapViewBox.x + mapViewBox.width / 2,
        y: mapViewBox.y + mapViewBox.height / 2
      };
      mapViewBox = {
        x: focus.x - (focus.x - mapViewBox.x) / actualFactor,
        y: focus.y - (focus.y - mapViewBox.y) / actualFactor,
        width: INITIAL_MAP_VIEWBOX.width / nextZoom,
        height: INITIAL_MAP_VIEWBOX.height / nextZoom
      };
      mapZoom = nextZoom;
      if (mapZoom === MIN_MAP_ZOOM) {
        mapViewBox = { ...INITIAL_MAP_VIEWBOX };
      }
      updateMapViewBox();
    }

    function resetMapZoom() {
      mapZoom = MIN_MAP_ZOOM;
      mapViewBox = { ...INITIAL_MAP_VIEWBOX };
      updateMapViewBox();
    }

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
      const previousStateIds = deck.map((state) => state.id);
      const quiz = activeLevel === 4
        ? createLevelFourDeck(previousStateIds)
        : createStateDeck(LEVEL_STATE_COUNTS[activeLevel], previousStateIds);
      deck = quiz.states;
      currentIndex = 0;

      clearAnswerFeedback();
      renderStateBoundaries();
      displayCurrentQuestion();
    }

    function renderStateBoundaries() {
      const statesLayer = document.getElementById("states-layer");
      if (!statesLayer || !window.INDIA_STATE_BOUNDARIES) return;

      const selectedStateColors = activeLevel === 4
        ? new Map()
        : new Map(
            deck.map((state, index) => [state.id, MAP_COLORS[index % MAP_COLORS.length]])
          );
      statesLayer.innerHTML = "";
      const svgNS = "http://www.w3.org/2000/svg";
      window.INDIA_STATE_BOUNDARIES.forEach((state) => {
        const path = document.createElementNS(svgNS, "path");
        const stateId = normalizeStateName(state.name);
        path.setAttribute("d", state.path);
        path.setAttribute(
          "class",
          selectedStateColors.has(stateId) ? "state-path quiz-state" : "state-path"
        );
        path.setAttribute("data-state", stateId);
        path.style.setProperty(
          "--state-color",
          activeLevel === 4 ? "#b8bec7" : (selectedStateColors.get(stateId) || "#b8bec7")
        );
        statesLayer.appendChild(path);
      });
    }

    function displayCurrentQuestion() {
      questionText.textContent = `Find ${deck[currentIndex].name}`;
      questionText.style.visibility = "visible";
    }

    function shuffleStateOrder(states) {
      const shuffled = shuffleArray(states);
      if (
        shuffled.every((state, index) => state.id === states[index].id) ||
        (states.length === 2 && shuffled[0].id === states[0].id)
      ) {
        return [shuffled[states.length - 1], ...shuffled.slice(0, states.length - 1)];
      }
      return shuffled;
    }

    function clearAnswerFeedback() {
      if (answerFeedbackTimer !== null) {
        window.clearTimeout(answerFeedbackTimer);
        answerFeedbackTimer = null;
      }
      if ("speechSynthesis" in window) window.speechSynthesis.cancel();
      answerLocked = false;
      document.body.classList.remove("answer-correct", "answer-wrong");
      document.querySelectorAll(".level4-selected-correct, .level4-selected-wrong, .level4-selected-random")
        .forEach((path) => {
          path.classList.remove("level4-selected-correct", "level4-selected-wrong", "level4-selected-random");
          path.style.removeProperty("fill");
        });
    }

    function clearLevel4SelectionHighlights() {
      document.querySelectorAll(".level4-selected-correct, .level4-selected-wrong, .level4-selected-random")
        .forEach((path) => {
          path.classList.remove("level4-selected-correct", "level4-selected-wrong", "level4-selected-random");
          path.style.removeProperty("fill");
        });
    }

    function getRandomLevel4Color() {
      return LEVEL_FOUR_SELECTION_COLORS[
        Math.floor(Math.random() * LEVEL_FOUR_SELECTION_COLORS.length)
      ];
    }

    function flashAnswerFeedback(className, afterFlash = null) {
      answerLocked = true;
      document.body.classList.remove("answer-correct", "answer-wrong");
      document.body.classList.add(className);
      answerFeedbackTimer = window.setTimeout(() => {
        document.body.classList.remove(className);
        clearLevel4SelectionHighlights();
        answerFeedbackTimer = null;
        answerLocked = false;
        if (afterFlash) afterFlash();
      }, 500);
    }

    function handleMapSelection(event) {
      if (answerLocked || currentIndex >= deck.length) return;

      const targetState = deck[currentIndex];
      const selectedPath = event.target.closest(".state-path");
      const selectedStateId = selectedPath?.dataset.state;
      const isCorrect = selectedStateId === targetState.id;

      if (activeLevel === 4 && selectedPath) {
        clearLevel4SelectionHighlights();
        selectedPath.classList.add("level4-selected-random");
        selectedPath.style.fill = getRandomLevel4Color();
      }

      if (isCorrect) {
        playWinFanfare();
        announceStateName(targetState.name);
        flashAnswerFeedback("answer-correct", () => {
          currentIndex += 1;
          if (currentIndex === deck.length) {
            deck = activeLevel === 1
              ? [...deck].reverse()
              : shuffleStateOrder(deck);
            currentIndex = 0;
          }
          displayCurrentQuestion();
        });
      } else {
        playFailBuzz();
        flashAnswerFeedback("answer-wrong");
      }
    }

    function selectLevel(level) {
      activeLevel = level;
      levelTabs.forEach((tab) => {
        tab.setAttribute("aria-pressed", String(Number(tab.dataset.level) === activeLevel));
      });
      initGame();
    }

    // ================= EVENT LISTENERS =================
    levelTabs.forEach((tab) => {
      tab.addEventListener("click", () => selectLevel(Number(tab.dataset.level)));
    });
    restartBtn.addEventListener("click", initGame);
    rulesBtn.addEventListener("click", () => rulesDialog.showModal());
    rulesDialog.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        rulesDialog.close();
      }
    });
    indiaMap.addEventListener("click", handleMapSelection);
    zoomInBtn.addEventListener("click", () => zoomMap(MAP_ZOOM_STEP));
    zoomOutBtn.addEventListener("click", () => zoomMap(1 / MAP_ZOOM_STEP));
    zoomResetBtn.addEventListener("click", resetMapZoom);

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initGame, { once: true });
    } else {
      initGame();
    }
  
