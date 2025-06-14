const express = require('express');
const app = express();
const port = 3000;

// Папка для статических файлов
app.use(express.static('public'));

// Данные о слоях Земли с изображениями
app.get('/api/layers', (req, res) => {
    res.json([
        { 
            name: "Литосфера", 
            depth: "0-60 км", 
            temp: "15°C", 
            description: "Литосфера состоит из земной коры и верхней мантии.",
            image: "/images/lithosphere.jpg"
        },
        { 
            name: "Кора", 
            depth: "0-35 км", 
            temp: "20°C", 
            description: "Кора - самая внешняя часть литосферы, состоит из континентальной и океанической коры.",
            image: "/images/crust.jpg"
        },
        { 
            name: "Верхняя часть мантии", 
            depth: "35-60 км", 
            temp: "1000°C", 
            description: "Составляет верхнюю часть мантии и служит фундаментом для литосферы.",
            image: "/images/upper_mantle.jpg"
        },
        { 
            name: "Мантия", 
            depth: "35-2890 км", 
            temp: "2200°C", 
            description: "Мантия состоит из твердых и вязких материалов, из которых образуются магматические породы.",
            image: "/images/mantle.jpg"
        },
        { 
            name: "Астеносфера", 
            depth: "100-200 км", 
            temp: "1200°C", 
            description: "Астеносфера - пластичная зона, часть верхней мантии.",
            image: "/images/asthenosphere.jpg"
        },
        { 
            name: "Верхняя мезосфера", 
            depth: "35-660 км", 
            temp: "3000°C", 
            description: "Составляет верхнюю часть мантии, где материалы имеют повышенную вязкость.",
            image: "/images/upper_mesosphere.jpg"
        },
        { 
            name: "Нижняя мезосфера", 
            depth: "660-2890 км", 
            temp: "4000°C", 
            description: "Нижняя часть мантии с более плотной структурой.",
            image: "/images/lower_mesosphere.jpg"
        },
        { 
            name: "Внешнее ядро", 
            depth: "2890-5150 км", 
            temp: "5000°C", 
            description: "Внешнее ядро состоит из расплавленных металлов.",
            image: "/images/outer_core.jpg"
        },
        { 
            name: "Внутреннее ядро", 
            depth: "5150-6371 км", 
            temp: "6000°C", 
            description: "Внутреннее ядро состоит из твердых металлов, таких как железо и никель.",
            image: "/images/inner_core.jpg"
        }
    ]);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
