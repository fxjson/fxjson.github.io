/**
 * Created by Administrator on 2016/10/4.
 */
//三层轮播
$(function () {
    var zIndex = 0;
    // console.log(zIndex);
    $(".box2 > .ul2 >li").click(function () {
        zIndex++;
        // $(this).addClass()
        var index = - $(this).index();
        console.log(index);
        $(".box2 > .ul1").css({
            "z-index":zIndex,
            "left":1366 * (index - 1)
        }).animate({
            "left": 1366 * index
        },1000)

    })
//左右轮播 俩个button
$(".box2").mousemove(function (e) {
    var BoxWidth = $(".box2").width();
    var MX = e.pageX;
    // console.log(BoxWidth - MX);
    // console.log(e.pageX);
    if (MX < 150){
        $(".box2 > .can1").show();
    }else {
        $(".box2 > .can1").hide();
    }
    if (BoxWidth - MX <= 150){
        $(".box2 > .can2").show();
    }else {
        $(".box2 > .can2").hide();
    }
   })


})




