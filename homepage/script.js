// =========================
// COUNTER ANIMATION
// =========================

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {

    const target = Number(counter.getAttribute('data-target'));
    const duration = 2000;
    const startTime = performance.now();

    function updateCounter(currentTime) {

        const progress = Math.min(
            (currentTime - startTime) / duration,
            1
        );

        const currentNumber = Math.floor(progress * target);

        counter.textContent = currentNumber;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    }

    requestAnimationFrame(updateCounter);
});


// =========================
// MISSION SECTION ANIMATION
// =========================

const missionSection = document.querySelector('.mission-section');

if (missionSection) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                missionSection.classList.add('show');

                // Stop observing after animation happens
                observer.unobserve(missionSection);
            }

        });

    }, {
        threshold: 0.15
    });

    observer.observe(missionSection);
}
// =========================
// WHAT MAKES TAKTSANG ANIMATION
// =========================

const uniqueSection = document.querySelector('.unique-section');

if (uniqueSection) {

    const uniqueObserver = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                uniqueSection.classList.add('show');

                uniqueObserver.unobserve(uniqueSection);
            }

        });

    }, {
        threshold: 0.2
    });

    uniqueObserver.observe(uniqueSection);
}
/* =================================
   SCROLL REVEAL ANIMATIONS
================================= */

const animatedSections = document.querySelectorAll(
    '.life-in-TA, .video-section, .well-being'
);

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');

                // Stop watching after animation happens
                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.15
    }
);

animatedSections.forEach(section => {
    observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {

    const reveals = document.querySelectorAll(".scroll-reveal");

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.15
    });

    reveals.forEach((reveal) => {
        observer.observe(reveal);
    });

});