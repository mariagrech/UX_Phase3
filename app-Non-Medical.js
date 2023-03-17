//Shows Church Info
document.querySelector("#church").addEventListener("click", () => {
  // document.querySelector("#icon-med").style.display = "none";
  document.querySelector("#info-church").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content; margin: 10%";
  document.querySelector("#church-button").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content;";
  document.querySelector("#church").style.cssText = "height: 50%;";
});

//Shows Parking Info
document.querySelector("#parking").addEventListener("click", () => {
  // document.querySelector("#icon-med").style.display = "none";
  document.querySelector("#info-parking").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content; margin: 10%";
  document.querySelector("#parking-button").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content;";
  document.querySelector("#parking").style.cssText = "height: 50%;";
});

//Shows Administration Info
document.querySelector("#administration").addEventListener("click", () => {
  // document.querySelector("#icon-med").style.display = "none";
  document.querySelector("#info-administration").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content; margin: 10%";
  document.querySelector("#administration-button").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content;";
  document.querySelector("#administration").style.cssText = "height: 50%;";
});

//Shows Customer Care Info
document.querySelector("#customerCare").addEventListener("click", () => {
  // document.querySelector("#icon-med").style.display = "none";
  document.querySelector("#info-customerCare").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content; margin: 10%";
  document.querySelector("#customerCare-button").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content;";
  document.querySelector("#customerCare").style.cssText = "height: 50%;";
});

//Shows Cafeteria Info
document.querySelector("#cafeteria").addEventListener("click", () => {
  // document.querySelector("#icon-med").style.display = "none";
  document.querySelector("#info-cafeteria").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content; margin: 10%";
  document.querySelector("#cafeteria-button").style.cssText =
    "opacity: 1; visibility: visible; height: fit-content;";
  document.querySelector("#cafeteria").style.cssText = "height: 50%;";
});

//TEST///////////////////////////////////

function department(dep) {
  var department = dep;
  sessionStorage.setItem("department", department);

  window.location.href = "NonMedicalDepartment.html";
}

//Shows Church Page
document.querySelector("#church-button").addEventListener("click", () => {
  // var favoritemovie = "Shrek";
  // sessionStorage.setItem("favoriteMovie", favoritemovie);

  var department = "Church";
  sessionStorage.setItem("department", department);
  // console.log(department);
  // console.log("department");

  window.location.href = "NonMedicalDepartment.html";
});

//Shows Parking Page Info
document.querySelector("#parking-button").addEventListener("click", () => {
  var department = "Parking";
  sessionStorage.setItem("department", department);
  window.location.href = "NonMedicalDepartment.html";
});

//Shows Administration Page Info
document
  .querySelector("#administration-button")
  .addEventListener("click", () => {
    var department = "Administration";
    sessionStorage.setItem("department", department);
    window.location.href = "NonMedicalDepartment.html";
  });

//Shows Customer Care Page Info
document.querySelector("#customerCare-button").addEventListener("click", () => {
  var department = "Customer Care";
  sessionStorage.setItem("department", department);
  window.location.href = "NonMedicalDepartment.html";
});

//Shows Cafeteria Page Info
document.querySelector("#cafeteria-button").addEventListener("click", () => {
  var department = "Cafeteria";
  sessionStorage.setItem("department", department);
  window.location.href = "NonMedicalDepartment.html";
});
