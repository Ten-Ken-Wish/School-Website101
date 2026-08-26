/* =========================================================
   TAKTSANG ACADEMY
   SCHOOL CALENDAR
   JAVASCRIPT
========================================================= */


/* =========================================================
   SECTION 01
   SCHOOL EVENT DATABASE

   IMPORTANT:

   The calendar currently contains NO published events.

   Official school calendar information will be added later
   through the centralized Admin Panel.

   The data structure is intentionally preserved so that
   the future Admin Panel/database can provide the same
   type of records without redesigning the calendar.
========================================================= */

const schoolEvents = [];


/* =========================================================
   SECTION 02
   CURRENT CALENDAR DATE
========================================================= */

let currentDate = new Date();


/* =========================================================
   SECTION 03
   HTML ELEMENTS
========================================================= */

const calendarGrid =
    document.getElementById(
        "calendarGrid"
    );


const monthYear =
    document.getElementById(
        "monthYear"
    );


const previousMonth =
    document.getElementById(
        "previousMonth"
    );


const nextMonth =
    document.getElementById(
        "nextMonth"
    );


const todayButton =
    document.getElementById(
        "todayButton"
    );


const eventPanel =
    document.getElementById(
        "eventPanel"
    );


const eventFilter =
    document.getElementById(
        "eventFilter"
    );


/* =========================================================
   SECTION 04
   MONTH NAMES
========================================================= */

const monthNames = [

    "January",

    "February",

    "March",

    "April",

    "May",

    "June",

    "July",

    "August",

    "September",

    "October",

    "November",

    "December"

];


/* =========================================================
   SECTION 05
   RENDER CALENDAR
========================================================= */

function renderCalendar() {


    /* CLEAR OLD CALENDAR */

    calendarGrid.innerHTML = "";


    /* CURRENT YEAR */

    const year =
        currentDate.getFullYear();


    /* CURRENT MONTH */

    const month =
        currentDate.getMonth();


    /* DISPLAY MONTH */

    monthYear.textContent =
        `${monthNames[month]} ${year}`;


    /*
        JavaScript starts the week on Sunday.

        We convert this so the calendar begins
        with Monday.
    */

    let firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    firstDay =
        firstDay === 0
            ? 6
            : firstDay - 1;


    /* NUMBER OF DAYS */

    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    /* =====================================================
       EMPTY DAYS
    ====================================================== */

    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const emptyDay =
            document.createElement(
                "div"
            );


        emptyDay.className =
            "calendar-day empty";


        calendarGrid.appendChild(
            emptyDay
        );

    }


    /* =====================================================
       CREATE EACH DAY
    ====================================================== */

    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {


        const dayElement =
            document.createElement(
                "div"
            );


        dayElement.className =
            "calendar-day";


        /* CREATE DATE STRING */

        const dateString =
            `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;


        /* =================================================
           CHECK TODAY
        ================================================= */

        const today =
            new Date();


        if (

            day === today.getDate() &&

            month === today.getMonth() &&

            year === today.getFullYear()

        ) {

            dayElement.classList.add(
                "today"
            );

        }


        /* =================================================
           DAY NUMBER
        ================================================= */

        const dayNumber =
            document.createElement(
                "div"
            );


        dayNumber.className =
            "day-number";


        dayNumber.textContent =
            day;


        dayElement.appendChild(
            dayNumber
        );


        /* =================================================
           GET EVENTS
        ================================================= */

        const dayEvents =
            getEventsForDate(
                dateString
            );


        if (
            dayEvents.length > 0
        ) {

            dayElement.classList.add(
                "has-event"
            );

        }


        /* =================================================
           APPLY FILTER
        ================================================= */

        const selectedCategory =
            eventFilter.value;


        const visibleEvents =
            dayEvents.filter(
                event =>

                    selectedCategory === "all"
                    ||
                    event.category ===
                    selectedCategory
            );


        /* =================================================
           DISPLAY EVENTS
        ================================================= */

        visibleEvents.forEach(
            event => {


                const eventElement =
                    document.createElement(
                        "div"
                    );


                eventElement.className =
                    `calendar-event ${event.category}`;


                eventElement.textContent =
                    event.title;


                dayElement.appendChild(
                    eventElement
                );

            }
        );


        /* =================================================
           DATE CLICK
        ================================================= */

        dayElement.addEventListener(
            "click",
            () => {

                showEventsForDate(
                    dateString
                );

            }
        );


        calendarGrid.appendChild(
            dayElement
        );

    }

}


/* =========================================================
   SECTION 06
   GET EVENTS FOR DATE
========================================================= */

function getEventsForDate(date) {

    return schoolEvents.filter(
        event =>
            event.date === date
    );

}


/* =========================================================
   SECTION 07
   SHOW EVENTS
========================================================= */

function showEventsForDate(
    date
) {


    const events =
        getEventsForDate(
            date
        );


    const formattedDate =
        formatDate(
            date
        );


    /* =====================================================
       NO EVENT
    ====================================================== */

    if (
        events.length === 0
    ) {

        eventPanel.innerHTML = `

            <div class="event-panel-empty">

                <span class="event-icon">
                    ✦
                </span>

                <h3>
                    ${formattedDate}
                </h3>

                <p>
                    No school events are scheduled
                    for this date.
                </p>

            </div>

        `;

        return;

    }


    /* =====================================================
       CREATE EVENT DETAILS
    ====================================================== */

    const eventHTML =
        events.map(
            event => `

            <article class="event-details">

                <span class="event-details-date">

                    ${formattedDate}

                </span>


                <h3>

                    ${event.title}

                </h3>


                <p class="event-details-description">

                    ${event.description}

                </p>


                <div class="event-details-meta">


                    <span class="event-meta">

                        ${event.time}

                    </span>


                    <span class="event-meta">

                        ${event.location}

                    </span>


                    <span class="event-meta">

                        ${getCategoryName(
                            event.category
                        )}

                    </span>


                </div>

            </article>

        `
        ).join("");


    eventPanel.innerHTML =
        eventHTML;

}


/* =========================================================
   SECTION 08
   FORMAT DATE
========================================================= */

function formatDate(
    dateString
) {


    const date =
        new Date(
            `${dateString}T00:00:00`
        );


    return date.toLocaleDateString(
        "en-GB",
        {

            day: "numeric",

            month: "long",

            year: "numeric"

        }
    );

}


/* =========================================================
   SECTION 09
   CATEGORY DISPLAY NAMES

   These category names remain available for the future
   Admin Panel and official school calendar data.
========================================================= */

function getCategoryName(
    category
) {


    const names = {

        academic:
            "Academic",

        sports:
            "Sports",

        cultural:
            "Cultural",

        wellbeing:
            "Wellbeing",

        holiday:
            "School Holiday",

        "bhutan-holiday":
            "Bhutan Public Holiday"

    };


    return (
        names[category]
        ||
        "School Event"
    );

}


/* =========================================================
   SECTION 10
   PREVIOUS MONTH
========================================================= */

previousMonth.addEventListener(
    "click",
    () => {


        currentDate.setMonth(
            currentDate.getMonth() - 1
        );


        renderCalendar();


        clearEventPanel();

    }
);


/* =========================================================
   SECTION 11
   NEXT MONTH
========================================================= */

nextMonth.addEventListener(
    "click",
    () => {


        currentDate.setMonth(
            currentDate.getMonth() + 1
        );


        renderCalendar();


        clearEventPanel();

    }
);


/* =========================================================
   SECTION 12
   TODAY
========================================================= */

todayButton.addEventListener(
    "click",
    () => {


        currentDate =
            new Date();


        renderCalendar();


        clearEventPanel();

    }
);


/* =========================================================
   SECTION 13
   FILTER
========================================================= */

eventFilter.addEventListener(
    "change",
    () => {


        renderCalendar();


        clearEventPanel();

    }
);


/* =========================================================
   SECTION 14
   CLEAR EVENT PANEL
========================================================= */

function clearEventPanel() {


    eventPanel.innerHTML = `

        <div class="event-panel-empty">

            <span class="event-icon">
                ✦
            </span>


            <h3>
                Select a date
            </h3>


            <p>
                Choose a date from the calendar
                to view scheduled events.
            </p>

        </div>

    `;

}


/* =========================================================
   SECTION 15
   START CALENDAR
========================================================= */

renderCalendar();