const music = document.getElementById("undertale_dogsong.mp3");

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
