const box = document.getElementById("animateBox");
    const pulseCheckbox = document.getElementById("savePulse");

    function toggleMove() {
      box.classList.toggle("move");
    }

    function togglePulse() {
      box.classList.toggle("pulsing");
      const isPulsing = box.classList.contains("pulsing");
      if (pulseCheckbox.checked) {
        localStorage.setItem("pulsePreference", isPulsing);
      }
    }

    // On load: apply pulse if saved in localStorage
    window.onload = function () {
      const savedPulse = localStorage.getItem("pulsePreference");
      if (savedPulse === "true") {
        box.classList.add("pulsing");
        pulseCheckbox.checked = true;
      }
    };