// Button event listener
const button = document.getElementById("btn");

button.addEventListener("click", function () {
    button.style.backgroundColor = "green";
    button.style.color = "white";
});

// Paragraph event listener
const paragraph = document.getElementById("text");

paragraph.addEventListener("mouseover", function () {
    paragraph.style.color = "blue";
});