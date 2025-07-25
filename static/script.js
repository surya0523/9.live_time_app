function updateTime() {
  fetch("/api/time")
    .then(response => response.json())
    .then(data => {
      const timeDisplay = document.getElementById("time-display");
      timeDisplay.textContent = data.time;

      // Animate on update
      timeDisplay.classList.add("time-flash");
      setTimeout(() => {
        timeDisplay.classList.remove("time-flash");
      }, 300);
    });
}

setInterval(updateTime, 1000);
updateTime();
