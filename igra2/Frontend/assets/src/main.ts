window.addEventListener('scroll', () => {
  const maxDepth = 6371;
  const maxTemp = 6000;

  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = scrollTop / docHeight;

  // Глубина
  const currentDepth = Math.floor(scrollPercent * maxDepth);
  const depthStr = currentDepth.toString().padStart(4, '0');

  for (let i = 0; i < 4; i++) {
    const digitBox = document.getElementById(`d${i + 1}`);
    if (digitBox) digitBox.textContent = depthStr[i];
  }

  // Температура
  const currentTemp = Math.floor(scrollPercent * maxTemp);
  const tempElement = document.getElementById("temperatureValue");
  if (tempElement) tempElement.textContent = currentTemp.toString();

  // Движение лифта
  const elevatorCabin = document.querySelector(".elevator-cabin") as HTMLElement;
  if (elevatorCabin) {
    const viewportHeight = window.innerHeight;
    const trackStart = 0; 
    const trackEnd = viewportHeight - 60;

    const topOffset = trackStart + scrollPercent * trackEnd;
    elevatorCabin.style.top = `${topOffset}px`;
  }
});
