<script>
        jQuery('.autoplay').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1250,
                    settings: {
                        slidesToShow: 5,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                    }
                },
                {
                    breakpoint: 730,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                    }
                },
                {
                    breakpoint: 645,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                    }
                },
                {
                    breakpoint: 430,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                    }
                },
                {
                    breakpoint: 350,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay: true,
                        autoplaySpeed: 2000,
                    }
                }
            ]
        });
    </script>