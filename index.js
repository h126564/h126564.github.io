const bg1 = document.getElementById("bg1");
const bg2 = document.getElementById("bg2");
const bg3 = document.getElementById("bg3");
bg2.style.left = -bg2.offsetWidth*2 + "px";
function scrollBg2() {
    if (window.scrollY > 50 && window.scrollY < 800) {
        if (-bg2.offsetWidth * 1.2 + (window.scrollY - 50) * 6 < 0) {
            bg2.style.left = -bg2.offsetWidth * 1.2 + (window.scrollY - 50) * 6 + "px";
        } else if (-bg2.offsetWidth * 1.2 + (window.scrollY - 50) * 6 > 600) {
            bg2.style.left = -bg2.offsetWidth * 1.2 + (window.scrollY - 825) * -6 + "px";
        } else {
            bg2.style.left = 0 + "px";
        }
    }
}
onscroll = function(){
    bg1.style.left = -window.scrollY *4 + "px";
    scrollBg2();




};

