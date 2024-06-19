document.getElementById("tab2").style.display = "none";
document.getElementById("tab3").style.display = "none";
const tabBtns = document.querySelectorAll(".tablinks");

tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
        const tabName = this.getAttribute("data-tab");

        document.querySelectorAll(".tabcontent").forEach((tab) => {
            tab.style.display = "none";
        });

        tabBtns.forEach((tabBtn) => {
            tabBtn.classList.remove("activeTab");
        });

        document.getElementById(tabName).style.display = "block";
        this.classList.add("activeTab");

        // const accordions = document.querySelectorAll(".accordion");
        // accordions.forEach((accordion) => {
        //     accordion.classList.remove("active");
        //     accordion.nextElementSibling.style.display = "none";
        // });


        // const firstAccordion = document.querySelector("#" + tabName + " .accordion");
        // if (firstAccordion) {
        //     firstAccordion.classList.add("active");
        //     firstAccordion.nextElementSibling.style.display = "block";
        // }
    });
});


//visualize part
document.getElementById("tabs2").style.display = "none";
const tablet = document.querySelectorAll(".tablinked");
tablet.forEach((btns) => {
    btns.addEventListener("click", function () {
        const btnas = this.getAttribute("data-tabing");

        document.querySelectorAll(".tabconttents").forEach((hover) => {
            hover.style.display = "none";

        });
        tablet.forEach((tabre) => {
            tabre.classList.remove("activeTabs");


        });
        document.getElementById(btnas).style.display = "block";
        this.classList.add("activeTabs");
    });

});

document.getElementById("tab-no-2").style.display = "none";
document.getElementById("tab-no-3").style.display = "none";
document.getElementById("tab-no-4").style.display = "none";
document.getElementById("tab-no-5").style.display = "none";

const tabbutton = document.querySelectorAll(".tablinkcrad");

tabbutton.forEach((btnbutto) => {

    btnbutto.addEventListener("click", function () {
        const getdata = this.getAttribute("data-set");

        document.querySelectorAll(".tabcontentsix").forEach((hoverss) => {
            hoverss.style.display = "none";

        });
        tabbutton.forEach((removes) => {
            removes.classList.remove("activTabn");
        });
        document.getElementById(getdata).style.display = "block";
        this.classList.add("activTabn");


        const accordionss = document.querySelectorAll(".accordian-part");

        accordionss.forEach((accordions) => {
            accordions.classList.remove("activet");
            accordions.nextElementSibling.style.display = "none";
        });
        const firstAccordions = document.querySelector("#" + getdata + ".accordian-part");
        if (firstAccordions) {
            firstAccordions.classList.add("activet");
            firstAccordions.nextElementSibling.style.display = "block";
        }
    });

});

const accordionss = document.querySelectorAll(".accordian-part");

accordionss.forEach((acoordino) => {

    acoordino.addEventListener("click", function () {
        var panels = this.nextElementSibling;
        var isActive = this.classList.contains("activet")



        accordionss.forEach((acc) => {
            acc.classList.remove("activet");
            acc.nextElementSibling.style.display = "none";
        });
        if (!isActive) {
            this.classList.add("activet");
            panels.style.display = "block";
        } else {
            this.classList.remove("activet");
            panels.style.display = "none";
        }
    });
});
const tabContentss = document.querySelectorAll(".tabcontentsix");
tabContentss.forEach((tabContentt) => {
    const firstAccordions = tabContentt.querySelector(".accordian-part");
    if (firstAccordions) {
        firstAccordions.classList.add("activet");
        firstAccordions.nextElementSibling.style.display = "block";
    }
});


