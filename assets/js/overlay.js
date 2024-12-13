document.addEventListener("DOMContentLoaded", () => {
  const overlays = {
    settings: {
      icon: document.getElementById("settings-icon"),
      overlay: document.getElementById("settings-overlay"),
      close: document.getElementById("close-settings"),
    },
    info: {
      icon: document.getElementById("info-icon"),
      overlay: document.getElementById("info-overlay"),
      close: document.getElementById("close-info"),
    },
    participantsHelp: {
      icon: document.getElementById("participants-help-icon"),
      overlay: document.getElementById("participants-help-overlay"),
      close: document.getElementById("participants-help-close"),
    },
  };

  // Function to toggle an overlay
  const toggleOverlay = (overlay) => {
    if (overlay) overlay.classList.toggle("hidden");
  };

  // Function to close an overlay
  const closeOverlay = (overlay) => {
    if (overlay) overlay.classList.add("hidden");
  };

  // Add event listeners for overlays
  Object.values(overlays).forEach(({ icon, overlay, close }) => {
    if (icon && overlay) {
      icon.addEventListener("click", () => toggleOverlay(overlay));
    }
    if (close && overlay) {
      close.addEventListener("click", () => closeOverlay(overlay));
    }
    if (overlay) {
      overlay.addEventListener("click", (event) => {
        if (event.target === overlay) {
          closeOverlay(overlay);
        }
      });
    }
  });

  // Currency selection logic
  const currencySelector = document.getElementById("currency");
  const currencyElements = document.querySelectorAll(".currency-symbol");

  if (currencySelector) {
    currencySelector.addEventListener("change", () => {
      const selectedCurrency = currencySelector.value;

      // Update all currency symbols
      currencyElements.forEach((element) => {
        element.textContent = selectedCurrency;
      });
    });
  }
});
