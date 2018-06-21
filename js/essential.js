document.write("<script type=\"text/javascript\" src=\"../js/jquery.cookie.js\"></script>");
iptracket();
var ip;
function detectOS() {
    var sUserAgent = navigator.userAgent;
    var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
    var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
    if (isMac) return "Mac" ;
    var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
    if (isUnix) return "Unix";
    var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
    if (isLinux) return "Linux" ;
    if (isWin) {
        var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
        if (isWin2K) return "Win2000" ;
        var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
        if (isWinXP) return "WinXP" ;
        var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
        if (isWin2003) return "Win2003" ;
        var isWinVista= sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
        if (isWinVista) return "WinVista" ;
        var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 || sUserAgent.indexOf("Windows 7") > -1;
        if (isWin7) return "Win7";
        var isWin81 = sUserAgent.indexOf("Windows NT 6.3") > -1 || sUserAgent.indexOf("Windows 8.1") > -1;
        if (isWin81) return "Win8.1" ;
        var isWin10 = sUserAgent.indexOf("Windows NT 6.4") > -1 || sUserAgent.indexOf("Windows 10") > -1;
        if (isWin10)return "Win10" ;
        var isWin10 = sUserAgent.indexOf("Windows NT 10") > -1 || sUserAgent.indexOf("Windows 10") > -1;
        if (isWin10) return "Win10" ;
    }
    var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if (isAndroid) return "Android" ;
    if (isiOS) return "iOS" ;
    return "other";
}
function detectionbrowser() {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var s;
    (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
        (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
            (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
                (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
                    (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
    /*以下进行测试*/
    if (Sys.ie) return ('IE: ' + Sys.ie) ;
    if (Sys.firefox) return ('Firefox: ' + Sys.firefox) ;
    if (Sys.chrome) return ('Chrome: ' + Sys.chrome) ;
    if (Sys.opera) return ('Opera: ' + Sys.opera) ;
    if (Sys.safari) return ('Safari: ' + Sys.safari) ;
}
function iptracket() {
    $.getJSON('https://ipapi.co/json/', function(data) {
       ip=data.ip;
    });
}
$("#delete").click(function () {
    $.get('../php/update.php',{delete:$.cookie('token')},function (data) {});
    $.removeCookie('token', { path: '/' });
    $.removeCookie('username', { path: '/' });
    window.location.href='../content/login.html'
})
if($.cookie("username")){
   document.getElementById('change').innerHTML="你好！"+$.cookie("username");
    $('#show').css('display','block')
    $('#change8').css('display','none')
}
design_mobile_header();
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
    div1.setAttribute("id","canvas-div2");
    div1.setAttribute("style","border-bottom: 1px silver solid;margin-top: 1%;height: 8%;width: 100%");
    $("#canvas").append(div1);// 追加新元素
    var div1=document.createElement("a");
    div1.setAttribute("id","canvas-p2");
    div1.setAttribute("style","text-decoration: none;color: white");
    div1.setAttribute("href","./index.html");
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
    div1.setAttribute("href","./index.html");
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
    div1.setAttribute("href","./index.html");
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
    div1.setAttribute("href","./index.html");
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