const layersData = [
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

      const layersContainer = document.getElementById("layers");
      const layerName = document.getElementById("layer-name");
      const depth = document.getElementById("depth");
      const temperature = document.getElementById("temperature");
      const fact = document.getElementById("fact");
      const zoomLens = document.getElementById("zoom-lens");

      layersData.forEach((layer, index) => {
        const div = document.createElement("div");
        div.className = "layer";
        div.style.backgroundColor = layer.color;

        layer.creatures.forEach(src => {
          const img = document.createElement("img");
          img.src = `images/${src}`;
          img.className = "creature";
          img.style.top = `${Math.random() * 80 + 10}%`;
          img.style.left = `${Math.random() * 80 + 10}%`;
          img.title = "Нажми, чтобы узнать факт";
          img.onclick = () => {
            fact.textContent = `Факт о существе: ${layer.fact}`;
          };
          div.appendChild(img);
        });

        div.addEventListener("mouseenter", () => {
          layerName.textContent = layer.name;
          depth.textContent = `Глубина: ${layer.depth}`;
          temperature.textContent = `Температура: ${layer.temperature}`;
          fact.textContent = `Факт: ${layer.fact}`;
        });

        layersContainer.appendChild(div);
      });

      document.addEventListener("mousemove", e => {
        zoomLens.style.left = `${e.pageX - 75}px`;
        zoomLens.style.top = `${e.pageY - 75}px`;
      });

      document.addEventListener("mousedown", () => {
        zoomLens.style.display = "block";
      });
      document.addEventListener("mouseup", () => {
        zoomLens.style.display = "none";
      });
