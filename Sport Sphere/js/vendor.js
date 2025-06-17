// athlete.js

document.getElementById("logoutBtn").addEventListener("click", () => {
  alert("Logging out...");
  window.location.href = "index.html";
});

// Simulated coach data
const coaches = [
  { name: "Coach A", sport: "Football", rating: 4.8, available: true },
  { name: "Coach B", sport: "Fitness", rating: 4.6, available: true },
  { name: "Coach C", sport: "Tennis", rating: 4.3, available: false },
];

// Search functionality
document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const results = coaches.filter(coach =>
    coach.name.toLowerCase().includes(query) ||
    coach.sport.toLowerCase().includes(query) ||
    (coach.available ? "available" : "unavailable").includes(query)
  );

  const resultsDiv = document.getElementById("coachResults");
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
