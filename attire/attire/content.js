const attireContent = {
    regular: {
        eyebrow: "REGULAR ACADEMY ATTIRE",
        title: "Rooted in who we are.",
        description:
            "The regular Academy attire reflects Taktsang's Bhutanese identity while creating a shared sense of belonging across everyday school life.",

        students: {
            boys: {
                title: "Gho",
                description:
                    "The Gho forms the regular school attire for boys at Taktsang Academy.",
                image: "images/attire-gho.jpg"
            },

            girls: {
                title: "Kira",
                description:
                    "The Kira forms the regular school attire for girls at Taktsang Academy.",
                image: "images/attire-kira.jpg"
            }
        },

        teachers: {
            title: "Teachers",
            description:
                "Teachers wear their personal Gho and Kira, reflecting individual expression within Bhutanese dress."
        }
    },

    tracksuit: {
        eyebrow: "ACADEMY TRACKSUIT",
        title: "For movement beyond the classroom.",
        description:
            "The Academy tracksuit provides a shared practical attire for students and teachers across active school life.",

        components: [
            "Jacket",
            "Track Pants",
            "T-shirt"
        ],

        students: {
            title: "Students",
            description:
                "The student tracksuit consists of a jacket, track pants and T-shirt."
        },

        teachers: {
            title: "Teachers",
            description:
                "Teachers wear the Academy tracksuit in a slightly differentiated version."
        },

        image: "images/attire-tracksuit.jpg"
    },

    yoga: {
        eyebrow: "YOGA ATTIRE",
        title: "Movement. Focus. Wellbeing.",
        description:
            "Yoga sessions bring students and teachers together in a shared attire designed for movement and practice.",

        wornBy: [
            "Students",
            "Teachers"
        ],

        note:
            "Students and teachers wear the same attire for yoga sessions.",

        image: "images/attire-yoga.jpg"
    },

    sports: [
        {
            id: "basketball",
            name: "Basketball",
            teams: ["Boys", "Girls", "Teachers"],
            image: "images/sports-basketball.jpg"
        },

        {
            id: "football",
            name: "Football",
            teams: ["Boys", "Girls", "Teachers"],
            image: "images/sports-football.jpg"
        },

        {
            id: "volleyball",
            name: "Volleyball",
            teams: ["Boys", "Girls", "Teachers"],
            image: "images/sports-volleyball.jpg"
        },

        {
            id: "badminton",
            name: "Badminton",
            teams: ["Boys", "Girls"],
            image: "images/sports-badminton.jpg"
        },

        {
            id: "chess",
            name: "Chess",
            teams: ["Boys", "Girls"],
            image: "images/sports-chess.jpg"
        },

        {
            id: "table-tennis",
            name: "Table Tennis",
            teams: ["Boys", "Girls", "Teachers"],
            image: "images/sports-table-tennis.jpg"
        },

        {
            id: "swimming",
            name: "Swimming",
            teams: ["Boys", "Girls"],
            image: "images/sports-swimming.jpg"
        },

        {
            id: "cricket",
            name: "Cricket",
            teams: ["Boys", "Girls"],
            image: "images/sports-cricket.jpg"
        }
    ]
};