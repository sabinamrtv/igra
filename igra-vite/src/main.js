var layers = [
    {
        name: "Литосфера",
        depth: "0 – 70 км",
        temperature: "15°C – 700°C",
        fact: "Земная кора и верхняя мантия образуют литосферу.",
        creature: {
            emoji: "🪱",
            name: "Червь",
            fact: "Некоторые черви живут на глубине до 3 км.",
        },
    },
    {
        name: "Земная кора",
        depth: "5 – 70 км",
        temperature: "700°C",
        fact: "Самый верхний твердый слой Земли.",
        creature: {
            emoji: "🐜",
            name: "Муравей",
            fact: "Колонии муравьёв могут достигать глубины 4 метра.",
        },
    },
    {
        name: "Мантия",
        depth: "70 – 2900 км",
        temperature: "1000°C – 3700°C",
        fact: "Составляет 84% объема Земли.",
    },
    {
        name: "Внешнее ядро",
        depth: "2900 – 5100 км",
        temperature: "3700°C – 4300°C",
        fact: "Жидкое железо и никель создают магнитное поле Земли.",
    },
    {
        name: "Внутреннее ядро",
        depth: "5100 – 6371 км",
        temperature: "4300°C – 6000°C",
        fact: "Твёрдое железо, несмотря на высокую температуру.",
    },
];
var layersContainer = document.getElementById("layers");
var infoBox = {
    name: document.getElementById("layer-name"),
    depth: document.getElementById("depth"),
    temperature: document.getElementById("temperature"),
    fact: document.getElementById("fact"),
};
layers.forEach(function (layer) {
    var _a;
    var div = document.createElement("div");
    div.className = "layer";
    div.style.background = "hsl(".concat(Math.random() * 360, ", 30%, 20%)");
    div.innerHTML = "\n    <div><strong>".concat(layer.name, "</strong></div>\n    ").concat(layer.creature ? "<div class=\"creature\" title=\"".concat(layer.creature.name, "\">").concat(layer.creature.emoji, "</div>") : "", "\n  ");
    if (layer.creature) {
        (_a = div.querySelector(".creature")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
            var _a;
            alert("\u0424\u0430\u043A\u0442 \u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435: ".concat((_a = layer.creature) === null || _a === void 0 ? void 0 : _a.fact));
        });
    }
    layersContainer.appendChild(div);
});
// Обновление информации при прокрутке
window.addEventListener("scroll", function () {
    var scrollY = window.scrollY;
    var sectionHeight = window.innerHeight;
    var index = Math.floor(scrollY / sectionHeight);
    var currentLayer = layers[index] || layers[layers.length - 1];
    infoBox.name.textContent = currentLayer.name;
    infoBox.depth.textContent = "\u0413\u043B\u0443\u0431\u0438\u043D\u0430: ".concat(currentLayer.depth);
    infoBox.temperature.textContent = "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ".concat(currentLayer.temperature);
    infoBox.fact.textContent = "\u0424\u0430\u043A\u0442: ".concat(currentLayer.fact);
});
