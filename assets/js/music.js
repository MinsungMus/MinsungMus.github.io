const music = document.getElementById("background-music");

function startMusic() {
    music.play().catch(() => {});
    
    document.removeEventListener("click", startMusic);
    document.removeEventListener("keydown", startMusic);
    document.removeEventListener("scroll", startMusic);
    document.removeEventListener("mousemove", startMusic);
}

document.addEventListener("click", startMusic);
document.addEventListener("keydown", startMusic);
document.addEventListener("scroll", startMusic);
document.addEventListener("mousemove", startMusic);
