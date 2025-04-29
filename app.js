var buttons = document.querySelectorAll(".control");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var currentActiveBtn = document.querySelector(".active-btn");
        if (currentActiveBtn) {
            currentActiveBtn.classList.remove("active-btn");
        }

        this.classList.add("active-btn");

        var currentActiveSection = document.querySelector(".active");
        if (currentActiveSection) {
            currentActiveSection.classList.remove("active");
        }

        var sectionId = this.getAttribute("data-id");
        var newSection = document.getElementById(sectionId);
        if (newSection) {
            newSection.classList.add("active");
        }
    });
});

// Toggle theme
var themeBtn = document.querySelector(".theme-btn");
if (themeBtn) {
    themeBtn.addEventListener("click", function () {
        document.body.classList.toggle("light-mode");
    });
}


function handleContactButtonClick() {
    alert("Your message has been sent!");
}
