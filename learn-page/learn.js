// Open the default tab on page load
document.getElementById("tab1").style.display = "block";
// Get all tab buttons
const tabBtns = document.querySelectorAll(".tablinks");
// Attach click event listener to each tab button
tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        const tabName = this.getAttribute("data-tab");
        // Hide all tab content
        document.querySelectorAll(".tabcontent").forEach((tab) => {
            tab.style.display = "none";
        });
        // Remove the 'active' class from all tab links
        tabBtns.forEach((tabBtn) => {
            tabBtn.classList.remove("activeTab");
        });
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "block";
        this.classList.add("activeTab");

        // Hide all panels and remove active class
        const accordions = document.querySelectorAll(".accordion");
        accordions.forEach((accordion) => {
            accordion.classList.remove("active");
            accordion.nextElementSibling.style.display = "none";
        });

        // Open the first accordion of each tab by default
        const firstAccordion = document.querySelector("#" + tabName + " .accordion");
        if (firstAccordion) {
            firstAccordion.classList.add("active");
            firstAccordion.nextElementSibling.style.display = "block";
        }
    });
});

// Get all accordions
const accordions = document.querySelectorAll(".accordion");

// Attach click event listener to each accordion
accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
        var panel = this.nextElementSibling;
        var isActive = this.classList.contains("active");

        // Close all panels and remove active class
        accordions.forEach((acc) => {
            acc.classList.remove("active");
            acc.nextElementSibling.style.display = "none";
        });

        // Toggle active class and show/hide panel
        if (!isActive) {
            this.classList.add("active");
            panel.style.display = "block";
        } else {
            this.classList.remove("active");
            panel.style.display = "none";
        }
    });
});

// Open the first accordion of each tab by default
const tabContents = document.querySelectorAll(".tabcontent");
tabContents.forEach((tabContent) => {
    const firstAccordion = tabContent.querySelector(".accordion");
    if (firstAccordion) {
        firstAccordion.classList.add("active");
        firstAccordion.nextElementSibling.style.display = "block";
    }
});