(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    // Rolagem suave usando o easing jQuery
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        // scrollTop: target.offset().top - 72,
                        scrollTop: target.offset().top - 90,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Activate scrollspy to add active class to navbar items on scroll
    // Ative scrollspy para adicionar classe ativa aos itens da barra de navegação na rolagem
    $("body").scrollspy({
        target: "#mainNav",
        offset: 90,
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        // Fechar Icone de Hamburger de Menu
        $("#checkbox-menu").prop( "checked", false);
        $(".navbar-collapse").collapse("hide");
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
    
})(jQuery); // End of use strict