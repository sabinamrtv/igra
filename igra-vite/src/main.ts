interface Layer {
  name: string;
  depth: string;
  temperature: string;
  fact: string;
  creature?: {
    emoji: string;
    name: string;
    fact: string;
  };
}

const layers: Layer[] = [
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

const layersContainer = document.getElementById("layers")!;
const infoBox = {
  name: document.getElementById("layer-name")!,
  depth: document.getElementById("depth")!,
  temperature: document.getElementById("temperature")!,
  fact: document.getElementById("fact")!,
};

layers.forEach((layer) => {
  const div = document.createElement("div");
  div.className = "layer";
  div.style.background = `hsl(${Math.random() * 360}, 30%, 20%)`;
  div.innerHTML = `
    <div><strong>${layer.name}</strong></div>
    ${layer.creature ? `<div class="creature" title="${layer.creature.name}">${layer.creature.emoji}</div>` : ""}
  `;

  if (layer.creature) {
    div.querySelector(".creature")?.addEventListener("click", () => {
      alert(`Факт о существе: ${layer.creature?.fact}`);
    });
  }

  layersContainer.appendChild(div);
});

// Обновление информации при прокрутке
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const sectionHeight = window.innerHeight;
  const index = Math.floor(scrollY / sectionHeight);
  const currentLayer = layers[index] || layers[layers.length - 1];

  infoBox.name.textContent = currentLayer.name;
  infoBox.depth.textContent = `Глубина: ${currentLayer.depth}`;
  infoBox.temperature.textContent = `Температура: ${currentLayer.temperature}`;
  infoBox.fact.textContent = `Факт: ${currentLayer.fact}`;
});
