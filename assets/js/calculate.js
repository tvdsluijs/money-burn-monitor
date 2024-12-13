document.addEventListener("DOMContentLoaded", () => {
  const startButton = document.getElementById("start");
  const stopButton = document.getElementById("stop");
  const resetButton = document.getElementById("reset");
  const timerDisplay = document.getElementById("timer");
  const costDisplay = document.getElementById("cost-value");
  const costBreakdownContainer = document.getElementById("cost-breakdown");

  let timer = null;
  let elapsedMilliseconds = 0;
  let startTime = 0;

  // Function to calculate and display individual costs
  const updateParticipantOverview = (elapsedSeconds) => {
    const participants = document.querySelectorAll(".person-row");
    const overviewContent = Array.from(participants)
      .map((row) => {
        const nameInput = row.querySelector("input[type='text']");
        const rateInput = row.querySelector("input[type='number']");
        const currencySymbol = document.querySelector(".currency-symbol");

        const name = nameInput?.value || "Unknown";
        const rate = parseFloat(rateInput?.value || 0);

        // Calculate the cost for this participant
        const cost = (rate / 3600) * elapsedSeconds;
        return `<div class="flex justify-between">
                  <span>${name}</span>
                  <span>${currencySymbol.textContent} ${cost.toFixed(2)}</span>
                </div>`;
      })
      .join("");

    costBreakdownContainer.innerHTML = `
      <h3 class="text-lg font-semibold mt-4">Cost Breakdown</h3>
      <div class="mt-2 space-y-1">${overviewContent}</div>
    `;
  };

  // Function to calculate total cost
  const calculateCost = () => {
    const participants = document.querySelectorAll(".person-row");
    const rates = Array.from(participants).map((row) => {
      const rateInput = row.querySelector("input[type='number']");
      return parseFloat(rateInput?.value || 0);
    });

    const totalRate = rates.reduce((sum, rate) => sum + rate, 0);
    const elapsedSeconds = elapsedMilliseconds / 1000;
    const totalCost = (totalRate / 3600) * elapsedSeconds;

    costDisplay.textContent = totalCost.toFixed(2);
  };

  // Function to update the timer display
  const updateTimer = () => {
    const totalSeconds = Math.floor(elapsedMilliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    timerDisplay.textContent = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  // Start the timer
  startButton.addEventListener("click", () => {
    if (timer) return; // Prevent multiple timers
    costBreakdownContainer.innerHTML = ""; // Clear the breakdown
    startTime = Date.now() - elapsedMilliseconds;
    timer = setInterval(() => {
      elapsedMilliseconds = Date.now() - startTime;
      updateTimer();
      calculateCost();
    }, 100);
  });

  // Stop the timer
  stopButton.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    const elapsedSeconds = elapsedMilliseconds / 1000;
    updateParticipantOverview(elapsedSeconds); // Show breakdown
  });

  // Reset the timer and cost
  resetButton.addEventListener("click", () => {
    clearInterval(timer);
    timer = null;
    elapsedMilliseconds = 0;
    updateTimer();
    costDisplay.textContent = "0.00";
    costBreakdownContainer.innerHTML = ""; // Clear the breakdown
  });
});
