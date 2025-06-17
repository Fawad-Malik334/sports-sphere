// athlete.js

document.addEventListener('DOMContentLoaded', () => {
  // Check if the logout button exists (it's removed in the new HTML)
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      alert("Logging out...");
      window.location.href = "index.html";
    });
  }

  // Simulated coach data (can be reused elsewhere like on find_coaches.html)
  const coaches = [
    { name: "Coach A", sport: "Football", rating: 4.8, available: true },
    { name: "Coach B", sport: "Fitness", rating: 4.6, available: true },
    { name: "Coach C", sport: "Tennis", rating: 4.3, available: false },
  ];

  // Coach search input (only apply if it exists)
  const searchInput = document.getElementById("searchInput");
  const resultsDiv = document.getElementById("coachResults");

  if (searchInput && resultsDiv) {
    searchInput.addEventListener("input", function () {
      const query = this.value.toLowerCase();
      const results = coaches.filter(coach =>
        coach.name.toLowerCase().includes(query) ||
        coach.sport.toLowerCase().includes(query) ||
        (coach.available ? "available" : "unavailable").includes(query)
      );

      resultsDiv.innerHTML = "";

      results.forEach(coach => {
        const card = document.createElement("div");
        card.className = "coach-card";
        card.style.padding = "10px";
        card.style.border = "1px solid #ccc";
        card.style.borderRadius = "6px";
        card.innerHTML = `
          <strong>${coach.name}</strong><br>
          Sport: ${coach.sport}<br>
          Rating: ${coach.rating}<br>
          Status: ${coach.available ? "Available" : "Unavailable"}
        `;
        resultsDiv.appendChild(card);
      });
    });
  }
});
