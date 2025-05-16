var layersData = [
    {
        name: "Литосфера",
        color: "#7b3f00",
        depth: "0-35 км",
        temperature: "15°C",
        fact: "Литосфера состоит из земной коры и верхней мантии.",
        creatures: ["worm.png", "mole.png"]
    },
    {
        name: "Земная кора",
        color: "#a0522d",
        depth: "35-70 км",
        temperature: "200°C",
        fact: "Толщина коры варьируется от 5 до 70 км.",
        creatures: ["ant.png"]
    },
    {
        name: "Верхняя мантия",
        color: "#8b4513",
        depth: "70-410 км",
        temperature: "1000°C",
        fact: "В ней возникают конвекционные потоки.",
        creatures: ["lava_monster.png"]
    },
    {
        name: "Мантия",
        color: "#5c2e00",
        depth: "410-660 км",
        temperature: "1500°C",
        fact: "Составляет около 84% объёма Земли.",
        creatures: ["rock_beast.png"]
    },
    {
        name: "Астеносфера",
        color: "#cc7722",
        depth: "660-700 км",
        temperature: "1600°C",
        fact: "Мягкая и вязкая часть мантии.",
        creatures: ["flame_worm.png"]
    },
    {
        name: "Верхняя мезосфера",
        color: "#b87333",
        depth: "700-1000 км",
        temperature: "1700°C",
        fact: "Более плотные и твердые породы.",
        creatures: ["pressure_snail.png"]
    },
    {
        name: "Нижняя мезосфера",
        color: "#4b3621",
        depth: "1000-2900 км",
        temperature: "2000°C",
        fact: "Расплавленные металлы и минералы.",
        creatures: ["metal_golem.png"]
    },
    {
        name: "Внешнее ядро",
        color: "#ff4500",
        depth: "2900-5100 км",
        temperature: "4000°C",
        fact: "Жидкое железо, создающее магнитное поле Земли.",
        creatures: ["fire_spirit.png"]
    },
    {
        name: "Внутреннее ядро",
        color: "#ff6347",
        depth: "5100-6371 км",
        temperature: "6000°C",
        fact: "Твёрдое железное ядро.",
        creatures: ["core_guardian.png"]
    }
];
var layersContainer = document.getElementById("layers");
var layerName = document.getElementById("layer-name");
var depth = document.getElementById("depth");
var temperature = document.getElementById("temperature");
var fact = document.getElementById("fact");
var zoomLens = document.getElementById("zoom-lens");
layersData.forEach(function (layer, index) {
    var div = document.createElement("div");
    div.className = "layer";
    div.style.backgroundColor = layer.color;
    layer.creatures.forEach(function (src) {
        var img = document.createElement("img");
        img.src = "images/".concat(src);
        img.className = "creature";
        img.style.top = "".concat(Math.random() * 80 + 10, "%");
        img.style.left = "".concat(Math.random() * 80 + 10, "%");
        img.title = "Нажми, чтобы узнать факт";
        img.onclick = function () {
            fact.textContent = "\u0424\u0430\u043A\u0442 \u043E \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435: ".concat(layer.fact);
        };
        div.appendChild(img);
    });
    div.addEventListener("mouseenter", function () {
        layerName.textContent = layer.name;
        depth.textContent = "\u0413\u043B\u0443\u0431\u0438\u043D\u0430: ".concat(layer.depth);
        temperature.textContent = "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430: ".concat(layer.temperature);
        fact.textContent = "\u0424\u0430\u043A\u0442: ".concat(layer.fact);
    });
    layersContainer.appendChild(div);
});
document.addEventListener("mousemove", function (e) {
    zoomLens.style.left = "".concat(e.pageX - 75, "px");
    zoomLens.style.top = "".concat(e.pageY - 75, "px");
});
document.addEventListener("mousedown", function () {
    zoomLens.style.display = "block";
});
document.addEventListener("mouseup", function () {
    zoomLens.style.display = "none";
});
