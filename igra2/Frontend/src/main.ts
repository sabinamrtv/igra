// Содержимое слоев Земли
const earthLayers = [
    { name: "Литосфера", depth: "0-60 км", temp: "15°C", description: "Литосфера состоит из земной коры и верхней мантии." },
    { name: "Кора", depth: "0-35 км", temp: "20°C", description: "Кора - самая внешняя часть литосферы, состоит из континентальной и океанической коры." },
    { name: "Верхняя часть мантии", depth: "35-60 км", temp: "1000°C", description: "Составляет верхнюю часть мантии и служит фундаментом для литосферы." },
    { name: "Мантия", depth: "35-2890 км", temp: "2200°C", description: "Мантия состоит из твердых и вязких материалов, из которых образуются магматические породы." },
    { name: "Астеносфера", depth: "100-200 км", temp: "1200°C", description: "Астеносфера - пластичная зона, часть верхней мантии." },
    { name: "Верхняя мезосфера", depth: "35-660 км", temp: "3000°C", description: "Составляет верхнюю часть мантии, где материалы имеют повышенную вязкость." },
    { name: "Нижняя мезосфера", depth: "660-2890 км", temp: "4000°C", description: "Нижняя часть мантии с более плотной структурой." },
    { name: "Внешнее ядро", depth: "2890-5150 км", temp: "5000°C", description: "Внешнее ядро состоит из расплавленных металлов." },
    { name: "Внутреннее ядро", depth: "5150-6371 км", temp: "6000°C", description: "Внутреннее ядро состоит из твердых металлов, таких как железо и никель." }
];

// Функция для создания слоя
const createLayer = (layer: any, index: number) => {
    const layerElement = document.createElement('div');
    layerElement.classList.add('layer');
    layerElement.innerHTML = `
        <h2>${layer.name}</h2>
        <p>Глубина: ${layer.depth}</p>
        <p>Температура: ${layer.temp}</p>
        <p>${layer.description}</p>
    `;
    document.getElementById('earth-layers')?.appendChild(layerElement);
};

// Функция для отображения информации о животном при клике
const displayAnimalInfo = (animal: string) => {
    const infoBox = document.getElementById('animals-info');
    if (infoBox) {
        infoBox.innerHTML = `Информация о ${animal}: Это удивительное животное обитает в подземных глубинах!`;
    }
};

// Инициализация слоев
earthLayers.forEach(createLayer);

// Добавление обработчика для кликов на картинках животных (пример)
document.querySelectorAll('.layer img').forEach((image: HTMLImageElement) => {
    image.addEventListener('click', () => {
        const animalName = image.alt; // Если у изображения есть alt с названием животного
        displayAnimalInfo(animalName);
    });
});
