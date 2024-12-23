window.addEventListener("load", function () {
    var swiper = new Swiper(".slideStation", {

        loop: true,
        slidesPerView: 1,


        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        autoplay: {
            delay: 2000
        },
        speed: 2000,
    });
})