window.onload = function() {
    var radio = document.getElementsByName("display_select");
    setInterval(() => {
        var len = radio.length;
        for(var i = 0; i < len; ++i) {
            if(radio[i].checked == true) {
                radio[i].checked = false;
                radio[(i + 1) % len].checked = true;
                break;
            }
        }
        var x = -Math.random() * 300;
        var y = -Math.random() * 400;
        document.getElementById("display").style.backgroundPosition = x + "px " + y + "px"
    }, 2000);
}