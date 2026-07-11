// Event listener for the button
const button = document.getElementById("btn");

button.addEventListener("click", function () {
    alert("Button was clicked!");
});

// Event listener for the paragraph
const paragraph = document.getElementById("text");

paragraph.addEventListener("mouseover", function () {
    paragraph.style.color = "blue";
});