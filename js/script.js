$(document).ready(function(){
                $(window).resize(function(){
                    if(screen.width < 1000){
                        $(".relat div").addClass("cstm-mobile");
                        $(".relat div").removeClass("cstm-xl");
                        $(".col-md-1").css('padding-left', '15px');
                        $(".relat>img").width(80);
                        $(".container").removeClass("container-table");
                        $(".row").removeClass("vertical-center-row");
                    } else {
                        $(".relat div").removeClass("cstm-mobile");
                        $(".relat div").addClass("cstm-xl");
                        $(".col-md-1").css('padding-left', '5px');
                        $(".relat>img").width(90);
                        $(".container").addClass("container-table");
                        $(".row").addClass("vertical-center-row");
                    }
                });
                $(".custom-btn").on('click', function() {
                    var btn = $(this);
                    btn.button('loading');
                    setTimeout(function() {
                        btn.button('reset');
                    }, 8000);
                });
                $(window).trigger('resize');
            });
