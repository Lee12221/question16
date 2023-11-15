$(".gnb").hover(
    function(){
        $(".sub").stop().fadeIn().css("display","flex");
    },
    function(){
        $(".sub").stop().fadeOut();
    }
);