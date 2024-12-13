document.addEventListener("DOMContentLoaded", () => {
  const personForm = document.getElementById("person-form");
  const currencyDropdown = document.getElementById("currency");

  // Function to update all currency symbols
  const updateCurrencySymbols = () => {
    const newCurrencySymbol = currencyDropdown.value;
    document.querySelectorAll(".currency-symbol").forEach((span) => (span.textContent = newCurrencySymbol));
  };

  // Function to add a new participant row
  const addParticipantRow = () => {
    const newRow = document.createElement("div");
    newRow.className = "flex items-center space-x-4 person-row mt-2 sm:mt-4";

    newRow.innerHTML = `
      <input
        type="text"
        placeholder="Name"
        class="w-full max-w-xs sm:max-w-md border p-1 sm:p-2 rounded"
      />
      <div class="flex items-center justify-between sm:justify-start sm:space-x-4 space-x-2">
        <input
          type="number"
          placeholder="Rate"
          class="w-full sm:w-24 border p-1 sm:p-2 rounded"
          oninput="this.value = this.value.replace(/[^0-9]/g, '')"
          required
        />
        <span class="currency-symbol text-sm sm:text-base whitespace-nowrap">${currencyDropdown.value}</span>
      </div>
      <button
        class="w-20 bg-red-500 text-white px-4 py-2 rounded delete-row"
      >
        Delete
      </button>
    `;

    // Add delete functionality
    newRow.querySelector(".delete-row").addEventListener("click", () => {
      newRow.remove();
    });

    personForm.appendChild(newRow);
  };

  // Add event listener for the "Add Row" button
  personForm.addEventListener("click", (event) => {
    if (event.target.classList.contains("add-row")) {
      addParticipantRow();
      updateCurrencySymbols(); // Ensure the currency is updated for the new row
    }
  });

  // Update all currency symbols when the dropdown changes
  currencyDropdown.addEventListener("change", updateCurrencySymbols);

  // Ensure currency symbols are initialized correctly on page load
  updateCurrencySymbols();
});
