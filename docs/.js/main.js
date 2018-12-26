(function () {
    // handle fading navbar
    (function () {
        var win = $(window);
        var navbar = $('.navbar-fixed-top');
        var navbarbgColor = getComputedStyle(navbar[0]).getPropertyValue("background-color");
        if (!navbarbgColor && navbarbgColor.indexOf("rgba") != 0) return;
        var match = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(navbarbgColor);
        var baseAlpha = parseFloat(match[4] && match[4].replace(",", "")) || 0;
        var extra = navbar.height();

        function adjust() {
            var offset = win.width() * 0.40625 + extra;
            var st = win.scrollTop();
            var x = st / offset;
            var a = (((x - 0) * (1 - baseAlpha)) / (1 - 0)) + baseAlpha
            navbarbgColor = "rgba(" + [match[1], match[2], match[3], a].join(',') + ")";
            navbar.css("background-color", navbarbgColor);
        }

        win.on('scroll', function () {
            adjust();
        });
        adjust();
    })();
})();