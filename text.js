var texts = [
  "BQuer",
  "geliştiriciyim",
  "tasarımcıyım",
  "Web & Desktop sewerim",
  "bug yazma uzmanıyım",
  "Python ve Node sevirem",
  "backendi daha çok sevirem",
  "az uz tersine mühendislik bilirim",
  "tool yazmayı severim",
];

var sayac = 0;
var element = document.getElementById("dynamic-description");
var benText = "Ben ";

function changeText() {
  var simdiki = benText + texts[sayac];
  var index = benText.length; 

  function a() {
    element.textContent = simdiki.slice(0, index);
    index++;

    if (index <= simdiki.length) {
      setTimeout(a, 100); 
    } else {
      sayac = (sayac + 1) % texts.length;
      setTimeout(changeText, 1000);
    }
  }

  a();
}

document.addEventListener("DOMContentLoaded", () => {
  changeText();
});
