document.getElementById("hamburger").addEventListener("click", function() {
    document.getElementById("sidebar").style.width = "250px";
});

document.getElementById("closeSidebar").addEventListener("click", function() {
    document.getElementById("sidebar").style.width = "0";
});
