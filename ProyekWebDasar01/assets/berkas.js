/* referensi W3School Smooth Scroll */
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1000, function() {
                window.location.hash = hash;
            });
        }
    });
});

/* referensi niagahoster*/
var hitungTanggal = new Date("Jul 15, 2020 10:00:25").getTime();

var a = setInterval(function() {
    var harini = new Date().getTime();
    var jarak = hitungTanggal - harini;

    var hari = Math.floor(jarak / (1000 * 60 * 60 * 24));
    var jam = Math.floor((jarak % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var menit = Math.floor((jarak % (1000 * 60 * 60)) / (1000 * 60));
    var detik = Math.floor((jarak % (1000 * 60)) / 1000);

    document.getElementById("cs").innerHTML = hari + "h " + jam + "j " + menit + "m " + detik + "d ";

    if (jarak < 0) {
        clearInterval(a);
        document.getElementById("cs").innerHTML = "EXPIRED";
    }
}, 1000);