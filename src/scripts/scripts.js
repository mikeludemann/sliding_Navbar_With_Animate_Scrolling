$(document).ready(function () {

    $(document).on("scroll", onScroll);

    $('.navbar > a[href^="#"]').on('click', function (e) {

        e.preventDefault();

        $(document).off("scroll");

        $('a').each(function () {

            $(this).removeClass('active');

        })

        $(this).addClass('active');

        var target = this.hash;
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 50
        }, 1000, 'swing', function () {

            window.location.hash = target;

            $(document).on("scroll", onScroll);

        });

        $(window).on('hashchange', function (e) {

            e = e ? e : event;

            history.replaceState("", document.title, e.originalEvent.oldURL);

        });

    });

});

function onScroll(event) {

    event.preventDefault();

    var scrollPosition = $(document).scrollTop();

    $('.navbar > a').each(function () {

        var currentLink = $(this);

        var refElement = $(currentLink.attr("href"));

        if (refElement.position().top <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {

            $('.navbar > a').removeClass("active");

            currentLink.addClass("active");

        }

        else {

            currentLink.removeClass("active");
        }

    });

}