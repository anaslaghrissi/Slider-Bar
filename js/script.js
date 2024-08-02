window.onload = function () {
  slider = document.querySelector(".slider input");
  slider.oninput = function () {
    progressBar = document.querySelector(".slider progress");
    progressBar.value = slider.value;
    slidervalue = document.querySelector(".slidervalue");
    slidervalue.innerHTML = slider.value;
  };
};
