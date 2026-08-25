/* =========================================================
   TAKTSANG ACADEMY
   FOUNDERS PAGE JAVASCRIPT
========================================================= */


/* =========================================================
   FOUNDER INFORMATION
========================================================= */

const founderData = {

    namgay: {

        name: "Namgay Phentsho",

        role: "FOUNDER · PRINCIPAL",

        description:
            "Namgay Phentsho is one of the founders of Taktsang Academy and currently serves as the Principal / Head of the school."

    },


    sonam: {

        name: "Sonam Dorji",

        role: "FOUNDER",

        description:
            "Sonam Dorji is one of the founding members behind the establishment of Taktsang Academy."

    },


    thinley: {

        name: "Thinley Lhendup Dorji",

        role: "FOUNDER",

        description:
            "Thinley Lhendup Dorji is one of the founding members behind the establishment of Taktsang Academy."

    }

};


/* =========================================================
   MODAL ELEMENTS
========================================================= */

const modal = document.getElementById("founderModal");

const modalClose = document.getElementById("modalClose");

const modalName = document.getElementById("modalName");

const modalRole = document.getElementById("modalRole");

const modalDescription =
    document.getElementById("modalDescription");


/* =========================================================
   OPEN FOUNDER MODAL
========================================================= */

const founderButtons =
    document.querySelectorAll(".read-more");


founderButtons.forEach(button => {

    button.addEventListener("click", () => {

        const founder =
            button.dataset.founder;

        const data =
            founderData[founder];


        if (!data) return;


        modalName.textContent =
            data.name;

        modalRole.textContent =
            data.role;

        modalDescription.textContent =
            data.description;


        modal.classList.add("active");


        document.body.style.overflow =
            "hidden";

    });

});


/* =========================================================
   CLOSE MODAL
========================================================= */

function closeFounderModal() {

    modal.classList.remove("active");

    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeFounderModal
);


/* =========================================================
   CLOSE WHEN CLICKING OUTSIDE
========================================================= */

modal.addEventListener("click", event => {

    if (
        event.target.classList.contains(
            "modal-overlay"
        )
    ) {

        closeFounderModal();

    }

});


/* =========================================================
   ESCAPE KEY
========================================================= */

document.addEventListener("keydown", event => {

    if (
        event.key === "Escape" &&
        modal.classList.contains("active")
    ) {

        closeFounderModal();

    }

});