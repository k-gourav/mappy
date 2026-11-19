    /**
     * Complete CBSE Class 10 History & Geography Syllabus Dataset (22 Locations)
     * Coordinates are tuned to sit distinctly inside their respective states without overlap.
     */
    const SYLLABUS_PLACES = [
      // ================= HISTORY: NATIONALISM IN INDIA (8) =================
      {
        id: "calcutta",
        category: "history",
        name: "Calcutta (Kolkata), West Bengal",
        question: "Click on the site of the September 1920 Congress Session.",
        x: 391,
        y: 267,
        importance: "At the Special Calcutta Session (Sept 1920), Mahatma Gandhi convinced other leaders of the need to start a Non-Cooperation Movement in support of Khilafat as well as for Swaraj.",
        food: "Macher Jhol (fish curry & steamed rice), Kathi Rolls, and Rosogolla."
      },
      {
        id: "nagpur",
        category: "history",
        name: "Nagpur, Maharashtra",
        question: "Click on the site of the December 1920 Congress Session.",
        x: 225,
        y: 288,
        importance: "At the December 1920 Congress Session in Nagpur, a compromise was worked out and the Non-Cooperation programme was formally adopted.",
        food: "Tarri Poha, spicy Saoji Curry, and Nagpur Orange Barfi."
      },
      {
        id: "madras",
        category: "history",
        name: "Madras (Chennai), Tamil Nadu",
        question: "Click on the site of the 1927 Congress Session.",
        x: 246,
        y: 409,
        importance: "At the 1927 Madras Session, the Indian National Congress passed a historic resolution to boycott the all-British Simon Commission.",
        food: "Idli, Masala Dosa with Sambar & Chutney, and South Indian Filter Coffee."
      },
      {
        id: "champaran",
        category: "history",
        name: "Champaran, Bihar",
        question: "Click on the site of the Indigo Planters Satyagraha (1917).",
        x: 322,
        y: 209,
        importance: "In 1917, Mahatma Gandhi travelled to Champaran in Bihar to inspire peasants to struggle against the oppressive indigo plantation system.",
        food: "Litti Chokha (roasted wheat dough balls stuffed with spiced sattu)."
      },
      {
        id: "ahmedabad",
        category: "history",
        name: "Ahmedabad, Gujarat",
        question: "Click on the site of the Cotton Mill Workers Satyagraha (1918).",
        x: 107,
        y: 260,
        importance: "In 1918, Mahatma Gandhi went to Ahmedabad to organise a Satyagraha movement amongst cotton mill workers demanding better wages.",
        food: "Khaman Dhokla, Khandvi, Fafda-Jalebi, and Gujarati Thali."
      },
      {
        id: "kheda",
        category: "history",
        name: "Kheda, Gujarat",
        question: "Click on the site of the Peasant Satyagraha in Gujarat (1917).",
        x: 114,
        y: 264,
        importance: "In 1917, Gandhi organised a Satyagraha to support the peasants of Kheda district who could not pay revenue due to crop failure and a plague epidemic.",
        food: "Methi Thepla, Undhiyu, and Bajra Rotla with buttermilk."
      },
      {
        id: "jallianwala",
        category: "history",
        name: "Jallianwala Bagh (Amritsar), Punjab",
        question: "Click on the site of the Jallianwala Bagh Massacre (13 April 1919).",
        x: 148,
        y: 131,
        importance: "On 13 April 1919, General Dyer blocked the exit points and opened fire on a peaceful crowd gathered at Jallianwala Bagh in Amritsar.",
        food: "Amritsari Kulcha with Chole, Sarson da Saag, and sweet Lassi."
      },
      {
        id: "dandi",
        category: "history",
        name: "Dandi, Gujarat",
        question: "Click on the coastal village where Gandhi broke the Salt Law (1930).",
        x: 110,
        y: 294,
        importance: "On 6 April 1930, Gandhi reached Dandi after a 240-mile march and ceremonially violated the Salt Law, launching the Civil Disobedience Movement.",
        food: "Surati Locho, Undhiyu, and Khichu."
      },

      // ================= GEOGRAPHY: WATER RESOURCES / DAMS (8) =================
      {
        id: "salal",
        category: "dam",
        name: "Salal Dam, Jammu & Kashmir",
        question: "Click on the Salal Dam built on the Chenab River.",
        x: 156,
        y: 108,
        importance: "A major run-of-the-river hydroelectric power project constructed on the Chenab River in the Reasi district of Jammu & Kashmir.",
        food: "Kashmiri Rogan Josh, Rajma Chawal, and saffron Kahwa tea."
      },
      {
        id: "bhakra",
        category: "dam",
        name: "Bhakra Nangal Dam (Himachal Pradesh / Punjab)",
        question: "Click on the Bhakra Nangal Dam on the Sutlej River.",
        x: 176,
        y: 133,
        importance: "Built on the Sutlej River on the Himachal Pradesh–Punjab border, it is one of India's largest multipurpose river valley projects for irrigation and power.",
        food: "Makki di Roti, Dal Makhani, and traditional Himachali Dham."
      },
      {
        id: "tehri",
        category: "dam",
        name: "Tehri Dam, Uttarakhand",
        question: "Click on the Tehri Dam on the Bhagirathi River.",
        x: 214,
        y: 149,
        importance: "Constructed on the Bhagirathi River in Uttarakhand, Tehri Dam is the tallest dam in India and a key hydroelectric and water supply project.",
        food: "Kafuli (spiced spinach curry), Aloo ke Gutke, and Bal Mithai."
      },
      {
        id: "ranapratap",
        category: "dam",
        name: "Rana Pratap Sagar Dam, Rajasthan",
        question: "Click on the Rana Pratap Sagar Dam on the Chambal River.",
        x: 158,
        y: 232,
        importance: "Built on the Chambal River at Rawatbhata in southeastern Rajasthan, it is a vital hydroelectricity and irrigation dam.",
        food: "Dal Baati Churma, Gatte ki Sabzi, and Pyaz Kachori."
      },
      {
        id: "sardar",
        category: "dam",
        name: "Sardar Sarovar Dam, Gujarat",
        question: "Click on the Sardar Sarovar Dam on the Narmada River.",
        x: 128,
        y: 277,
        importance: "Built across the Narmada River in Gujarat, this multipurpose dam supplies water and electricity to Gujarat, Madhya Pradesh, Maharashtra, and Rajasthan.",
        food: "Kathiyawadi Thali, Sev Tameta nu Shaak, and Kadhi Khichdi."
      },
      {
        id: "hirakud",
        category: "dam",
        name: "Hirakud Dam, Odisha",
        question: "Click on the Hirakud Dam on the Mahanadi River.",
        x: 313,
        y: 283,
        importance: "Built across the Mahanadi River near Sambalpur in Odisha, Hirakud is the longest earthen dam in the world and controls floods in the Mahanadi delta.",
        food: "Pakhala Bhata (fermented rice), Dalma, and Chhena Poda."
      },
      {
        id: "nagarjuna",
        category: "dam",
        name: "Nagarjuna Sagar Dam (Telangana / Andhra Pradesh)",
        question: "Click on the Nagarjuna Sagar Dam on the Krishna River.",
        x: 228,
        y: 356,
        importance: "A massive masonry dam built across the Krishna River along the Telangana–Andhra Pradesh border for irrigation and hydroelectric generation.",
        food: "Hyderabadi Biryani, Pesarattu (green gram dosa), and Gongura Pachadi."
      },
      {
        id: "tungabhadra",
        category: "dam",
        name: "Tungabhadra Dam, Karnataka",
        question: "Click on the Tungabhadra Dam in Karnataka.",
        x: 175,
        y: 376,
        importance: "Constructed across the Tungabhadra River (a tributary of the Krishna) in Karnataka, supporting irrigation and power across Karnataka and Andhra Pradesh.",
        food: "Bisi Bele Bath, Jolada Roti, and Mysore Pak."
      },

      // ================= GEOGRAPHY: AGRICULTURE / CROPS (6) =================
      {
        id: "up-crops",
        category: "crop",
        name: "Uttar Pradesh (Largest Sugarcane & Major Wheat/Rice Producer)",
        question: "Click on the largest producer state of Sugarcane (and major Wheat/Rice state).",
        x: 277,
        y: 200,
        importance: "Uttar Pradesh is India's largest producer of Sugarcane and a leading producer of Wheat and Rice due to its fertile Indo-Gangetic alluvial soil.",
        food: "Awadhi Biryani, Banarasi Chaat, Bedmi Puri, and Agra Petha."
      },
      {
        id: "wb-crops",
        category: "crop",
        name: "West Bengal (Largest Jute & Rice Producer)",
        question: "Click on the largest producer state of Jute and Rice in India.",
        x: 383,
        y: 245,
        importance: "West Bengal leads India in both Rice and Jute ('Golden Fibre') production thanks to the well-drained fertile soils of the Ganga-Brahmaputra delta.",
        food: "Shorshe Ilish (mustard hilsa), Aloo Posto, and Mishti Doi."
      },
      {
        id: "assam-tea",
        category: "crop",
        name: "Assam (Largest Tea Producer)",
        question: "Click on the largest Tea-producing state in India.",
        x: 474,
        y: 212,
        importance: "Assam is India's largest producer of Tea, blessed with a warm, moist frost-free climate and gentle rolling slopes.",
        food: "Masor Tenga (tangy fish curry), Khar, Pitha, and Assam Black Tea."
      },
      {
        id: "karnataka-coffee",
        category: "crop",
        name: "Karnataka (Largest Coffee Producer)",
        question: "Click on the largest Coffee-producing state in India.",
        x: 165,
        y: 404,
        importance: "Karnataka produces the largest share of Indian coffee, originally introduced on the Baba Budan Hills and thriving in Coorg (Kodagu).",
        food: "Ragi Mudde, Benne Dosa, Neer Dosa, and Coorg Filter Coffee."
      },
      {
        id: "kerala-rubber",
        category: "crop",
        name: "Kerala (Largest Rubber Producer)",
        question: "Click on the largest Rubber-producing state in India.",
        x: 165,
        y: 443,
        importance: "Kerala is India's largest producer of natural Rubber, requiring a hot and humid equatorial climate with heavy rainfall.",
        food: "Appam with Vegetable Stew, Puttu & Kadala Curry, and Banana Chips."
      },
      {
        id: "maharashtra-cotton",
        category: "crop",
        name: "Maharashtra (Major Cotton-Producing State)",
        question: "Click on a major Cotton-producing state in the Deccan black soil belt.",
        x: 165,
        y: 292,
        importance: "Maharashtra (alongside Gujarat) is a leading Cotton producer in India, thriving in the moisture-retentive black regur soil of the Deccan Plateau.",
        food: "Vada Pav, Pav Bhaji, Misal Pav, and Puran Poli."
      }
    ];

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
    const pinsLayer = document.getElementById("pins-layer");

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
      deck = shuffleArray(SYLLABUS_PLACES);
      currentIndex = 0;
      score = 0;
      solvedIds.clear();
      isModalOpen = false;
      currentQuestionFailedOnce = false;

      closeModal();
      updateHUD();
      renderStateBoundaries();
      renderMapPins();
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
        path.setAttribute("data-state", state.name);
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

    /**
     * Renders crisp SVG pins with generous 16px touch/click hitboxes
     */
    function renderMapPins() {
      pinsLayer.innerHTML = "";
      const svgNS = "http://www.w3.org/2000/svg";

      SYLLABUS_PLACES.forEach((place) => {
        const isSolved = solvedIds.has(place.id);
        const pinX = place.x * 0.82 + 51.3;
        const group = document.createElementNS(svgNS, "g");
        group.setAttribute("class", `pin-group ${isSolved ? "pin-solved" : ""}`);
        group.setAttribute("role", "button");
        group.setAttribute("tabindex", "0");
        group.setAttribute("aria-label", "Map location pin");

        // Category Color
        let pinColor = "#e11d48"; // History = Rose Red
        if (place.category === "dam") pinColor = "#0284c7"; // Dam = Sky Blue
        if (place.category === "crop") pinColor = "#059669"; // Crop = Emerald Green

        // Subtle pulse ring if already solved
        if (isSolved) {
          const pulse = document.createElementNS(svgNS, "circle");
          pulse.setAttribute("cx", pinX);
          pulse.setAttribute("cy", place.y);
          pulse.setAttribute("r", "9");
          pulse.setAttribute("fill", "none");
          pulse.setAttribute("stroke", "#d97706");
          pulse.setAttribute("stroke-width", "2");
          pulse.setAttribute("class", "solved-ring");
          group.appendChild(pulse);
        }

        // Invisible 16px radius hit target for effortless mobile & desktop clicks
        const hitTarget = document.createElementNS(svgNS, "circle");
        hitTarget.setAttribute("cx", pinX);
        hitTarget.setAttribute("cy", place.y);
        hitTarget.setAttribute("r", "16");
        hitTarget.setAttribute("fill", "transparent");

        // Crisp Retro Pin Circle
        const pinCircle = document.createElementNS(svgNS, "circle");
        pinCircle.setAttribute("cx", pinX);
        pinCircle.setAttribute("cy", place.y);
        pinCircle.setAttribute("r", "7.5");
        pinCircle.setAttribute("fill", isSolved ? "#fbbf24" : pinColor);
        pinCircle.setAttribute("stroke", "#0d1321");
        pinCircle.setAttribute("stroke-width", "2.2");
        pinCircle.setAttribute("class", "pin-body");

        // Inner pixel highlight dot
        const innerDot = document.createElementNS(svgNS, "circle");
        innerDot.setAttribute("cx", pinX - 2);
        innerDot.setAttribute("cy", place.y - 2);
        innerDot.setAttribute("r", "1.8");
        innerDot.setAttribute("fill", "#ffffff");
        innerDot.setAttribute("pointer-events", "none");

        group.appendChild(hitTarget);
        group.appendChild(pinCircle);
        group.appendChild(innerDot);

        group.addEventListener("mouseenter", () => {
          if (!isModalOpen) playBlip();
        });

        group.addEventListener("click", (e) => {
          e.stopPropagation();
          handlePinSelection(place);
        });

        group.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handlePinSelection(place);
          }
        });

        pinsLayer.appendChild(group);
      });
    }

    /**
     * Evaluates clicked pin against active question with strict modal & double-score guards
     */
    function handlePinSelection(clickedPlace) {
      if (isModalOpen || currentIndex >= deck.length) return;

      const targetPlace = deck[currentIndex];
      const isCorrect = clickedPlace.id === targetPlace.id;

      if (isCorrect) {
        playWinFanfare();

        // Award +100 on first try, +50 if solved after a retry (prevents double-scoring)
        const pointsEarned = currentQuestionFailedOnce ? 50 : 100;
        if (!solvedIds.has(targetPlace.id)) {
          score += pointsEarned;
          solvedIds.add(targetPlace.id);
        }

        updateHUD();
        renderMapPins();
        showTrueModal(targetPlace, pointsEarned);
      } else {
        playFailBuzz();
        currentQuestionFailedOnce = true;
        showFalseModal(clickedPlace);
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
      infoImportance.textContent = place.importance;
      infoFood.textContent = place.food;

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

    function showFalseModal(clickedPlace) {
      modalBanner.className = "px-5 py-4 border-b-4 border-slate-950 flex items-center justify-between bg-rose-600 text-white";
      modalVerdict.textContent = "FALSE! ✖";
      modalTag.textContent = "MISS";
      modalTag.classList.remove("hidden");

      falseMessage.textContent = `You clicked on ${clickedPlace.name}.`;

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
      questionText.textContent = "QUEST COMPLETE! All 22 CBSE Class 10 places mastered.";

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
  
