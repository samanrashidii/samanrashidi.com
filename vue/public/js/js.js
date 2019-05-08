$(document).ready(function() {
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
    }), $("#mobile_number").numeric(), $("#contact-me form").validate({
        rules: {
            full_name: {
                required: !0,
                minlength: 5
            },
            subject: {
                required: !0,
                minlength: 3
            },
            email_address: {
                required: !0,
                email: !0
            },
            mobile_number: {
                required: !0,
                minlength: 11,
                maxlength: 11,
                number: !0
            },
            message: {
                required: !0,
                minlength: 10
            }
        },
        submitHandler: function(e) {
            return "" == $(".samanira_secure").val() ? ($.ajax({
                type: "POST",
                url: "mail.php",
                data: $(e).serialize(),
                success: function() {
                    $("#contact-me form :input").prop("disabled", !0), $("#contact-me .thank-you").fadeIn()
                }
            }), !1) : ($('.contact-form form input[type="submit"]').prop("disabled", !0), !1)
        },
        errorPlacement: function() {
            return !1
        }
    });
});