const STORY_STORAGE_KEY = "sharkdle_story_mode_v2";
const ACHIEVEMENT_STORAGE_KEY = "unlockedAchievements";

const areaDefinitions = [
    {
        id: "atlantic",
        name: "Atlantic Ocean",
        label: "Atlantic Ocean",
        left: 36,
        top: 48,
        sharks: ["White Shark", "Blue Shark", "Shortfin Mako Shark", "Thresher Shark", "Great Hammerhead Shark"],
        narrative: "The Atlantic chapter begins where Sharkdle’s research network first broke down. Satellite tags have gone dark, photo IDs are mismatched, and some of the ocean’s most iconic sharks are being logged under the wrong names. You are stepping into the role of field archivist, rebuilding the Atlantic record one challenge at a time until the migration story makes sense again.",
        facts: [
            "The Atlantic is home to the White Shark.",
            "Blue Sharks are a well-known Atlantic pelagic species.",
            "Thresher Sharks can be found in Atlantic waters."
        ],
        challenges: [
            { name: "Signal Scan", desc: "Pick the sharks that belong to the Atlantic." },
            { name: "Name Repair", desc: "Unscramble Atlantic species names." },
            { name: "Region Report", desc: "Sort true and false Atlantic field reports." }
        ]
    },
    {
        id: "pacific",
        name: "Pacific Ocean",
        label: "Pacific Ocean",
        left: 13,
        top: 52,
        sharks: ["Tiger Shark", "Goblin Shark", "Salmon Shark", "Whale Shark", "Basking Shark"],
        narrative: "The Pacific is less a chapter and more a maze. Reports arrive from open water, remote reefs, and deep trenches all at once, mixing gentle giants with rare deep-sea hunters. Here the story widens: you are no longer just fixing a damaged logbook, you are trying to make sense of the largest shark theater on the planet.",
        facts: [
            "Whale Sharks occur in the Pacific Ocean.",
            "Goblin Sharks are part of Pacific deep-water fauna.",
            "Tiger Sharks are found throughout the Pacific."
        ],
        challenges: [
            { name: "Current Check", desc: "Identify species from the Pacific roster." },
            { name: "Field Decoder", desc: "Repair scrambled Pacific shark names." },
            { name: "Depth Report", desc: "Judge Pacific expedition claims as true or false." }
        ]
    },
    {
        id: "indian",
        name: "Indian Ocean",
        label: "Indian Ocean",
        left: 64,
        top: 65,
        sharks: ["Bull Shark", "Zebra Shark", "Nurse Shark", "Blacktip Reef Shark", "Grey Reef Shark"],
        narrative: "The Indian Ocean feels alive with motion. Monsoon shifts, reef corridors, and river-linked species have tangled the regional database into a mess of half-true observations. In this chapter the challenge is precision: you need to separate lookalike reef records from wide-ranging predators and restore order to a system overwhelmed by moving water.",
        facts: [
            "Zebra Sharks are associated with the Indian Ocean region.",
            "Bull Sharks can move between salt and fresh water.",
            "Grey Reef Sharks are a common Indian Ocean reef species."
        ],
        challenges: [
            { name: "Reef Census", desc: "Pick sharks that belong to the Indian Ocean." },
            { name: "Species Restore", desc: "Unscramble Indian Ocean shark names." },
            { name: "Monsoon Logs", desc: "Sort true and false Indian Ocean reports." }
        ]
    },
    {
        id: "mediterranean",
        name: "Mediterranean Sea",
        label: "Mediterranean Sea",
        left: 54,
        top: 41,
        sharks: ["Blue Shark", "Shortfin Mako Shark", "Sandbar Shark", "Smooth Hammerhead Shark", "Tope Shark"],
        narrative: "The Mediterranean chapter is quieter, tighter, and full of uncertainty. Every confirmed sighting carries more weight here because the basin keeps its secrets well. Old records, modern observations, and passing pelagic species all collide in a place where one accurate identification can rewrite what researchers think they know.",
        facts: [
            "Blue Sharks are regularly recorded in the Mediterranean.",
            "Shortfin Makos also occur in the Mediterranean Sea.",
            "Sandbar Sharks have Mediterranean records."
        ],
        challenges: [
            { name: "Sea Check", desc: "Identify sharks linked to the Mediterranean." },
            { name: "Archive Repair", desc: "Unscramble Mediterranean species names." },
            { name: "Harbor Notes", desc: "Sort true and false Mediterranean claims." }
        ]
    },
    {
        id: "australia",
        name: "Australia",
        label: "Australia",
        left: 85,
        top: 80,
        sharks: ["Wobbegong", "Port Jackson Shark", "Epaulette Shark", "Grey Nurse Shark", "Gummy Shark"],
        narrative: "Australia changes the tone of the journey. Instead of familiar open-ocean heavyweights, you start dealing with stranger, more specialized sharks: bottom-dwellers, reef species, and evolutionary oddities that make the region feel like a living field guide. This chapter is about adaptability and learning the language of sharks that do not fit the usual silhouette.",
        facts: [
            "Wobbegongs are iconic Australian sharks.",
            "Port Jackson Sharks are strongly associated with Australia.",
            "Grey Nurse Sharks are a protected Australian species."
        ],
        challenges: [
            { name: "Outback Waters", desc: "Pick the sharks that belong to Australia." },
            { name: "Name Restore", desc: "Unscramble Australian shark species names." },
            { name: "Coastal Report", desc: "Sort true and false Australian shark notes." }
        ]
    },
    {
        id: "south_africa",
        name: "South Africa",
        label: "South Africa",
        left: 55,
        top: 76,
        sharks: ["White Shark", "Ragged-Tooth Shark", "Spotted Gully Shark", "Leopard Catshark", "Pyjama Shark"],
        narrative: "South Africa is where the story sharpens. The waters are rough, the encounters are dramatic, and the archive is full of reports written from places where mistakes can be dangerous. This chapter mixes famous predator territory with smaller regional species, forcing you to think beyond reputation and trust the details in front of you.",
        facts: [
            "Pyjama Sharks are found around South Africa.",
            "Ragged-Tooth Sharks are part of South African waters.",
            "Spotted Gully Sharks are linked to South Africa."
        ],
        challenges: [
            { name: "Cape Survey", desc: "Identify species from South African waters." },
            { name: "Tag Recovery", desc: "Unscramble South African shark names." },
            { name: "Dive Notes", desc: "Sort true and false South Africa reports." }
        ]
    },
    {
        id: "usa_east",
        name: "USA (East Coast)",
        label: "USA East Coast",
        left: 28,
        top: 38,
        sharks: ["Sand Tiger Shark", "Dusky Shark", "Spinner Shark", "Blacktip Shark", "Bonnethead"],
        narrative: "The USA East Coast chapter is all about movement. Seasonal visitors sweep through in waves, coastal nurseries fill with younger sharks, and estuarine species blur the line between offshore and inshore records. Your role here is to read the coast like a timeline and catch the difference between a passing migration and a local pattern.",
        facts: [
            "Bonnetheads are found along the USA East Coast.",
            "Sand Tiger Sharks are famous East Coast visitors.",
            "Spinner Sharks migrate through the USA East Coast."
        ],
        challenges: [
            { name: "Coast Watch", desc: "Pick sharks that belong to the USA East Coast." },
            { name: "Data Repair", desc: "Unscramble East Coast shark names." },
            { name: "Tide Report", desc: "Sort true and false East Coast field notes." }
        ]
    },
    {
        id: "japan",
        name: "Japan",
        label: "Japan",
        left: 87,
        top: 36,
        sharks: ["Japanese Bullhead Shark", "Frilled Shark", "Megamouth Shark", "Brownbanded Bamboo Shark", "Whitetip Reef Shark"],
        narrative: "Japan feels like the edge of the map. Deepwater species, ancient body plans, and rare giant encounters turn this chapter into a final exam in uncertainty. By the time you arrive here, the story is no longer about simply unlocking regions. It is about proving you can read the shark world even when it looks unfamiliar, ancient, and half-hidden in the dark.",
        facts: [
            "The Japanese Bullhead Shark is associated with Japan.",
            "Frilled Sharks are among the strange sharks recorded near Japan.",
            "Megamouth Sharks have notable ties to Japanese waters."
        ],
        challenges: [
            { name: "Deep Scan", desc: "Identify sharks connected to Japan." },
            { name: "Archive Restore", desc: "Unscramble Japanese region shark names." },
            { name: "Research Brief", desc: "Sort true and false Japan expedition reports." }
        ]
    }
];

const areaOrder = areaDefinitions.map(area => area.id);
const areaAchievementMap = {
    atlantic: "atlantic_master",
    pacific: "pacific_master",
    indian: "indian_master",
    mediterranean: "mediterranean_master",
    australia: "australia_master",
    south_africa: "sothafrica_master",
    usa_east: "usa_master",
    japan: "japan_master"
};

let storyState = null;
let currentOpenAreaId = null;

function defaultStoryState() {
    const areas = {};
    areaDefinitions.forEach((area, index) => {
        areas[area.id] = {
            unlocked: index === 0,
            completed: false,
            challenges: [false, false, false]
        };
    });

    return { areas };
}

function loadStoryState() {
    const base = defaultStoryState();
    try {
        const raw = localStorage.getItem(STORY_STORAGE_KEY);
        if (raw) {
            const saved = JSON.parse(raw);
            areaDefinitions.forEach(area => {
                const savedArea = saved?.areas?.[area.id];
                if (savedArea) {
                    base.areas[area.id] = {
                        unlocked: Boolean(savedArea.unlocked),
                        completed: Boolean(savedArea.completed),
                        challenges: [0, 1, 2].map(index => Boolean(savedArea.challenges?.[index]))
                    };
                }
            });
        }
    } catch (error) {
        console.warn("Failed to parse story state:", error);
    }

    applyLegacyUnlocks(base);
    storyState = base;
    syncLegacyProgress();
}

function applyLegacyUnlocks(state) {
    const legacyProgress = parseInt(localStorage.getItem("storyProgress") || "0", 10);
    if (Number.isFinite(legacyProgress) && legacyProgress > 0) {
        for (let i = 0; i <= Math.min(legacyProgress, areaDefinitions.length - 1); i++) {
            state.areas[areaDefinitions[i].id].unlocked = true;
        }
    }

    if (localStorage.getItem("atlanticCrosswordComplete") === "true") {
        state.areas.atlantic.unlocked = true;
        state.areas.atlantic.completed = true;
        state.areas.atlantic.challenges = [true, true, true];
        if (state.areas.pacific) state.areas.pacific.unlocked = true;
    }

    if (localStorage.getItem("pacificWordsearchComplete") === "true" || localStorage.getItem("pacificUnlocked") === "true") {
        state.areas.pacific.unlocked = true;
        if (localStorage.getItem("pacificWordsearchComplete") === "true") {
            state.areas.pacific.completed = true;
            state.areas.pacific.challenges = [true, true, true];
            if (state.areas.indian) state.areas.indian.unlocked = true;
        }
    }

    if (localStorage.getItem("indianUnlocked") === "true" && state.areas.indian) {
        state.areas.indian.unlocked = true;
    }
}

function saveStoryState() {
    localStorage.setItem(STORY_STORAGE_KEY, JSON.stringify(storyState));
    syncLegacyProgress();
}

function syncLegacyProgress() {
    let highestUnlocked = 0;
    areaDefinitions.forEach((area, index) => {
        const areaState = storyState.areas[area.id];
        if (areaState.unlocked || areaState.completed) highestUnlocked = index;
        if (areaState.completed) {
            localStorage.setItem(`storyAreaCompleted_${area.id}`, "true");
        }
    });

    localStorage.setItem("storyProgress", String(highestUnlocked));
    if (storyState.areas.atlantic.completed) {
        localStorage.setItem("atlanticCrosswordComplete", "true");
        localStorage.setItem("pacificUnlocked", "true");
    }
    if (storyState.areas.pacific.unlocked || storyState.areas.pacific.completed) {
        localStorage.setItem("pacificUnlocked", "true");
    }
    if (storyState.areas.pacific.completed || storyState.areas.indian.unlocked || storyState.areas.indian.completed) {
        localStorage.setItem("indianUnlocked", "true");
        localStorage.setItem("pacificWordsearchComplete", "true");
    }
}

function awardStoryAchievement(achievementId) {
    if (!achievementId) return;
    if (typeof window.unlockAchievement === "function") {
        window.unlockAchievement(achievementId);
        return;
    }
    const unlocked = JSON.parse(localStorage.getItem(ACHIEVEMENT_STORAGE_KEY) || "[]");
    if (!unlocked.includes(achievementId)) {
        unlocked.push(achievementId);
        localStorage.setItem(ACHIEVEMENT_STORAGE_KEY, JSON.stringify(unlocked));
    }
}

function getAreaState(areaId) {
    return storyState.areas[areaId];
}

function getAreaIndex(areaId) {
    return areaOrder.indexOf(areaId);
}

function completeChallenge(areaId, challengeIndex) {
    const areaState = getAreaState(areaId);
    areaState.challenges[challengeIndex] = true;

    if (areaState.challenges.every(Boolean)) {
        completeArea(areaId);
    }

    saveStoryState();
    renderMap();
}

function completeArea(areaId) {
    const areaState = getAreaState(areaId);
    areaState.completed = true;
    awardStoryAchievement(areaAchievementMap[areaId]);

    const currentIndex = getAreaIndex(areaId);
    const nextArea = areaDefinitions[currentIndex + 1];
    if (nextArea) {
        storyState.areas[nextArea.id].unlocked = true;
    }
}

function renderMap() {
    const pins = document.getElementById("map-pins");
    pins.innerHTML = "";

    areaDefinitions.forEach(area => {
        const areaState = getAreaState(area.id);
        const pin = document.createElement("div");
        pin.className = "map-pin";
        pin.style.left = `${area.left}%`;
        pin.style.top = `${area.top}%`;

        const btn = document.createElement("button");
        btn.className = "map-pin-btn";
        btn.disabled = !areaState.unlocked;
        btn.title = area.name;
        btn.textContent = areaState.completed ? "✓" : areaState.unlocked ? "🦈" : "🔒";
        btn.onclick = () => openAreaModal(area.id);

        const label = document.createElement("div");
        label.className = "map-pin-label";
        label.textContent = area.name;

        pin.appendChild(btn);
        pin.appendChild(label);
        pins.appendChild(pin);
    });
}

function openAreaModal(areaId) {
    const area = areaDefinitions.find(entry => entry.id === areaId);
    const areaState = getAreaState(areaId);
    const modal = document.getElementById("area-modal");
    const closeBtn = document.getElementById("close-modal");
    const title = document.getElementById("modal-title");
    const challengesContainer = document.getElementById("challenges-container");
    const challengeView = document.getElementById("pairs-game-container");
    const label = document.querySelector(".story-modal-area-label");
    const narrative = document.getElementById("story-modal-narrative");
    const progressBar = document.getElementById("story-modal-progress-bar");
    const progressLabel = document.getElementById("story-modal-progress-label");

    currentOpenAreaId = areaId;

    title.textContent = `${area.name} Challenges`;
    if (label) label.innerHTML = `<span class="area-icon">🌊</span> ${area.label}`;
    if (narrative) narrative.textContent = area.narrative;

    const completeCount = areaState.challenges.filter(Boolean).length;
    progressBar.style.width = `${(completeCount / 3) * 100}%`;
    progressLabel.textContent = `${completeCount}/3 Challenges Complete`;

    challengeView.style.display = "none";
    challengeView.innerHTML = "";
    challengesContainer.innerHTML = "";

    const challengeDefinitions = [
        { ...(area.challenges?.[0] || { name: "Signal Scan", desc: "Pick the sharks that belong to this region." }), start: () => startSpeciesQuiz(areaId) },
        { ...(area.challenges?.[1] || { name: "Name Repair", desc: "Unscramble species names from the region." }), start: () => startUnscrambleChallenge(areaId) },
        { ...(area.challenges?.[2] || { name: "Region Report", desc: "Sort true and false field reports." }), start: () => startTrueFalseChallenge(areaId) }
    ];

    challengeDefinitions.forEach((challenge, index) => {
        const btn = document.createElement("button");
        btn.className = "challenge-btn";
        btn.style.marginBottom = "12px";
        btn.innerHTML = `<b>${challenge.name}</b><br><span style="font-size:13px;opacity:0.9;">${challenge.desc}</span>`;
        btn.disabled = index > 0 && !areaState.challenges[index - 1];
        if (areaState.challenges[index]) {
            btn.style.background = "linear-gradient(90deg, #4caf50, #81c784)";
        }
        btn.onclick = challenge.start;
        challengesContainer.appendChild(btn);
    });

    closeBtn.onclick = () => {
        modal.style.display = "none";
        challengeView.style.display = "none";
        currentOpenAreaId = null;
    };

    modal.onclick = event => {
        if (event.target === modal) {
            modal.style.display = "none";
            currentOpenAreaId = null;
        }
    };

    modal.style.display = "flex";
}

function getOtherAreaSharks(areaId) {
    return areaDefinitions
        .filter(area => area.id !== areaId)
        .flatMap(area => area.sharks)
        .filter(Boolean);
}

function showChallengeView(renderFn) {
    const challengeView = document.getElementById("pairs-game-container");
    challengeView.style.display = "block";
    challengeView.innerHTML = "";
    renderFn(challengeView);
}

function renderChallengeComplete(container, areaId, title, text) {
    container.innerHTML = "";
    const heading = document.createElement("h3");
    heading.textContent = title;
    container.appendChild(heading);

    const body = document.createElement("p");
    body.textContent = text;
    container.appendChild(body);

    const backBtn = document.createElement("button");
    backBtn.className = "challenge-btn";
    backBtn.style.width = "auto";
    backBtn.textContent = "Back to Challenges";
    backBtn.onclick = () => openAreaModal(areaId);
    container.appendChild(backBtn);
}

function startSpeciesQuiz(areaId) {
    const area = areaDefinitions.find(entry => entry.id === areaId);
    const otherSharks = shuffle(getOtherAreaSharks(areaId).slice()).slice(0, 12);
    const targets = shuffle(area.sharks.slice()).slice(0, 4);
    let round = 0;

    showChallengeView(container => {
        const status = document.createElement("div");
        status.className = "pairs-moves";
        container.appendChild(status);

        const prompt = document.createElement("div");
        prompt.style.fontSize = "1.15em";
        prompt.style.margin = "14px 0";
        container.appendChild(prompt);

        const optionsWrap = document.createElement("div");
        optionsWrap.style.display = "grid";
        optionsWrap.style.gridTemplateColumns = "repeat(auto-fit, minmax(180px, 1fr))";
        optionsWrap.style.gap = "12px";
        container.appendChild(optionsWrap);

        const feedback = document.createElement("div");
        feedback.style.marginTop = "12px";
        feedback.style.fontWeight = "700";
        container.appendChild(feedback);

        function renderRound() {
            if (round >= targets.length) {
                completeChallenge(areaId, 0);
                renderChallengeComplete(container, areaId, `${area.name} signal scan complete.`, "You correctly identified the regional species.");
                return;
            }

            status.textContent = `Question ${round + 1} of ${targets.length}`;
            prompt.textContent = `Which shark belongs to the ${area.name}?`;
            feedback.textContent = "";
            optionsWrap.innerHTML = "";

            const correct = targets[round];
            const distractors = shuffle(otherSharks.slice()).filter(name => name !== correct).slice(0, 3);
            shuffle([correct, ...distractors]).forEach(option => {
                const button = document.createElement("button");
                button.className = "challenge-btn";
                button.textContent = option;
                button.onclick = () => {
                    if (option === correct) {
                        feedback.textContent = "Correct!";
                        feedback.style.color = "#4caf50";
                        round += 1;
                        setTimeout(renderRound, 500);
                    } else {
                        feedback.textContent = "Not quite. Try again.";
                        feedback.style.color = "#ff6b6b";
                    }
                };
                optionsWrap.appendChild(button);
            });
        }

        renderRound();
    });
}

function startUnscrambleChallenge(areaId) {
    const area = areaDefinitions.find(entry => entry.id === areaId);
    const words = shuffle(area.sharks.slice()).slice(0, 4);
    let round = 0;

    showChallengeView(container => {
        const status = document.createElement("div");
        status.className = "pairs-moves";
        container.appendChild(status);

        const scrambled = document.createElement("div");
        scrambled.style.fontSize = "1.35em";
        scrambled.style.margin = "18px 0 12px 0";
        scrambled.style.color = "#ffd700";
        scrambled.style.letterSpacing = "2px";
        container.appendChild(scrambled);

        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "Type the shark name...";
        input.style.fontSize = "1.1em";
        input.style.padding = "10px 14px";
        input.style.borderRadius = "10px";
        input.style.border = "2px solid #00b4d8";
        input.style.width = "90%";
        container.appendChild(input);

        const submit = document.createElement("button");
        submit.className = "challenge-btn";
        submit.style.width = "auto";
        submit.textContent = "Submit";
        container.appendChild(submit);

        const feedback = document.createElement("div");
        feedback.style.marginTop = "12px";
        feedback.style.fontWeight = "700";
        container.appendChild(feedback);

        function renderRound() {
            if (round >= words.length) {
                completeChallenge(areaId, 1);
                renderChallengeComplete(container, areaId, `${area.name} name repair complete.`, "The species records are clean again.");
                return;
            }

            status.textContent = `Word ${round + 1} of ${words.length}`;
            scrambled.textContent = shuffleString(words[round].replace(/\s+/g, ""));
            input.value = "";
            feedback.textContent = "";
            input.focus();
        }

        submit.onclick = () => {
            if (input.value.trim().toLowerCase() === words[round].toLowerCase()) {
                feedback.textContent = "Correct!";
                feedback.style.color = "#4caf50";
                round += 1;
                setTimeout(renderRound, 500);
            } else {
                feedback.textContent = "Incorrect, try again.";
                feedback.style.color = "#ff6b6b";
            }
        };

        input.addEventListener("keydown", event => {
            if (event.key === "Enter") submit.click();
        });

        renderRound();
    });
}

function startTrueFalseChallenge(areaId) {
    const area = areaDefinitions.find(entry => entry.id === areaId);
    const otherAreas = areaDefinitions.filter(entry => entry.id !== areaId);
    const trueStatements = area.facts.map(text => ({ text, answer: true }));
    const falseStatements = area.sharks.slice(0, 3).map((shark, index) => {
        const wrongArea = otherAreas[index % otherAreas.length];
        return {
            text: `${shark} belongs to ${wrongArea.name}.`,
            answer: false
        };
    });
    const rounds = shuffle([...trueStatements, ...falseStatements]).slice(0, 5);
    let round = 0;

    showChallengeView(container => {
        const status = document.createElement("div");
        status.className = "pairs-moves";
        container.appendChild(status);

        const statement = document.createElement("div");
        statement.style.fontSize = "1.15em";
        statement.style.margin = "16px 0";
        statement.style.lineHeight = "1.6";
        container.appendChild(statement);

        const row = document.createElement("div");
        row.style.display = "flex";
        row.style.gap = "14px";
        row.style.justifyContent = "center";
        container.appendChild(row);

        const trueBtn = document.createElement("button");
        trueBtn.className = "challenge-btn";
        trueBtn.textContent = "True";
        row.appendChild(trueBtn);

        const falseBtn = document.createElement("button");
        falseBtn.className = "challenge-btn";
        falseBtn.textContent = "False";
        row.appendChild(falseBtn);

        const feedback = document.createElement("div");
        feedback.style.marginTop = "12px";
        feedback.style.fontWeight = "700";
        container.appendChild(feedback);

        function renderRound() {
            if (round >= rounds.length) {
                completeChallenge(areaId, 2);
                renderChallengeComplete(container, areaId, `${area.name} report complete.`, "You sorted the field notes correctly.");
                return;
            }

            status.textContent = `Statement ${round + 1} of ${rounds.length}`;
            statement.textContent = rounds[round].text;
            feedback.textContent = "";
        }

        function answer(value) {
            if (value === rounds[round].answer) {
                feedback.textContent = "Correct!";
                feedback.style.color = "#4caf50";
                round += 1;
                setTimeout(renderRound, 450);
            } else {
                feedback.textContent = "Incorrect, try again.";
                feedback.style.color = "#ff6b6b";
            }
        }

        trueBtn.onclick = () => answer(true);
        falseBtn.onclick = () => answer(false);
        renderRound();
    });
}

function shuffleString(text) {
    const chars = text.split("");
    for (let i = chars.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [chars[i], chars[j]] = [chars[j], chars[i]];
    }
    const shuffled = chars.join("");
    if (shuffled === text && new Set(chars).size > 1) return shuffleString(text);
    return shuffled;
}

function shuffle(array) {
    const clone = array.slice();
    for (let i = clone.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [clone[i], clone[j]] = [clone[j], clone[i]];
    }
    return clone;
}

function completeOpenMapSection() {
    const modal = document.getElementById("area-modal");
    if (!modal || modal.style.display === "none" || !currentOpenAreaId) {
        console.log("❌ Open a map section modal first, then run completeOpenMapSection().");
        return false;
    }

    const area = areaDefinitions.find(entry => entry.id === currentOpenAreaId);
    const areaState = getAreaState(currentOpenAreaId);
    if (!area || !areaState) {
        console.log("❌ Could not resolve the currently open map section.");
        return false;
    }

    areaState.challenges = [true, true, true];
    completeArea(currentOpenAreaId);
    saveStoryState();
    renderMap();
    openAreaModal(currentOpenAreaId);

    console.log(`✅ Completed map section: ${area.name}`);
    return true;
}

window.completeOpenMapSection = completeOpenMapSection;

document.addEventListener("DOMContentLoaded", () => {
    loadStoryState();
    renderMap();
});
