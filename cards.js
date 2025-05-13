const hiraganaList = [
    { hira: "あ", romaji: "a" }, { hira: "い", romaji: "i" }, { hira: "う", romaji: "u" }, { hira: "え", romaji: "e" }, { hira: "お", romaji: "o" },
    { hira: "か", romaji: "ka" }, { hira: "き", romaji: "ki" }, { hira: "く", romaji: "ku" }, { hira: "け", romaji: "ke" }, { hira: "こ", romaji: "ko" },
    { hira: "さ", romaji: "sa" }, { hira: "し", romaji: "shi" }, { hira: "す", romaji: "su" }, { hira: "せ", romaji: "se" }, { hira: "そ", romaji: "so" },
    { hira: "た", romaji: "ta" }, { hira: "ち", romaji: "chi" }, { hira: "つ", romaji: "tsu" }, { hira: "て", romaji: "te" }, { hira: "と", romaji: "to" },
    { hira: "な", romaji: "na" }, { hira: "に", romaji: "ni" }, { hira: "ぬ", romaji: "nu" }, { hira: "ね", romaji: "ne" }, { hira: "の", romaji: "no" },
    { hira: "は", romaji: "ha" }, { hira: "ひ", romaji: "hi" }, { hira: "ふ", romaji: "fu" }, { hira: "へ", romaji: "he" }, { hira: "ほ", romaji: "ho" },
    { hira: "ま", romaji: "ma" }, { hira: "み", romaji: "mi" }, { hira: "む", romaji: "mu" }, { hira: "め", romaji: "me" }, { hira: "も", romaji: "mo" },
    { hira: "や", romaji: "ya" }, { hira: "ゆ", romaji: "yu" }, { hira: "よ", romaji: "yo" },
    { hira: "ら", romaji: "ra" }, { hira: "り", romaji: "ri" }, { hira: "る", romaji: "ru" }, { hira: "れ", romaji: "re" }, { hira: "ろ", romaji: "ro" },
    { hira: "わ", romaji: "wa" }, { hira: "を", romaji: "wo" }, { hira: "ん", romaji: "n" }
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const selected = hiraganaList.sort(() => 0.5 - Math.random()).slice(0, 15);
const pairs = [];
selected.forEach(pair => {
    pairs.push({ type: 'hira', value: pair.hira, key: pair.romaji });
    pairs.push({ type: 'romaji', value: pair.romaji, key: pair.romaji });
});
shuffle(pairs);

const game = document.getElementById('card-game');
const matchedPairsDiv = document.getElementById('matchedPairs');
let first = null, second = null, lock = false;
let matchedCount = 0;
const TOTAL_PAIRS = 15;

pairs.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'card';
    div.classList.add(item.type);
    div.dataset.type = item.type;
    div.dataset.value = item.value;
    div.dataset.key = item.key;
    div.textContent = '';
    game.appendChild(div);

    div.addEventListener('click', () => {
        if (lock || div.classList.contains('revealed') || div.classList.contains('matched')) return;

        div.classList.add('revealed');
        div.textContent = item.value;

        if (!first) {
            first = div;
        } else {
            second = div;
            lock = true;

            if (first.dataset.key === second.dataset.key &&
                first !== second &&
                first.dataset.type !== second.dataset.type) {

                setTimeout(() => {
                    first.classList.add('matched');
                    second.classList.add('matched');
                    first.textContent = '';
                    second.textContent = '';

                    const pairDiv = document.createElement('div');
                    pairDiv.className = 'pair-card';
                    pairDiv.innerHTML = `<div>${item.type === 'hira' ? first.dataset.value : second.dataset.value}</div>
                                <small>${item.type === 'hira' ? second.dataset.value : first.dataset.value}</small>`;
                    matchedPairsDiv.appendChild(pairDiv);

                    matchedCount++;
                    if (matchedCount === TOTAL_PAIRS) {
                        document.getElementById('restartBtn').style.display = 'inline';
                    }

                    reset();
                }, 500);

            } else {
                setTimeout(() => {
                    first.classList.remove('revealed');
                    second.classList.remove('revealed');
                    first.textContent = '';
                    second.textContent = '';
                    reset();
                }, 1000);
            }
        }
    });
});

function reset() {
    [first, second, lock] = [null, null, false];
}

document.getElementById('restartBtn').addEventListener('click', () => {
    location.reload();
});

document.getElementById('infoBtn').addEventListener('click', () => {
    const panel = document.getElementById('infoPanel');
    if (panel.innerHTML.trim() === '') {
        const grouped = {
            A: ["a", "i", "u", "e", "o"],
            K: ["ka", "ki", "ku", "ke", "ko"],
            S: ["sa", "shi", "su", "se", "so"],
            T: ["ta", "chi", "tsu", "te", "to"],
            N: ["na", "ni", "nu", "ne", "no"],
            H: ["ha", "hi", "fu", "he", "ho"],
            M: ["ma", "mi", "mu", "me", "mo"],
            Y: ["ya", "", "yu", "", "yo"],
            R: ["ra", "ri", "ru", "re", "ro"],
            W: ["wa", "", "n", "", "wo"],
        };

        let table = "<table><thead><tr><th></th><th>A</th><th>I</th><th>U</th><th>E</th><th>O</th></tr></thead><tbody>";

        for (const row in grouped) {
            table += `<tr><th>${row}</th>`;
            grouped[row].forEach(r => {
                const hira = hiraganaList.find(h => h.romaji === r)?.hira || "";
                table += `<td>${hira ? `${hira}<br><small>${r}</small>` : ""}</td>`;
            });
            table += `</tr>`;
        }

        table += "</tbody></table>";
        panel.innerHTML = table;
        panel.style.display = "block";
    } else {
        panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
    }
});

