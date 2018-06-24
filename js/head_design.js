document.write("<link href=\"../css/header.css\" type=\"text/css\" rel=\"stylesheet\">");
design_mobile_header();
design_desktop_header()
function design_mobile_header() {
    // 生存隐藏的菜单
    var div1=document.createElement("div");
    div1.setAttribute("id","canvas");
    div1.setAttribute("style","position: absolute;height: 94%;margin-top: 0%;width: 100%;background-color: black;opacity: 0.9;z-index: 999;display: none");
    $("#mobile").prepend(div1);// 追加新元素
    var div1=document.createElement("div");
    div1.setAttribute("id","canvas-div1");
    div1.setAttribute("style","border-bottom: 1px silver solid;margin-top: 1%;height: 8%;width: 100%");
    $("#canvas").prepend(div1);// 追加新元素
    var div1=document.createElement("a");
    div1.setAttribute("id","canvas-p1");
    div1.setAttribute("style","text-decoration: none;color: white");
    div1.setAttribute("href","../index.html");
    $("#canvas-div1").prepend(div1);// 追加新元素
    var div1=document.createElement("p");
    div1.setAttribute("id","canvas-a1");
    div1.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: large;margin-left: 5%");
    $("#canvas-p1").prepend(div1);// 追加新元素
    document.getElementById('canvas-a1').innerHTML="首页";
    var div1=document.createElement("div");
    div1.setAttribute("id","canvas-div9");
    div1.setAttribute("style","border-bottom: 1px silver solid;margin-top: 1%;height: 8%;width: 100%");
    $("#canvas").append(div1);// 追加新元素
    var div1=document.createElement("a");
    div1.setAttribute("id","canvas-p9");
    div1.setAttribute("style","text-decoration: none;color: white");
    div1.setAttribute("href","../content/production.html");
    $("#canvas-div9").prepend(div1);// 追加新元素
    var div1=document.createElement("p");
    div1.setAttribute("id","canvas-a9");
    div1.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: large;margin-left: 5%");
    $("#canvas-p9").prepend(div1);// 追加新元素
    document.getElementById('canvas-a9').innerHTML="产品中心";
    var div1=document.createElement("div");
    div1.setAttribute("id","canvas-div2");
    div1.setAttribute("style","border-bottom: 1px silver solid;margin-top: 1%;height: 8%;width: 100%");
    $("#canvas").append(div1);// 追加新元素
    var div1=document.createElement("a");
    div1.setAttribute("id","canvas-p2");
    div1.setAttribute("style","text-decoration: none;color: white");
    div1.setAttribute("href","../content/help.html");
    $("#canvas-div2").prepend(div1);// 追加新元素
    var div1=document.createElement("p");
    div1.setAttribute("id","canvas-a2");
    div1.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: large;margin-left: 5%");
    $("#canvas-p2").prepend(div1);// 追加新元素
    document.getElementById('canvas-a2').innerHTML="帮助中心";
    var div1=document.createElement("div");
    div1.setAttribute("id","canvas-div3");
    div1.setAttribute("style","border-bottom: 1px silver solid;margin-top: 1%;height: 8%;width: 100%");
    $("#canvas").append(div1);// 追加新元素
    var div1=document.createElement("a");
    div1.setAttribute("id","canvas-p3");
    div1.setAttribute("style","text-decoration: none;color: white");
    div1.setAttribute("href","../content/advice.html");
    $("#canvas-div3").prepend(div1);// 追加新元素
    var div1=document.createElement("p");
    div1.setAttribute("id","canvas-a3");
    div1.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: large;margin-left: 5%");
    $("#canvas-p3").prepend(div1);// 追加新元素
    document.getElementById('canvas-a3').innerHTML="留言反馈";
    var div1=document.createElement("div");
    div1.setAttribute("id","canvas-div4");
    div1.setAttribute("style","border-bottom: 1px silver solid;margin-top: 1%;height: 8%;width: 100%");
    $("#canvas").append(div1);// 追加新元素
    var div1=document.createElement("a");
    div1.setAttribute("id","canvas-p4");
    div1.setAttribute("style","text-decoration: none;color: white");
    div1.setAttribute("href","../content/join.html");
    $("#canvas-div4").prepend(div1);// 追加新元素
    var div1=document.createElement("p");
    div1.setAttribute("id","canvas-a4");
    div1.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: large;margin-left: 5%");
    $("#canvas-p4").prepend(div1);// 追加新元素
    document.getElementById('canvas-a4').innerHTML="加入我们";
    var div1=document.createElement("div");
    div1.setAttribute("id","canvas-div5");
    div1.setAttribute("style","border-bottom: 1px silver solid;margin-top: 1%;height: 8%;width: 100%");
    $("#canvas").append(div1);// 追加新元素
    var div1=document.createElement("a");
    div1.setAttribute("id","canvas-p5");
    div1.setAttribute("style","text-decoration: none;color: white");
    div1.setAttribute("href","../content/aboutus.html");
    $("#canvas-div5").prepend(div1);// 追加新元素
    var div1=document.createElement("p");
    div1.setAttribute("id","canvas-a5");
    div1.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: large;margin-left: 5%");
    $("#canvas-p5").prepend(div1);// 追加新元素
    document.getElementById('canvas-a5').innerHTML="关于我们";
    var div1=document.createElement("p");
    div1.setAttribute("id","canvas-p7");
    div1.setAttribute("style","margin-left: 80%;font-family: 'Microsoft YaHei UI';font-size: 20px;color: whitesmoke;margin-top: 40%");
    div1.setAttribute("onclick","$('#canvas').css('display','none')");
    $("#canvas").append(div1);// 追加新元素
    document.getElementById('canvas-p7').innerHTML="收起";
    // 生存顶部菜单栏
    var div=document.createElement("div");
    div.setAttribute("id","header");
    div.setAttribute("style","width: 100%;height:8%;background-color: #00c1de;");
    $("#mobile").prepend(div);// 追加新元素
    var div1=document.createElement("div");
    div1.setAttribute("id","name-m");
    div1.setAttribute("style","margin-top:3%;margin-left: 55%;height: 100%;width: 15%;display: inline-block");
    $("#header").append(div1);// 追加新元素
    var a=document.createElement("a");
    a.setAttribute("id","link1-m");
    a.setAttribute("style","text-decoration: none;color: white");
    a.setAttribute("href","../content/login.html");
    $("#name-m").append(a);// 追加新元素
    var p=document.createElement("p");
    p.setAttribute("id","change-m");
    p.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: medium");
    $("#link1-m").append(p);// 追加新元素
    document.getElementById('change-m').innerHTML="登录";
    var div1=document.createElement("div");
    div1.setAttribute("id","gone-m");
    div1.setAttribute("style","margin-left: 0%;height: 100%;width: 15%;display: inline-block");
    $("#header").append(div1);// 追加新元素
    var a=document.createElement("a");
    a.setAttribute("id","link2-m");
    a.setAttribute("style","text-decoration: none;color: white");
    a.setAttribute("href","../content/register.html");
    $("#gone-m").append(a);// 追加新元素
    var p=document.createElement("p");
    p.setAttribute("id","change8-m");
    p.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: medium");
    $("#link2-m").append(p);// 追加新元素
    document.getElementById('change8-m').innerHTML="注册";
    var div1=document.createElement("div");
    div1.setAttribute("id","show-m");
    div1.setAttribute("style","margin-left: -85%;height: 100%;width: 15%;display: none");
    $("#header").append(div1);// 追加新元素
    var a=document.createElement("a");
    a.setAttribute("id","link3-m");
    a.setAttribute("style","text-decoration: none;color: white");
    a.setAttribute("href","#");
    $("#show-m").append(a);// 追加新元素
    var p=document.createElement("p");
    p.setAttribute("id","change9-m");
    p.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: medium");
    $("#link3-m").append(p);// 追加新元素
    document.getElementById('change9-m').innerHTML="注销";
    var div1=document.createElement("span");
    div1.setAttribute("id","go-m");
    div1.setAttribute("style","color: white;height:30px;width:40px");
    div1.setAttribute("class","glyphicon glyphicon-menu-hamburger");
    div1.setAttribute("onclick"," $('#canvas').css('display','block')");
    $("#header").append(div1);// 追加新元素
}
function design_desktop_header() {
    // 生存隐藏的菜单
    var div1=document.createElement("div");
    div1.setAttribute("class","row");
    div1.setAttribute("id","head_design");
    div1.setAttribute("style","background-color: #00c1de;height: 5%");
    $(".container-fluid").prepend(div1);// 追加新元素
    var div1=document.createElement("div");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","col-md-1-div");
    div1.setAttribute("style","margin-left: 10%");
    $("#head_design").prepend(div1);// 追加新元素
    var div1=document.createElement("a");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","col-md-1-div-a");
    div1.setAttribute("style","text-decoration: none;color: white;font-size: large");
    div1.setAttribute("onmouseenter","this.style='text-decoration: none;color:black'");
    div1.setAttribute("onmouseleave","this.style='text-decoration: none;color:white'");
    div1.setAttribute("href","../index.html");
    $("#col-md-1-div").prepend(div1);// 追加新元素
    var div1=document.createElement("p");
    div1.setAttribute("id","change1");
    div1.setAttribute("style","font-family: 'Microsoft YaHei UI';");
    $("#col-md-1-div-a").prepend(div1);// 追加新元素
    document.getElementById('col-md-1-div-a').innerHTML="首页";

    var div1=document.createElement("div");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","col-md-1-div2");
    $("#head_design").append(div1);// 追加新元素
    var div1=document.createElement("a");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","col-md-1-div2-a2");
    div1.setAttribute("style","text-decoration: none;color: white;font-size: large");
    div1.setAttribute("onmouseenter","this.style='text-decoration: none;color:black'");
    div1.setAttribute("onmouseleave","this.style='text-decoration: none;color:white'");
    div1.setAttribute("href","../content/production.html");
    $("#col-md-1-div2").prepend(div1);// 追加新元素
    var div1=document.createElement("p");
    div1.setAttribute("id","change2");
    div1.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: large");
    $("#col-md-1-div2-a2").prepend(div1);// 追加新元素
    document.getElementById('col-md-1-div2-a2').innerHTML="提供服务";

    var div1=document.createElement("div");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","col-md-1-div3");
    $("#head_design").append(div1);// 追加新元素
    var div1=document.createElement("a");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","col-md-1-div3-a3");
    div1.setAttribute("style","text-decoration: none;color: white;font-size: large");
    div1.setAttribute("onmouseenter","this.style='text-decoration: none;color:black'");
    div1.setAttribute("onmouseleave","this.style='text-decoration: none;color:white'");
    div1.setAttribute("href","../content/help.html");
    $("#col-md-1-div3").prepend(div1);// 追加新元素
    var div1=document.createElement("p");
    div1.setAttribute("id","change3");
    div1.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: large");
    $("#col-md-1-div3-a3").prepend(div1);// 追加新元素
    document.getElementById('col-md-1-div3-a3').innerHTML="帮助中心";

    var div1=document.createElement("div");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","col-md-1-div4");
    $("#head_design").append(div1);// 追加新元素
    var div1=document.createElement("a");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","col-md-1-div4-a4");
    div1.setAttribute("style","text-decoration: none;color: white;font-size: large");
    div1.setAttribute("onmouseenter","this.style='text-decoration: none;color:black'");
    div1.setAttribute("onmouseleave","this.style='text-decoration: none;color:white'");
    div1.setAttribute("href","../content/help.html");
    $("#col-md-1-div4").prepend(div1);// 追加新元素
    var div1=document.createElement("p");
    div1.setAttribute("id","change4");
    div1.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: large");
    $("#col-md-1-div4-a4").prepend(div1);// 追加新元素
    document.getElementById('col-md-1-div4-a4').innerHTML="留言反馈";

    var div1=document.createElement("div");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","col-md-1-div5");
    $("#head_design").append(div1);// 追加新元素
    var div1=document.createElement("a");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","col-md-1-div5-a5");
    div1.setAttribute("style","text-decoration: none;color: white;font-size: large");
    div1.setAttribute("onmouseenter","this.style='text-decoration: none;color:black'");
    div1.setAttribute("onmouseleave","this.style='text-decoration: none;color:white'");
    div1.setAttribute("href","../content/join.html");
    $("#col-md-1-div5").prepend(div1);// 追加新元素
    var div1=document.createElement("p");
    div1.setAttribute("id","change5");
    div1.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: large");
    $("#col-md-1-div5-a5").prepend(div1);// 追加新元素
    document.getElementById('col-md-1-div5-a5').innerHTML="加入我们";

    var div1=document.createElement("div");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","col-md-1-div6");
    $("#head_design").append(div1);// 追加新元素
    var div1=document.createElement("a");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","col-md-1-div6-a6");
    div1.setAttribute("style","text-decoration: none;color: white;font-size: large");
    div1.setAttribute("onmouseenter","this.style='text-decoration: none;color:black'");
    div1.setAttribute("onmouseleave","this.style='text-decoration: none;color:white'");
    div1.setAttribute("href","../content/join.html");
    $("#col-md-1-div6").prepend(div1);// 追加新元素
    var div1=document.createElement("p");
    div1.setAttribute("id","change5");
    div1.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: large");
    $("#col-md-1-div6-a6").prepend(div1);// 追加新元素
    document.getElementById('col-md-1-div6-a6').innerHTML="关于我们";

    var div1=document.createElement("div");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","move");
    $("#head_design").append(div1);// 追加新元素
    var div1=document.createElement("a");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","link");
    div1.setAttribute("style","text-decoration: none;color: white;font-size: large");
    div1.setAttribute("onmouseenter","this.style='text-decoration: none;color:black'");
    div1.setAttribute("onmouseleave","this.style='text-decoration: none;color:white'");
    div1.setAttribute("href","../content/login.html");
    $("#move").prepend(div1);// 追加新元素
    var div1=document.createElement("p");
    div1.setAttribute("id","change");
    div1.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: large");
    $("#link").prepend(div1);// 追加新元素
    document.getElementById('link').innerHTML="登录";

    var div1=document.createElement("div");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","gone");
    $("#head_design").append(div1);// 追加新元素
    var div1=document.createElement("a");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","link2");
    div1.setAttribute("style","text-decoration: none;color: white;font-size: large");
    div1.setAttribute("onmouseenter","this.style='text-decoration: none;color:black'");
    div1.setAttribute("onmouseleave","this.style='text-decoration: none;color:white'");
    div1.setAttribute("href","../content/register,html");
    $("#gone").prepend(div1);// 追加新元素
    var div1=document.createElement("p");
    div1.setAttribute("id","change8");
    div1.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: large");
    $("#link2").prepend(div1);// 追加新元素
    document.getElementById('link2').innerHTML="注册";


    var div1=document.createElement("div");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","show");
    div1.setAttribute("style","display:none");
    $("#head_design").append(div1);// 追加新元素
    var div1=document.createElement("a");
    div1.setAttribute("class","col-md-1");
    div1.setAttribute("id","delete");
    div1.setAttribute("style","text-decoration: none;color: white;font-size: large");
    div1.setAttribute("onmouseenter","this.style='text-decoration: none;color:black'");
    div1.setAttribute("onmouseleave","this.style='text-decoration: none;color:white'");
    div1.setAttribute("href","../content/register.html");
    $("#show").prepend(div1);// 追加新元素
    var div1=document.createElement("p");
    div1.setAttribute("id","change9");
    div1.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: large");
    $("#delete").prepend(div1);// 追加新元素
    document.getElementById('delete').innerHTML="注销";

}
