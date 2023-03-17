//Hides 1st Page , Show 2nd Page
document.querySelector(".next-page-1").addEventListener("click", () => {
  document.querySelector(".form_1").style.display = "none";
  document.querySelector(".form_2").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content;  ";
  document.querySelector("#num1").style.background = "white";
  document.querySelector("#num1").style.color = "#0a5375";
  document.querySelector("#num2").style.background = "#0a5375";
  document.querySelector("#num2").style.color = "white";
});
//Hides 2nd Page , Show 3rd Page
document.querySelector(".next-page-2").addEventListener("click", () => {
  document.querySelector(".form_2").style.display = "none";
  document.querySelector(".form_3").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content; ";
  document.querySelector("#num2").style.background = "white";
  document.querySelector("#num2").style.color = "#0a5375";
  document.querySelector("#num3").style.background = "#0a5375";
  document.querySelector("#num3").style.color = "white";
});
//Hides 3rd Page , Show 2nd Page
document.querySelector(".prev-page-3").addEventListener("click", () => {
  document.querySelector(".form_3").style.display = "none";
  document.querySelector(".form_2").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content;";
  document.querySelector("#num3").style.background = "white";
  document.querySelector("#num3").style.color = "#0a5375";
  document.querySelector("#num2").style.background = "#0a5375";
  document.querySelector("#num2").style.color = "white";
});
//Hides 2nd Page , Show 1st Page
document.querySelector(".prev-page-2").addEventListener("click", () => {
  document.querySelector(".form_2").style.display = "none";
  document.querySelector(".form_1").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content;";
  document.querySelector("#num2").style.background = "white";
  document.querySelector("#num2").style.color = "#0a5375";
  document.querySelector("#num1").style.background = "#0a5375";
  document.querySelector("#num1").style.color = "white";
});

