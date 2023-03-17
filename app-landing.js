//Shows Medical Info
document.querySelector("#medical").addEventListener("click", () => {
  document.querySelector("#icon-med").style.display = "none";
  document.querySelector("#med-Info").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content; margin: 10%";
  document.querySelector("#med-button").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content;";
});

//Shows Non-Medical Info
document.querySelector("#non-medical").addEventListener("click", () => {
  document.querySelector("#icon-non-med").style.display = "none";
  document.querySelector("#non-med-Info").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content; margin: 10%";
  document.querySelector("#non-med-button").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content;";
});

