const saman = () => {
    $(".counter-up").counterUp({
        delay: 10,
        time: 2500
    }), $(window).width() < 840 && $("#samanira .half-box:first-child").removeClass("reveal"), window.sr = ScrollReveal(), sr.reveal(".reveal");
    var e = (new Date).getFullYear();
    $("#grid li").hover(function() {
        $(this).children().addClass("hovered")
    }, function() {
        $(this).children().removeClass("hovered")
    }), $(".portfolio-layer a.close").click(function() {
        $(this).parent().removeClass("hovered")
    }), $(".portfolio-layer p").each(function(e) {
        len = $(this).text().length, len > 120 && $(this).text($(this).text().substr(0, 120) + "...")
    }), $(".portfolio-layer.half-text p").each(function(e) {
        len = $(this).text().length, len > 40 && $(this).text($(this).text().substr(0, 40) + "...")
    }), $(".bttn").click(function() {
        $(this).addClass("bounce"), setTimeout(function() {
            $(".bttn").removeClass("bounce")
        }, 500)
    }), new AnimOnScroll(document.getElementById("grid"), {
        minDuration: .5,
        maxDuration: .7,
        viewportFactor: .4
    }), $(".ac-custom input").on("change", function() {
        $(this).parents(".input").toggleClass("checked")
    });
}