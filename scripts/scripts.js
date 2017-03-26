    $(document).ready(function() {
        $('.slider-container').slick({
            accessibility: true,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            infinite: true,
            mobileFirst: true,
            pauseOnHover: true,
            dots: true
        });
        $('.activity-box-ctr').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            responsive: [{
                breakpoint: 1028,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            }, {
                breakpoint: 770,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }]
        });

        $('#header_res_bar').on('click', function() {
            $('#nav_container').toggleClass('show-menu');
        })


    });


    var contentString = '<div style="font-weight: bold;">Church of God in India <br/>Koramangala, Bangalore, <br/>Karnataka.</div>';

    function initMap() {
        var uluru = { lat: 12.939629, lng: 77.625979 };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 14,
            center: uluru,
            scrollwheel: false
        });

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: uluru,
            map: map
        });
        infowindow.open(map, marker);
    }
