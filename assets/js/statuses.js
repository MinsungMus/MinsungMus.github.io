const statuses = [
    "🐶 Eating",
    "💤 Sleeping",
    "🧸 Playing with a toy",
    "👀 Staring at you",
    "🚶 Waiting for a walk",
    "🍖 Thinking about treats"
];

function peanutStatus() {
    const randomIndex = Math.floor(Math.random() * statuses.length);
    document.getElementById("status").textContent = statuses[randomIndex];
}
