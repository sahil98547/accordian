// Get all accordion buttons
var accordions = document.getElementsByClassName("accordion");

console.log(accordions);

// Add click event listener to each accordion button
for (var i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function () {
    // Toggle active class to style the button
    this.classList.toggle("active");

    // Get the panel associated with this button
    var panel = this.nextElementSibling;

    // If the panel is already open, close it; otherwise, close all other open panels and open this one
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      // Close all other open panels
      for (var j = 0; j < accordions.length; j++) {
        var otherPanel = accordions[j].nextElementSibling;
        if (otherPanel !== panel && otherPanel.style.display === "block") {
          otherPanel.style.display = "none";
          accordions[j].classList.remove("active");
        }
      }
      // Open this panel
      panel.style.display = "block";
    }
  });
}

