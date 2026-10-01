/* =====================================================
   VEDA TECHNOLOGY WEBSITE
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE NAVIGATION
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


if (menuToggle && navMenu) {

    menuToggle.addEventListener(
        "click",
        function () {

            navMenu.classList.toggle("active");

            const isOpen =
                navMenu.classList.contains("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen
            );

            menuToggle.setAttribute(
                "aria-label",
                isOpen
                    ? "Close navigation"
                    : "Open navigation"
            );

            menuToggle.textContent =
                isOpen ? "×" : "☰";
        }
    );


    /* Close menu after clicking link */

    const navLinks =
        navMenu.querySelectorAll("a");

    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                navMenu.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                menuToggle.textContent = "☰";

            }
        );

    });

}


/* =====================================================
   ACTIVE NAVIGATION ON SCROLL
===================================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        ".nav-link"
    );


function updateActiveNavigation() {

    const scrollPosition =
        window.scrollY + 140;


    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");


        if (
            scrollPosition >= sectionTop &&
            scrollPosition <
                sectionTop + sectionHeight
        ) {

            navigationLinks.forEach(
                function (link) {

                    link.classList.remove(
                        "active"
                    );

                }
            );


            const activeLink =
                document.querySelector(
                    '.nav-link[href="#' +
                    sectionId +
                    '"]'
                );


            if (activeLink) {

                activeLink.classList.add(
                    "active"
                );

            }

        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();


/* =====================================================
   FAQ ACCORDION
===================================================== */

const faqQuestions =
    document.querySelectorAll(
        ".faq-question"
    );


faqQuestions.forEach(function (question) {

    question.addEventListener(
        "click",
        function () {

            const currentItem =
                question.closest(
                    ".faq-item"
                );


            const currentAnswer =
                currentItem.querySelector(
                    ".faq-answer"
                );


            const isOpen =
                currentItem.classList.contains(
                    "open"
                );


            /* Close all other FAQ items */

            document
                .querySelectorAll(".faq-item")
                .forEach(function (item) {

                    item.classList.remove(
                        "open"
                    );


                    const button =
                        item.querySelector(
                            ".faq-question"
                        );


                    const answer =
                        item.querySelector(
                            ".faq-answer"
                        );


                    if (button) {

                        button.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }


                    if (answer) {

                        answer.style.maxHeight =
                            null;

                    }

                });


            /* Open clicked item */

            if (!isOpen) {

                currentItem.classList.add(
                    "open"
                );


                question.setAttribute(
                    "aria-expanded",
                    "true"
                );


                currentAnswer.style.maxHeight =
                    currentAnswer.scrollHeight +
                    "px";

            }

        }
    );

});


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm =
    document.getElementById(
        "contactForm"
    );


const formMessage =
    document.getElementById(
        "formMessage"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                document
                    .getElementById(
                        "contactName"
                    )
                    ?.value
                    .trim();


            const email =
                document
                    .getElementById(
                        "contactEmail"
                    )
                    ?.value
                    .trim();


            const message =
                document
                    .getElementById(
                        "contactMessage"
                    )
                    ?.value
                    .trim();


            /* Validation */

            if (
                !name ||
                !email ||
                !message
            ) {

                if (formMessage) {

                    formMessage.textContent =
                        "Please complete all fields.";

                    formMessage.style.color =
                        "#b42318";

                }

                return;

            }


            /* Basic email validation */

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(email)
            ) {

                if (formMessage) {

                    formMessage.textContent =
                        "Please enter a valid email address.";

                    formMessage.style.color =
                        "#b42318";

                }

                return;

            }


            /* Success message */

            if (formMessage) {

                formMessage.textContent =
                    "Thank you! Your message has been received.";

                formMessage.style.color =
                    "#16733a";

            }


            contactForm.reset();

        }
    );

}


/* =====================================================
   CURRENT YEAR
===================================================== */

const currentYear =
    document.getElementById(
        "currentYear"
    );


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* =====================================================
   APPLY BUTTON DOMAIN CHECK
===================================================== */

const applyLinks =
    document.querySelectorAll(
        'a[href*="internship-application.html"]'
    );


applyLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            /*
             The domain is already included
             in program Apply Now URLs.

             Example:
             ?domain=Web%20Development
            */

        }
    );

});


/* =====================================================
   ESC KEY - CLOSE MOBILE MENU
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            navMenu &&
            navMenu.classList.contains("active")
        ) {

            navMenu.classList.remove("active");


            if (menuToggle) {

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.setAttribute(
                    "aria-label",
                    "Open navigation"
                );

                menuToggle.textContent = "☰";

            }

        }

    }
);