$(document).ready(function(){


    $(".chaList>li").hover(function(){
        let idx = $(this).index()
        $(".w100>p").removeClass("on")
        $(".w100>p").eq(idx).addClass("on")
    })
})