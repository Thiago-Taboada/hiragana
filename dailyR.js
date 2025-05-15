let currentPhrase;
let currentLine = 0;
let currentInputIndex = 0;

// const romajiPhrases = [
//     { romaji: "aaaaa", hiragana: "あああああ", translation: "hihihih" }
// ];

const romajiPhrases = [
    { romaji: "arigatou", hiragana: "ありがとう", translation: "thank you" },
    { romaji: "ohayou", hiragana: "おはよう", translation: "good morning" },
    { romaji: "konbanwa", hiragana: "こんばんは", translation: "good evening" },
    { romaji: "sayonara", hiragana: "さよなら", translation: "goodbye" },
    { romaji: "konnichiwa", hiragana: "こんにちは", translation: "hello" },
    { romaji: "sumimasen", hiragana: "すみません", translation: "excuse me / sorry" },
    { romaji: "onegai", hiragana: "おねがい", translation: "please" },
    { romaji: "hai", hiragana: "はい", translation: "yes" },
    { romaji: "iie", hiragana: "いいえ", translation: "no" },
    { romaji: "daisuki", hiragana: "だいすき", translation: "love / like a lot" },
    { romaji: "genki", hiragana: "げんき", translation: "healthy / energetic" },
    { romaji: "sensei", hiragana: "せんせい", translation: "teacher" },
    { romaji: "tomodachi", hiragana: "ともだち", translation: "friend" },
    { romaji: "nihon", hiragana: "にほん", translation: "Japan" },
    { romaji: "gakkou", hiragana: "がっこう", translation: "school" },
    { romaji: "tabemono", hiragana: "たべもの", translation: "food" },
    { romaji: "nomimono", hiragana: "のみもの", translation: "drink" },
    { romaji: "hon", hiragana: "ほん", translation: "book" },
    { romaji: "kaze", hiragana: "かぜ", translation: "wind / cold (illness)" },
    { romaji: "yuki", hiragana: "ゆき", translation: "snow" },
    { romaji: "sakura", hiragana: "さくら", translation: "cherry blossom" },
    { romaji: "mizu", hiragana: "みず", translation: "water" },
    { romaji: "kawaii", hiragana: "かわいい", translation: "cute" },
    { romaji: "ookii", hiragana: "おおきい", translation: "big" },
    { romaji: "chiisai", hiragana: "ちいさい", translation: "small" },
    { romaji: "hayai", hiragana: "はやい", translation: "fast / early" },
    { romaji: "osoi", hiragana: "おそい", translation: "slow / late" },
    { romaji: "takai", hiragana: "たかい", translation: "tall / expensive" },
    { romaji: "yasui", hiragana: "やすい", translation: "cheap / easy" },
    { romaji: "kirei", hiragana: "きれい", translation: "beautiful / clean" },
    { romaji: "shizuka", hiragana: "しずか", translation: "quiet" },
    { romaji: "nigiyaka", hiragana: "にぎやか", translation: "lively" },
    { romaji: "atarashii", hiragana: "あたらしい", translation: "new" },
    { romaji: "furui", hiragana: "ふるい", translation: "old" },
    { romaji: "omoshiroi", hiragana: "おもしろい", translation: "interesting / funny" },
    { romaji: "tanoshii", hiragana: "たのしい", translation: "fun" },
    { romaji: "kuruma", hiragana: "くるま", translation: "car" },
    { romaji: "densha", hiragana: "でんしゃ", translation: "train" },
    { romaji: "jitensha", hiragana: "じてんしゃ", translation: "bicycle" },
    { romaji: "ie", hiragana: "いえ", translation: "house" },
    { romaji: "heya", hiragana: "へや", translation: "room" },
    { romaji: "mado", hiragana: "まど", translation: "window" },
    { romaji: "isu", hiragana: "いす", translation: "chair" },
    { romaji: "teburu", hiragana: "てぶる", translation: "table" },
    { romaji: "denwa", hiragana: "でんわ", translation: "telephone" },
    { romaji: "kaban", hiragana: "かばん", translation: "bag" },
    { romaji: "kutsu", hiragana: "くつ", translation: "shoes" },
    { romaji: "kasa", hiragana: "かさ", translation: "umbrella" },
    { romaji: "ame", hiragana: "あめ", translation: "rain / candy" },
    { romaji: "yama", hiragana: "やま", translation: "mountain" },
    { romaji: "kawa", hiragana: "かわ", translation: "river" },
    { romaji: "umi", hiragana: "うみ", translation: "sea / ocean" },
    { romaji: "hoshi", hiragana: "ほし", translation: "star" },
    { romaji: "tsuki", hiragana: "つき", translation: "moon" },
    { romaji: "taiyou", hiragana: "たいよう", translation: "sun" },
    { romaji: "sora", hiragana: "そら", translation: "sky" },
    { romaji: "hana", hiragana: "はな", translation: "flower / nose" },
    { romaji: "ashi", hiragana: "あし", translation: "leg / foot" },
    { romaji: "te", hiragana: "て", translation: "hand" },
    { romaji: "me", hiragana: "め", translation: "eye" },
    { romaji: "kuchi", hiragana: "くち", translation: "mouth" },
    { romaji: "mimi", hiragana: "みみ", translation: "ear" },
    { romaji: "atama", hiragana: "あたま", translation: "head" },
    { romaji: "hara", hiragana: "はら", translation: "stomach" },
    { romaji: "inu", hiragana: "いぬ", translation: "dog" },
    { romaji: "neko", hiragana: "ねこ", translation: "cat" },
    { romaji: "tori", hiragana: "とり", translation: "bird" },
    { romaji: "sakana", hiragana: "さかな", translation: "fish" },
    { romaji: "uma", hiragana: "うま", translation: "horse" },
    { romaji: "ringo", hiragana: "りんご", translation: "apple" },
    { romaji: "mikan", hiragana: "みかん", translation: "mandarin orange" },
    { romaji: "budou", hiragana: "ぶどう", translation: "grapes" },
    { romaji: "banana", hiragana: "ばなな", translation: "banana" },
    { romaji: "pan", hiragana: "ぱん", translation: "bread" },
    { romaji: "miruku", hiragana: "みるく", translation: "milk" },
    { romaji: "cha", hiragana: "ちゃ", translation: "tea" },
    { romaji: "sake", hiragana: "さけ", translation: "alcohol / sake" },
    { romaji: "koucha", hiragana: "こうちゃ", translation: "black tea" },
    { romaji: "gyuunyuu", hiragana: "ぎゅうにゅう", translation: "cow milk" },
    { romaji: "kohi", hiragana: "こひ", translation: "coffee" },
    { romaji: "taberu", hiragana: "たべる", translation: "to eat" },
    { romaji: "nomu", hiragana: "のむ", translation: "to drink" },
    { romaji: "iku", hiragana: "いく", translation: "to go" },
    { romaji: "kuru", hiragana: "くる", translation: "to come" },
    { romaji: "kaeru", hiragana: "かえる", translation: "to return / go home" },
    { romaji: "miru", hiragana: "みる", translation: "to see / watch" },
    { romaji: "kiku", hiragana: "きく", translation: "to listen / hear" },
    { romaji: "hanasu", hiragana: "はなす", translation: "to speak" },
    { romaji: "shinu", hiragana: "しぬ", translation: "to die" },
    { romaji: "aruku", hiragana: "あるく", translation: "to walk" },
    { romaji: "hashiru", hiragana: "はしる", translation: "to run" },
    { romaji: "neru", hiragana: "ねる", translation: "to sleep" },
    { romaji: "okiru", hiragana: "おきる", translation: "to wake up" },
    { romaji: "asobu", hiragana: "あそぶ", translation: "to play" },
    { romaji: "benkyou", hiragana: "べんきょう", translation: "study" },
    { romaji: "yasumu", hiragana: "やすむ", translation: "to rest" },
    { romaji: "shigoto", hiragana: "しごと", translation: "work / job" },
    { romaji: "kaimono", hiragana: "かいもの", translation: "shopping" },
    { romaji: "ryokou", hiragana: "りょこう", translation: "travel" }
];

function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * romajiPhrases.length);
    return romajiPhrases[randomIndex];
}

function initializeGame() {
    currentPhrase = getRandomPhrase();
    document.getElementById("romajiPhrase").textContent = currentPhrase.romaji;
    const inputLines = document.getElementById("inputLines");
    inputLines.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        const line = document.createElement("div");
        line.classList.add("input-line");

        for (let j = 0; j < currentPhrase.hiragana.length; j++) {
            const box = document.createElement("input");
            box.type = "text";
            box.maxLength = 1;
            box.classList.add("hiragana-box");
            box.dataset.line = i;
            box.dataset.index = j;
            box.addEventListener("input", onBoxInput);
            line.appendChild(box);
        }

        inputLines.appendChild(line);
    }

    deactivateAllLines();
    activateLine(0); 
}

function onBoxInput(event) {
    const box = event.target;
    const lineIndex = box.dataset.line;
    const boxIndex = box.dataset.index;

    if (box.value.length === 1 && boxIndex < currentPhrase.hiragana.length - 1) {
        const nextBox = document.querySelector(`.hiragana-box[data-line="${lineIndex}"][data-index="${parseInt(boxIndex) + 1}"]`);
        if (nextBox) {
            nextBox.focus();
        }
    }

    if (isLineComplete(lineIndex)) {
        checkLine(lineIndex);
    }
}

function isLineComplete(lineIndex) {
    const line = document.querySelectorAll(`.hiragana-box[data-line="${lineIndex}"]`);
    return Array.from(line).every(box => box.value.length === 1);
}

function checkLine(lineIndex) {
    const line = document.querySelectorAll(`.hiragana-box[data-line="${lineIndex}"]`);
    let allCorrect = true;

    line.forEach((box, index) => {
        const userInput = box.value;
        const correctSyllable = currentPhrase.hiragana[index];

        if (userInput === correctSyllable) {
            box.classList.add("correct");
            box.classList.remove("wrong");
        } else {
            box.classList.add("wrong");
            box.classList.remove("correct");
            allCorrect = false;
        }
    });

    line.forEach(box => {
        box.disabled = true;
    });

    if (!allCorrect) {
        currentLine++;
        if (currentLine >= 5) {
            // Usuario perdió
            showModal(false);
            deactivateAllLines();
        } else {
            deactivateAllLines();
            activateLine(currentLine);
        }
    } else {
        // Ganó, aunque haya líneas restantes (porque acertó esta línea)
        showModal(true);
        deactivateAllLines();
    }
}

function activateLine(lineIndex) {
    const line = document.querySelectorAll(`.hiragana-box[data-line="${lineIndex}"]`);
    line.forEach(box => {
        box.disabled = false;
        box.value = '';
        box.classList.remove("correct", "wrong");
        box.classList.add("active");
    });
}


function deactivateAllLines() {
    const allBoxes = document.querySelectorAll('.hiragana-box');
    allBoxes.forEach(box => {
        box.disabled = true;
        box.classList.remove("active");
    });
}



function insertCharacter(character) {
    let activeBox = null;
    for (let lineIndex = currentLine; lineIndex < 5; lineIndex++) {
        const line = document.querySelectorAll(`.hiragana-box[data-line="${lineIndex}"]`);
        activeBox = Array.from(line).find(box => !box.value);
        if (activeBox) {
            break;
        }
    }

    if (activeBox) {
        activeBox.value = character;
        activeBox.dispatchEvent(new Event("input"));
    }
}

function showModal(won) {
    const modal = document.getElementById("resultModal");
    const title = document.getElementById("modalTitle");
    const hiragana = document.getElementById("modalHiragana");
    const romaji = document.getElementById("modalRomaji");
    const translation = document.getElementById("modalTranslation");
    const prompt = document.getElementById("modalPrompt");
    const actionBtn = document.getElementById("modalActionBtn");

    if (won) {
        title.textContent = "Congratulations";
        hiragana.textContent = currentPhrase.hiragana;
        romaji.textContent = currentPhrase.romaji;
        translation.textContent = currentPhrase.translation;
        prompt.textContent = "Want to try another phrase?";
        actionBtn.textContent = "Try Another";
    } else {
        title.textContent = "You Lost";
        hiragana.textContent = "? ? ? ? ?";
        romaji.textContent = "";
        translation.textContent = "? ? ?";
        prompt.textContent = "Better luck next time!";
        actionBtn.textContent = "Try Again";
    }

    actionBtn.onclick = () => {
        modal.style.display = "none";
        if (won) {
            currentPhrase = getRandomPhrase();
            currentLine = 0;
            initializeGame();
        } else {
            currentLine = 0;
            initializeGame();
        }
    };

    modal.style.display = "flex";
}

document.addEventListener("DOMContentLoaded", () => {
    initializeGame();
});

document.getElementById("showKeyboardBtn").addEventListener("click", () => {
    const keyboardContainer = document.getElementById("virtualKeyboard");
    const toggleButton = document.getElementById("showKeyboardBtn");

    if (keyboardContainer.innerHTML.trim() === '') {
        const groupedHiragana = [
            ["あ", "い", "う", "え", "お"],
            ["か", "き", "く", "け", "こ"],
            ["が", "ぎ", "ぐ", "げ", "ご"],
            ["さ", "し", "す", "せ", "そ"],
            ["ざ", "じ", "ず", "ぜ", "ぞ"],
            ["た", "ち", "つ", "て", "と"],
            ["だ", "ぢ", "づ", "で", "ど"],
            ["な", "に", "ぬ", "ね", "の"],
            ["は", "ひ", "ふ", "へ", "ほ"],
            ["ば", "び", "ぶ", "べ", "ぼ"],
            ["ぱ", "ぴ", "ぷ", "ぺ", "ぽ"],
            ["ま", "み", "む", "め", "も"],
            ["や", "", "ゆ", "", "よ"],
            ["ら", "り", "る", "れ", "ろ"],
            ["わ", "", "ん", "", "を"]
        ];

        let table = "<table style='margin: auto; border-collapse: collapse;'>";

        groupedHiragana.forEach(row => {
            table += "<tr>";
            row.forEach(char => {
                if (char === "") {
                    table += `<td style="padding:5px;"></td>`;
                } else {
                    table += `<td style="padding:5px;">
                        <button class="hiragana-key" type="button">${char}</button>
                    </td>`;
                }
            });
            table += "</tr>";
        });

        table += "</table>";
        keyboardContainer.innerHTML = table;
        keyboardContainer.style.display = "block";
        toggleButton.textContent = "Close keyboard";

        keyboardContainer.querySelectorAll("button.hiragana-key").forEach(button => {
            button.addEventListener("click", () => {
                insertCharacter(button.textContent);
            });
        });
    } else {
        const isVisible = keyboardContainer.style.display !== "none";
        keyboardContainer.style.display = isVisible ? "none" : "block";
        toggleButton.textContent = isVisible ? "Open keyboard" : "Close keyboard";
    }
});

