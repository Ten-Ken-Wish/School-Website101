/* =========================================================
   TAKTSANG ACADEMY
   ABOUT / DISCOVER PAGE
   JAVASCRIPT FILE
   ========================================================= */


/* =========================================================
   SECTION 01
   MOBILE NAVIGATION
   ========================================================= */

const mobileMenuButton =
    document.getElementById(
        "mobileMenuButton"
    );

const mobileNavigation =
    document.getElementById(
        "mobileNavigation"
    );


if (
    mobileMenuButton &&
    mobileNavigation
) {

    mobileMenuButton.addEventListener(
        "click",
        function() {

            mobileNavigation.classList.toggle(
                "open"
            );

        }
    );

}



/* =========================================================
   SECTION 02
   CLOSE MOBILE MENU
   WHEN A LINK IS SELECTED
   ========================================================= */

const mobileLinks =
    document.querySelectorAll(
        ".mobile-navigation a"
    );


mobileLinks.forEach(function(link) {

    link.addEventListener(
        "click",
        function() {

            mobileNavigation.classList.remove(
                "open"
            );

        }
    );

});



/* =========================================================
   SECTION 03
   TAKTSANG IDENTITY DATA
   ========================================================= */

const identityData = {


    /* =====================================================
       STRENGTH
       ===================================================== */

    strength: {

        number: "01",

        label: "THE TIGER",

        title: "Strength",

        image: "images/tiger.jpg",

        description:
            "Just as the tiger represents strength, energy and determination, students of Taktsang Academy are envisioned as strong learners — powerful in knowledge, skilled in their abilities and capable of pursuing their dreams.",

        values: [
            "Energy",
            "Determination",
            "Courage"
        ]

    },


    /* =====================================================
       WISDOM
       ===================================================== */

    wisdom: {

        number: "02",

        label: "INNER GROWTH",

        title: "Wisdom",

        image: "images/wisdom.jpg",

        description:
            "The connection to Guru Rinpoche symbolizes wisdom and enlightenment, reminding students that education can reach beyond intellect towards inner growth, values and a deeper sense of purpose.",

        values: [
            "Reflection",
            "Values",
            "Purpose"
        ]

    },


    /* =====================================================
       HERITAGE
       ===================================================== */

    heritage: {

        number: "03",

        label: "BHUTANESE IDENTITY",

        title: "Heritage",

        image: "images/heritage.jpg",

        description:
            "Taktsang Academy connects its identity to Bhutanese culture and traditions, creating an environment where students can grow with cultural awareness, spiritual grounding and respect for their roots.",

        values: [
            "Culture",
            "Tradition",
            "Roots"
        ]

    }

};



/* =========================================================
   SECTION 04
   GET IDENTITY ELEMENTS
   ========================================================= */

const identityButtons =
    document.querySelectorAll(
        ".identity-button"
    );


const identityImage =
    document.getElementById(
        "identityImage"
    );


const identityNumber =
    document.getElementById(
        "identityNumber"
    );


const identityLabel =
    document.getElementById(
        "identityLabel"
    );


const identityTitle =
    document.getElementById(
        "identityTitle"
    );


const identityDescription =
    document.getElementById(
        "identityDescription"
    );


const identityValueOne =
    document.getElementById(
        "identityValueOne"
    );


const identityValueTwo =
    document.getElementById(
        "identityValueTwo"
    );


const identityValueThree =
    document.getElementById(
        "identityValueThree"
    );



/* =========================================================
   SECTION 05
   CHANGE IDENTITY
   ========================================================= */

function changeIdentity(identityName) {


    const identity =
        identityData[identityName];


    /*
     * Stop if the requested
     * identity doesn't exist.
     */

    if (!identity) {

        return;

    }



    /* =====================================================
       UPDATE ACTIVE BUTTON
       ===================================================== */

    identityButtons.forEach(
        function(button) {

            button.classList.remove(
                "active"
            );

        }
    );


    const selectedButton =
        document.querySelector(
            '[data-identity="' +
            identityName +
            '"]'
        );


    if (selectedButton) {

        selectedButton.classList.add(
            "active"
        );

    }



    /* =====================================================
       FADE IMAGE
       ===================================================== */

    if (identityImage) {

        identityImage.style.opacity =
            "0";

    }


    if (identityTitle) {

        identityTitle.style.opacity =
            "0";

    }



    /* =====================================================
       UPDATE CONTENT
       ===================================================== */

    setTimeout(
        function() {


            if (identityImage) {

                identityImage.src =
                    identity.image;

                identityImage.alt =
                    identity.title +
                    " — Taktsang Academy";

            }


            if (identityNumber) {

                identityNumber.textContent =
                    identity.number;

            }


            if (identityLabel) {

                identityLabel.textContent =
                    identity.label;

            }


            if (identityTitle) {

                identityTitle.textContent =
                    identity.title;

            }


            if (identityDescription) {

                identityDescription.textContent =
                    identity.description;

            }


            if (identityValueOne) {

                identityValueOne.textContent =
                    identity.values[0];

            }


            if (identityValueTwo) {

                identityValueTwo.textContent =
                    identity.values[1];

            }


            if (identityValueThree) {

                identityValueThree.textContent =
                    identity.values[2];

            }



            /* =================================================
               RESTORE OPACITY
               ================================================= */

            if (identityImage) {

                identityImage.style.opacity =
                    "1";

            }


            if (identityTitle) {

                identityTitle.style.opacity =
                    "1";

            }


        },
        180
    );

}



/* =========================================================
   SECTION 06
   IDENTITY BUTTONS
   ========================================================= */

identityButtons.forEach(
    function(button) {


        button.addEventListener(
            "click",
            function() {


                const identityName =
                    button.dataset.identity;


                changeIdentity(
                    identityName
                );

            }
        );


    }
);