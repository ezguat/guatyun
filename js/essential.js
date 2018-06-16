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
function design_mobile_header() {
    var div=document.createElement("div");
    div.setAttribute("id","header");
    div.setAttribute("style","width: 100%;height:8%;background-color: #00c1de;");
    $("#mobile").append(div);// 追加新元素
    var div1=document.createElement("div");
    div1.setAttribute("id","name-m");
    div1.setAttribute("style","margin-top:3%;margin-left: 55%;height: 100%;width: 35%;display: inline-block");
    $("#header").append(div1);// 追加新元素
    var a=document.createElement("a");
    a.setAttribute("id","link-m");
    a.setAttribute("style","text-decoration: none;color: white");
    a.setAttribute("onmouseenter","this.style='text-decoration: none;color:black'");
    a.setAttribute("onmouseleave","this.style='text-decoration: none;color:white'");
    a.setAttribute("href","./content/login.html");
    $("#name-m").append(a);// 追加新元素
    var p=document.createElement("p");
    p.setAttribute("id","change-m");
    p.setAttribute("style","font-family: 'Microsoft YaHei UI';font-size: medium");
    p.setAttribute("text","登录");
    $("#name-m").append(p);// 追加新元素
}