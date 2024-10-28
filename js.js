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

function openTab(tabId) {
    // Скрываем все вкладки
    const tabs = document.querySelectorAll('.tabcontent');
    tabs.forEach(tab => tab.style.display = 'none');
    
    // Отображаем выбранную вкладку
    document.getElementById(tabId).style.display = 'block';
}

// При загрузке страницы по умолчанию отображаем главную вкладку
window.onload = function() {
    openTab('newTab');
};