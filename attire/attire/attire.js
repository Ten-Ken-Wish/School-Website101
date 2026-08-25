/* =========================================================
   TAKTSANG ACADEMY
   ACADEMY ATTIRE
   JAVASCRIPT
   ========================================================= */


/* =========================================================
   SPORTS DATA
   ========================================================= */

const sportsData = [

    {
        name: "Basketball",

        description:
            "Basketball team attire designed for movement, competition and representation of Taktsang Academy.",

        images: [
            "images/attire/sports/basketball-1.jpg",
            "images/attire/sports/basketball-2.jpg",
            "images/attire/sports/basketball-3.jpg"
        ],

        groups: [
            {
                name: "Boys",
                description: "Basketball team attire"
            },
            {
                name: "Girls",
                description: "Basketball team attire"
            },
            {
                name: "Teachers",
                description: "Teachers' basketball team"
            }
        ]
    },


    {
        name: "Football",

        description:
            "Football attire for Academy teams representing Taktsang in training, matches and school competitions.",

        images: [
            "images/attire/sports/football-1.jpg",
            "images/attire/sports/football-2.jpg",
            "images/attire/sports/football-3.jpg"
        ],

        groups: [
            {
                name: "Boys",
                description: "Football team attire"
            },
            {
                name: "Girls",
                description: "Football team attire"
            },
            {
                name: "Teachers",
                description: "Teachers' football team"
            }
        ]
    },


    {
        name: "Volleyball",

        description:
            "Volleyball attire designed for team play, movement and competitive school events.",

        images: [
            "images/attire/sports/volleyball-1.jpg",
            "images/attire/sports/volleyball-2.jpg",
            "images/attire/sports/volleyball-3.jpg"
        ],

        groups: [
            {
                name: "Boys",
                description: "Volleyball team attire"
            },
            {
                name: "Girls",
                description: "Volleyball team attire"
            },
            {
                name: "Teachers",
                description: "Teachers' volleyball team"
            }
        ]
    },


    {
        name: "Badminton",

        description:
            "Badminton attire for Academy players participating in individual and team competitions.",

        images: [
            "images/attire/sports/badminton-1.jpg",
            "images/attire/sports/badminton-2.jpg",
            "images/attire/sports/badminton-3.jpg"
        ],

        groups: [
            {
                name: "Boys",
                description: "Badminton team attire"
            },
            {
                name: "Girls",
                description: "Badminton team attire"
            }
        ]
    },


    {
        name: "Chess",

        description:
            "Chess team attire representing Taktsang Academy during school competitions and events.",

        images: [
            "images/attire/sports/chess-1.jpg",
            "images/attire/sports/chess-2.jpg",
            "images/attire/sports/chess-3.jpg"
        ],

        groups: [
            {
                name: "Boys",
                description: "Chess team attire"
            },
            {
                name: "Girls",
                description: "Chess team attire"
            }
        ]
    },


    {
        name: "Table Tennis",

        description:
            "Table tennis attire designed for players competing in Academy and inter-school events.",

        images: [
            "images/attire/sports/table-tennis-1.jpg",
            "images/attire/sports/table-tennis-2.jpg",
            "images/attire/sports/table-tennis-3.jpg"
        ],

        groups: [
            {
                name: "Boys",
                description: "Table tennis team attire"
            },
            {
                name: "Girls",
                description: "Table tennis team attire"
            },
            {
                name: "Teachers",
                description: "Teachers' table tennis team"
            }
        ]
    },


    {
        name: "Swimming",

        description:
            "Swimming attire for Academy swimmers participating in training and competitive swimming events.",

        images: [
            "images/attire/sports/swimming-1.jpg",
            "images/attire/sports/swimming-2.jpg",
            "images/attire/sports/swimming-3.jpg"
        ],

        groups: [
            {
                name: "Boys",
                description: "Swimming team attire"
            },
            {
                name: "Girls",
                description: "Swimming team attire"
            }
        ]
    },


    {
        name: "Cricket",

        description:
            "Cricket attire for Academy teams taking part in training, matches and school competitions.",

        images: [
            "images/attire/sports/cricket-1.jpg",
            "images/attire/sports/cricket-2.jpg",
            "images/attire/sports/cricket-3.jpg"
        ],

        groups: [
            {
                name: "Boys",
                description: "Cricket team attire"
            },
            {
                name: "Girls",
                description: "Cricket team attire"
            }
        ]
    }

];


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const sportsNavigation =
    document.getElementById("sportsNavigation");

const sportImageMain =
    document.getElementById("sportImageMain");

const sportImageTwo =
    document.getElementById("sportImageTwo");

const sportImageThree =
    document.getElementById("sportImageThree");

const sportNumber =
    document.getElementById("sportNumber");

const sportEyebrow =
    document.getElementById("sportEyebrow");

const sportTitle =
    document.getElementById("sportTitle");

const sportDescription =
    document.getElementById("sportDescription");

const sportGroups =
    document.getElementById("sportGroups");

const sportCounter =
    document.getElementById("sportCounter");

const previousSport =
    document.getElementById("previousSport");

const nextSport =
    document.getElementById("nextSport");


/* =========================================================
   CURRENT SPORT
   ========================================================= */

let currentSport = 0;


/* =========================================================
   CREATE SPORT NAVIGATION
   ========================================================= */

function createSportNavigation() {

    if (!sportsNavigation) {
        return;
    }

    sportsNavigation.innerHTML = "";

    sportsData.forEach((sport, index) => {

        const button =
            document.createElement("button");

        button.type = "button";

        button.className = "sport-tab";

        button.textContent = sport.name;

        button.setAttribute(
            "role",
            "tab"
        );

        button.setAttribute(
            "aria-selected",
            index === currentSport
                ? "true"
                : "false"
        );

        button.addEventListener(
            "click",
            () => {

                currentSport = index;

                renderSport();

            }
        );

        sportsNavigation.appendChild(button);

    });

}


/* =========================================================
   RENDER SPORT
   ========================================================= */

function renderSport() {

    const sport =
        sportsData[currentSport];

    if (!sport) {
        return;
    }


    /* -----------------------------------------------------
       Update images
       ----------------------------------------------------- */

    updateImage(
        sportImageMain,
        sport.images[0],
        `${sport.name} team attire`
    );

    updateImage(
        sportImageTwo,
        sport.images[1],
        `${sport.name} team attire`
    );

    updateImage(
        sportImageThree,
        sport.images[2],
        `${sport.name} team attire`
    );


    /* -----------------------------------------------------
       Update text
       ----------------------------------------------------- */

    sportNumber.textContent =
        String(currentSport + 1).padStart(2, "0");

    sportEyebrow.textContent =
        "SPORTS ATTIRE";

    sportTitle.textContent =
        sport.name;

    sportDescription.textContent =
        sport.description;


    /* -----------------------------------------------------
       Update groups
       ----------------------------------------------------- */

    sportGroups.innerHTML = "";

    sport.groups.forEach(group => {

        const groupElement =
            document.createElement("div");

        groupElement.className =
            "sport-group";

        groupElement.innerHTML = `
            <strong>${group.name}</strong>
            <span>${group.description}</span>
        `;

        sportGroups.appendChild(
            groupElement
        );

    });


    /* -----------------------------------------------------
       Counter
       ----------------------------------------------------- */

    sportCounter.textContent =
        `${currentSport + 1} / ${sportsData.length}`;


    /* -----------------------------------------------------
       Navigation buttons
       ----------------------------------------------------- */

    previousSport.disabled =
        sportsData.length <= 1;

    nextSport.disabled =
        sportsData.length <= 1;


    /* -----------------------------------------------------
       Update active tab
       ----------------------------------------------------- */

    const tabs =
        sportsNavigation.querySelectorAll(
            ".sport-tab"
        );

    tabs.forEach((tab, index) => {

        const active =
            index === currentSport;

        tab.classList.toggle(
            "active",
            active
        );

        tab.setAttribute(
            "aria-selected",
            active
                ? "true"
                : "false"
        );

    });

}


/* =========================================================
   IMAGE HELPER
   ========================================================= */

function updateImage(
    imageElement,
    source,
    altText
) {

    if (!imageElement) {
        return;
    }

    imageElement.classList.remove(
        "image-error"
    );

    imageElement.alt =
        altText;

    imageElement.src =
        source;

    imageElement.onerror =
        function () {

            this.classList.add(
                "image-error"
            );

            this.removeAttribute(
                "src"
            );

        };

}


/* =========================================================
   PREVIOUS SPORT
   ========================================================= */

function showPreviousSport() {

    currentSport--;

    if (currentSport < 0) {

        currentSport =
            sportsData.length - 1;

    }

    renderSport();

}


/* =========================================================
   NEXT SPORT
   ========================================================= */

function showNextSport() {

    currentSport++;

    if (
        currentSport >=
        sportsData.length
    ) {

        currentSport = 0;

    }

    renderSport();

}


/* =========================================================
   BUTTON EVENTS
   ========================================================= */

if (previousSport) {

    previousSport.addEventListener(
        "click",
        showPreviousSport
    );

}

if (nextSport) {

    nextSport.addEventListener(
        "click",
        showNextSport
    );

}


/* =========================================================
   KEYBOARD NAVIGATION
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "ArrowLeft"
        ) {

            showPreviousSport();

        }

        if (
            event.key === "ArrowRight"
        ) {

            showNextSport();

        }

    }
);


/* =========================================================
   IMAGE FALLBACK FOR ALL PAGE IMAGES
   ========================================================= */

document
    .querySelectorAll("img")
    .forEach(image => {

        image.addEventListener(
            "error",
            function () {

                this.classList.add(
                    "image-error"
                );

            }
        );

    });


/* =========================================================
   INITIALIZE
   ========================================================= */

createSportNavigation();

renderSport();