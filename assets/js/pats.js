// Keep track of how many times Peanut has been patted.
let pats = 0;

// Increase Peanut's pat count and update the counter displayed on the page.
function addPeanut() {
    pats++;

    document.getElementById("counter").textContent = pats; // Finds html element and changes the element's displayed number.
}
