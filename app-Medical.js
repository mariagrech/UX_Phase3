//Shows Pharmacy Info
document.querySelector("#pharmacy").addEventListener("click", () => {
  // document.querySelector("#icon-med").style.display = "none";
  document.querySelector("#info-pharmacy").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content; margin: 10%";
  document.querySelector("#pharmacy-button").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content;";
  document.querySelector("#pharmacy").style.cssText = "height: 50%;";
});

//Shows Emergency Info
document.querySelector("#emergency").addEventListener("click", () => {
  // document.querySelector("#icon-med").style.display = "none";
  document.querySelector("#info-emergency").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content; margin: 10%";
  document.querySelector("#emergency-button").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content;";
  document.querySelector("#emergency").style.cssText = "height: 50%;";
});

//Shows Outpatients Info
document.querySelector("#outpatient").addEventListener("click", () => {
  // document.querySelector("#icon-med").style.display = "none";
  document.querySelector("#info-outpatient").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content; margin: 10%";
  document.querySelector("#outpatient-button").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content;";
  document.querySelector("#outpatient").style.cssText = "height: 50%;";
});

//Shows Radiology Info
document.querySelector("#radiology").addEventListener("click", () => {
  // document.querySelector("#icon-med").style.display = "none";
  document.querySelector("#info-radiology").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content; margin: 10%";
  document.querySelector("#radiology-button").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content;";
  document.querySelector("#radiology").style.cssText = "height: 50%;";
});

//Shows Pathology Info
document.querySelector("#pathology").addEventListener("click", () => {
  // document.querySelector("#icon-med").style.display = "none";
  document.querySelector("#info-pathology").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content; margin: 10%";
  document.querySelector("#pathology-button").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content;";
  document.querySelector("#pathology").style.cssText = "height: 50%;";
});

////////////////////////////////////////////////////////////////////////////////

//Shows Pharmacy Page Info
document.querySelector("#pharmacy-button").addEventListener("click", () => {
  var department = "Pharmacy";
  sessionStorage.setItem("department", department);
  window.location.href = "MedicalDepartment.html";
});

//Shows Emergency Page Info
document.querySelector("#emergency-button").addEventListener("click", () => {
  var department = "Emergency";
  sessionStorage.setItem("department", department);
  window.location.href = "MedicalDepartment.html";
});

//Shows Outpatient Page Info
document.querySelector("#outpatient-button").addEventListener("click", () => {
  var department = "Outpatient";
  sessionStorage.setItem("department", department);
  window.location.href = "MedicalDepartment.html";
});

//Shows Radiology Page Info
document.querySelector("#radiology-button").addEventListener("click", () => {
  var department = "Radiology";
  sessionStorage.setItem("department", department);
  window.location.href = "MedicalDepartment.html";
});

//Shows Pathology Page Info
document.querySelector("#pathology-button").addEventListener("click", () => {
  var department = "Pathology";
  sessionStorage.setItem("department", department);
  window.location.href = "MedicalDepartment.html";
});
