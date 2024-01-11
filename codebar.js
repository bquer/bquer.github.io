document.addEventListener("DOMContentLoaded", function() {
    bar("html-bar", 75, "HTML");
    bar("css-bar", 60, "CSS");
    bar("javascript-bar", 70, "JavaScript");
    bar("nodejs-bar", 60, "NodeJS");
    bar("ts-bar", 30, "TypeScript");
    bar("python-bar", 65, "Python");
    bar("ahk-bar", 50, "AutoHotKey");
  });
  
  function bar(barId, percentage, language) {
    var progressBar = document.getElementById(barId);
    progressBar.style.width = percentage + "%";
  
    var label = document.createElement("div");
    label.className = "progress-label";
    label.innerHTML = percentage + "% " + language;
    progressBar.appendChild(label);
  }
  
