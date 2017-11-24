$(document).ready(function () {
    $(".lijevaStrelica").on("click", function () {
        thumbnails.currentIndex--;

        if (thumbnails.currentIndex < 0) {
            thumbnails.currentIndex = thumbnails.length - 1;
        }

        updateSliderUI();
    });

    $(".desnaStrelica").on("click", function () {
        thumbnails.currentIndex++;

        if (thumbnails.currentIndex > thumbnails.length - 1) {
            thumbnails.currentIndex = 0;
        }

        updateSliderUI();
    });

    var thumbnails =
   [
       { image: "images/goko.jpeg", ime: "Ѓорѓи Бардакоски <br /><br /> Инструктор" },
       { image: "images/pece.jpg", ime: "Пеце Крстевски <br /><br /> Инструктор" },
       { image: "images/gogo.jpeg", ime: "Ѓорѓи Јошевски <br /><br /> Инструктор" },
       { image: "images/dimitar.jpeg", ime: "Димитар Зулумовски <br /><br /> Инструктор" },
	   { image: "images/violeta.jpg", ime: "Виолета Тарандек <br /><br /> Стручен раководител"}
   ];
    thumbnails.currentIndex = 0;

    function updateSliderUI() {

        var $sliderImage = $("#sliderImage");
        var $sliderIme = $(".sliderNaslov");
        var currentThumbnail = thumbnails[thumbnails.currentIndex];
        $sliderImage.fadeOut(function () {
            $sliderImage.attr("src", currentThumbnail.image);
            $sliderImage.fadeIn();
        });

        $sliderIme.fadeOut(function () {
            $sliderIme.html(currentThumbnail.ime);
            $sliderIme.fadeIn();
        });
    }

    $("a.menu").on("click", function () {
        $("li > a.menu.selected").removeClass("selected");
        var $this = $(this);
        $this.addClass("selected");
    });

    $("#gumbSelectKat").on("click", function () {
        var kategorija = $(".selekcija option:checked").val();

        if (kategorija == "katA") {
            $("#katA").fadeIn();
            $("#katA").show();
			$("#ponudaMotor").fadeIn();
			$("#ponudaMotor").show();
            $("#katB").hide();
			$("#ponudaAuto").hide();
            $("#katD").hide();
			$("#ponudaBus").hide();
        } else if (kategorija == "katB") {
            $("#katA").hide();
			$("#ponudaMotor").hide();
            $("#katB").fadeIn();
            $("#katB").show();
			$("#ponudaAuto").fadeIn();
			$("#ponudaAuto").show();
            $("#katD").hide();
			$("#ponudaBus").hide();
        } else {
            $("#katA").hide();
			$("#ponudaMotor").hide();
            $("#katB").hide();
			$("#ponudaAuto").hide();
            $("#katD").fadeIn();
            $("#katD").show();
			$("#ponudaBus").fadeIn();
			$("#ponudaBus").show();
        }
    });
	
	[].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
	img.setAttribute('src', img.getAttribute('data-src'));
	img.onload = function() {
		img.removeAttribute('data-src');
	};
});

});