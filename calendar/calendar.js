/* =========================================================
   TAKTSANG ACADEMY
   SCHOOL CALENDAR
   JAVASCRIPT
========================================================= */


/* =========================================================
   SECTION 01
   DEMO EVENT DATABASE

   IMPORTANT:

   These events are currently stored inside JavaScript.

   In the FINAL website, this section can be replaced
   by a database/API controlled by the school administrator.
========================================================= */

const schoolEvents = [


    /* =====================================================
       TAKTSANG SCHOOL EVENTS
    ====================================================== */

    {
        id: 1,

        date: "2026-09-03",

        title: "Academic Orientation",

        category: "academic",

        time: "9:00 AM – 12:00 PM",

        location: "Taktsang Academy",

        description:
            "An orientation session introducing students to the academic year and learning expectations."
    },


    {
        id: 2,

        date: "2026-09-08",

        title: "Wellbeing Session",

        category: "wellbeing",

        time: "2:00 PM – 4:00 PM",

        location: "School Campus",

        description:
            "A student wellbeing session focused on building healthy habits and a supportive school community."
    },


    {
        id: 3,

        date: "2026-09-11",

        title: "School Community Day",

        category: "cultural",

        time: "9:00 AM – 3:00 PM",

        location: "Taktsang Academy",

        description:
            "A community gathering celebrating learning, culture and collaboration within the school."
    },


    {
        id: 4,

        date: "2026-09-16",

        title: "Sports Activity",

        category: "sports",

        time: "3:00 PM – 5:00 PM",

        location: "School Grounds",

        description:
            "A school sports activity encouraging teamwork, movement and physical wellbeing."
    },


    {
        id: 5,

        date: "2026-09-22",

        title: "Academic Assessment",

        category: "academic",

        time: "9:00 AM – 12:00 PM",

        location: "Classrooms",

        description:
            "Scheduled academic assessment for students."
    },


    {
        id: 6,

        date: "2026-09-28",

        title: "School Holiday",

        category: "holiday",

        time: "All Day",

        location: "—",

        description:
            "School holiday."
    },



    /* =====================================================
       BHUTAN PUBLIC / NATIONAL HOLIDAYS — 2026

       IMPORTANT:

       These are DEMO calendar entries.

       Verify the official dates against the applicable
       Bhutan government notification before publishing.
    ====================================================== */


    {
        id: 101,

        date: "2026-01-02",

        title: "Winter Solstice (Nyilo)",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Bhutanese public holiday observed across the country."
    },


    {
        id: 102,

        date: "2026-01-19",

        title: "Traditional Day of Offerings",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Traditional Day of Offerings observed as a public holiday in Bhutan."
    },


    {
        id: 103,

        date: "2026-02-18",

        title: "Losar",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Losar, the Bhutanese New Year."
    },


    {
        id: 104,

        date: "2026-02-19",

        title: "Losar Holiday",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Public holiday associated with the Losar period."
    },


    {
        id: 105,

        date: "2026-02-21",

        title: "Birth Anniversary of His Majesty the King",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Public holiday marking the Birth Anniversary of His Majesty the King."
    },


    {
        id: 106,

        date: "2026-02-22",

        title: "King's Birthday Holiday",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Public holiday associated with the King's Birthday celebration."
    },


    {
        id: 107,

        date: "2026-02-23",

        title: "King's Birthday Holiday",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Public holiday associated with the King's Birthday celebration."
    },


    {
        id: 108,

        date: "2026-04-26",

        title: "Zhabdrung Kuchoe",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Commemoration of Zhabdrung Ngawang Namgyal."
    },


    {
        id: 109,

        date: "2026-05-02",

        title: "Birth Anniversary of the Third Druk Gyalpo",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Public holiday commemorating the Birth Anniversary of the Third Druk Gyalpo."
    },


    {
        id: 110,

        date: "2026-05-31",

        title: "Buddha's Parinirvana",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Public holiday commemorating Buddha's Parinirvana."
    },


    {
        id: 111,

        date: "2026-06-24",

        title: "Birth Anniversary of Guru Rinpoche",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Public holiday commemorating the Birth Anniversary of Guru Rinpoche."
    },


    {
        id: 112,

        date: "2026-07-18",

        title: "First Sermon of Lord Buddha",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Public holiday commemorating the First Sermon of Lord Buddha."
    },


    {
        id: 113,

        date: "2026-09-23",

        title: "Blessed Rainy Day",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Blessed Rainy Day, observed as a public holiday in Bhutan."
    },


    {
        id: 114,

        date: "2026-10-21",

        title: "Dashain",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Public holiday observed for Dashain."
    },


    {
        id: 115,

        date: "2026-11-01",

        title: "Coronation Anniversary of His Majesty the King",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Public holiday marking the Coronation Anniversary of His Majesty the King."
    },


    {
        id: 116,

        date: "2026-11-01",

        title: "Descending Day of Lord Buddha",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Public holiday commemorating the Descending Day of Lord Buddha."
    },


    {
        id: 117,

        date: "2026-11-11",

        title: "Birth Anniversary of the Fourth Druk Gyalpo",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Public holiday commemorating the Birth Anniversary of the Fourth Druk Gyalpo."
    },


    {
        id: 118,

        date: "2026-12-17",

        title: "National Day of Bhutan",

        category: "bhutan-holiday",

        time: "All Day",

        location: "Bhutan",

        description:
            "Bhutan's National Day, observed annually on 17 December."
    }

];



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