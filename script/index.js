$(function () {
    //메뉴
    $(".main > li").hover(function(){
        $(".sub").stop().slideDown();
    },function(){
        $(".sub").stop().slideUp();
    })//hover

    //슬라이드이미지

    var n = 0;
    setInterval(function(){
        if(n == 2){
            n=0;
        }else{
            n++;
        }//if

        console.log(n);

        $(".top_move").animate({top : n * (-300) + "px" } , 500 ); 

    },3000)


    //팝업

    $(".pop").click(function(){
        $(".popup").show();
    })
    $(".close").click(function(){
        $(".popup").hide();
    })


    //tab

    $(".cont1 h2").click(function(){
        $(".container .cont1 h2").addClass("on");
        $(this).removeClass("on");

        $(".cont1 ul").hide();
        $(this).next().css({display:"flex"});

    })//click


}) //jQ end