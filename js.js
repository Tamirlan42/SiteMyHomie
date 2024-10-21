function openTab(tabName) {
    var i;
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

document.addEventListener("DOMContentLoaded", function() {
    var tabcontent = document.getElementsByClassName("tabcontent");
    for (var i = 0; i < tabcontent.length; i++) {
        if (tabcontent[i].id !== "newTab") {
            tabcontent[i].style.display = "none";
        }
    }
});

document.getElementById("newTab").addEventListener("click", function() {
    openTab("newTab");
});

document.addEventListener("DOMContentLoaded", function() {
    openTab("newTab");
});
