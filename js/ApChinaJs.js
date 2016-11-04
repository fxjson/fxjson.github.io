/**
 * Created by Administrator on 2016/10/5.
 */

window.onload = function () {
    // 轮播图
    var box = document.getElementById("hezi1");
    var timer1 = null;
    var timer2 = null;
    var timer3 = null;
    var timer4 = null;
    var timer5 = null;

    var sum = 0;

    timer1 = setInterval(Cbox,1);

    function Cbox() {
        sum = box.offsetLeft;
        sum = sum - 2;
        sum < -5460 ? sum = 0:sum;
        box.style.left = sum + "px";
        // console.log(sum);
        if (sum % 1366 == 0) {
            console.log(sum);
            clearInterval(timer1);
            timer2 = setTimeout(function () {
                timer1 = setInterval(Cbox,1);
            }, 3000);
        }
    }

    var cl1 = document.getElementById("cl1");
    var cl2 = document.getElementById("cl2");
    //点击左移动
    cl1.onclick = function () {
        clearInterval(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);

        var bb = box.offsetLeft + 1366;
        if (bb >= 0) {
            bb = -5464;
        } else if (bb < -1366 && bb > -2732) {
            bb = -1366;
        } else if (bb < -2732 && bb > -4098) {
            bb = -2732
        } else if (bb < -4098 && bb > -5464) {
            bb = -4098
        }

        console.log(box.offsetLeft);
        box.style.left = bb + "px";

        timer3 = setTimeout(function () {
            timer1 = setInterval(Cbox, 1);
        }, 3000)
    }
// 点击右移
    cl2.onclick = function () {
        clearInterval(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
        clearTimeout(timer4);

        var aa = box.offsetLeft - 1366;
        if (aa <= -5464) {
            aa = 0;
        } else if (aa > -5464 && aa < -4098) {
            aa = -4098;
        } else if (aa > -4098 && aa < -2732) {
            aa = -2732;
        } else if (aa > -2732 && aa < -1366) {
            aa = -1366
        }

        box.style.left = aa + "px";
        timer4 = setTimeout(function () {
            timer1 = setInterval(Cbox, 1);
        }, 3000)

    }
/********************************************************************/
//点击出现搜索框 及菜单  和 推出菜单
    var box1 = document.getElementsByClassName("box1")[0];
    var hid = document.getElementsByClassName("hid")[0];
    var uls1 = document.getElementsByClassName("uls1")[0];
    var lis1 = document.getElementsByClassName("lis1")[0];

    var nav = document.getElementsByTagName("nav")[0];
    var article = document.getElementsByTagName("article");
    var footer = document.getElementsByTagName("footer")[0];
    var dv = document.getElementsByClassName("dv")[0];
    var l = document.getElementsByClassName("l")[0];
    console.log(dv);

    console.log(box1);
    console.log(box1.clientWidth);
    console.log(hid);
    console.log(uls1.style.display);
    timer5 = setInterval(Bbox,10);
    function Bbox() {
        if (box1.clientWidth <= 700){
            hid.style.display = "none";
            uls1.style.display = "block";

        } else if (box1.clientWidth > 700){
                hid.style.display = "block";
                uls1.style.display = "none";


        }
    }
    lis1.onclick = function () {
        nav.style.display = "none";
        article[0].style.display = "none";
        article[1].style.display = "none";
        article[2].style.display = "none";
        footer.style.display = "none";
        dv.style.display = "block";
        // timer5 = setInterval(Bbox,10);
    }
    l.onclick = function () {
        dv.style.display = "none";
        nav.style.display = "block";
        article[0].style.display = "block";
        article[1].style.display = "block";
        article[2].style.display = "block";
        footer.style.display = "block";
    }
/*******************************************************************************/
//网页窗口缩小后 点击出现 菜单 及 点击 关闭菜单
  var search = document.getElementById("search");
    var lis5 = document.getElementsByClassName("lis5")[0];
    console.log(search);
    var uls2 = document.getElementsByClassName("uls2")[0];
    var div = document.getElementById("div");
    var lis6 = document.getElementsByClassName("lis6")[0];

    search.onclick = function () {
        clearInterval(timer5);
            console.log(search);
            hid.style.display = "none";
            uls2.style.display = "block";
            div.style.display = "block";
            inp1.focus();
        }
    lis6.onclick = function () {
        uls2.style.display = "none";
        hid.style.display = "block";
        timer5 = setInterval(Bbox,10);
    }

}


