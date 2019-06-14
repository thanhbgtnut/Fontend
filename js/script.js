  $(window).on('scroll', function (event) {
        // alert("scroll");
        var scrollValue = $(window).scrollTop();
        if (scrollValue > 120) {
            $('.menu').addClass('fixed-top');
            //alert("scroll");
        } else{
            $('.menu').removeClass('fixed-top');
        }
    });

$(window).on('')