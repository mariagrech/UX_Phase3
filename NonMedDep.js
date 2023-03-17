//Shows Church Info
// document.querySelector("#church-button").addEventListener("click", () => {
//   window.location.href = "NonMedicalDepartment.html";
//   document.getElementById("#test").innerHTML = "Church";
//   console.log("test");
//   // document.getElementsByClassName(".title-prof").innerHTML = "Church";
//   // window.navigate("MedicalDepartment.html");
//   // document.querySelector("#info-church").style.cssText =
//   //   "opacity: 1; visibility: visible; height: fit-content; margin: 10%";
//   // document.querySelector("#church-button").style.cssText =
//   //   "opacity: 1; visibility: visible; height: fit-content;";
//   // document.querySelector("#church").style.cssText = "height: 50%;";
// });

// sessionStorage.getItem("favoriteMovie");
// console.log(sessionStorage.getItem("favoriteMovie"));
let dep = sessionStorage.getItem("department");
console.log(dep);

if (dep == "Church") {
  console.log("works");
  document.getElementById("department").innerHTML = "Church";
  document.getElementById("dep-info").innerHTML =
    "The Roman Catholic Chapel is located on the ground floor, Infront of the Main Entrance. It is a quite place for worship, prayer and reflection. Everybody is invited to this sacred space – hospital staff, patients and relatives. The Chapel has a permanent Eucharistic adoration. It opens at 6.00am and closes late at night. Mass is held daily from Monday to Sunday at 6.30am, 7.00am and 12.00 noon; Saturdays at 6.30am, 7.00am and 7.00pm; Sundays at 6.30am, 7.15am and 12.00 noon. On Sundays two additional masses are celebrated in the wards. Communion to patients is distributed daily between 2.00pm and 3.30pm.";
  document.getElementById("depimg").src = "images/churchMap.png";
} else {
  console.log("fail");
}

if (dep == "Parking") {
  console.log("works");
  document.getElementById("department").innerHTML = "Parking";
  document.getElementById("dep-info").innerHTML =
    "Parking Rates <br><br> The following parking rates apply: <br><br> From 1 min to 30 mins – No Charge <br> From 31 mins to 60 mins - €1.00 <br> From 61 mins onwards - €2.50 <br> Between 22:00 and 06:00 - €0.80 for the whole period.";

  document.getElementById("depimg").src = "images/parkingMap.png";
} else {
  console.log("fail");
}

if (dep == "Administration") {
  console.log("works");
  document.getElementById("department").innerHTML = "Administration";
  document.getElementById("dep-info").innerHTML =
    "The hospital's administrators is responsible for organizing and overseeing the health services and daily activities of a hospital or healthcare facility. The Administrators plan departmental activities, evaluate doctors and other hospital employees, create and maintain policies, help develop procedures for medical treatments, quality assurance, patient services, and public relations activities such as active participation in fund-raising and community health planning.";
  document.getElementById("depimg").src = "images/adminMap.png";
} else {
  console.log("fail");
}


if (dep == "Customer Care") {
  console.log("works");
  document.getElementById("department").innerHTML = "Customer Care Desk";
  document.getElementById("dep-info").innerHTML =
    "Our main objective is to ensure that services delivered throughout the hospital meet the needs of customers whilst providing them with a point of contact and access to hospital information and service. The Customer Care Department incorporates 3 sections under its remit. These are Customer Care Unit, Main Reception Desks at MDH Out Patient Department, MDH Main Entrance Foyer and SAMOC Main Entrance Foyer. <br> Our unit is situated on the left side of the main entrance foyer. In case of difficulties, enquiries can be made with the Main Reception in the Main Entrance of this hospital. <br> Our offices are open from Monday to Sunday between 7.45am to 7.45pm. No service is available during late evenings and nights.";
  document.getElementById("depimg").src = "images/customer care map.png";
} else {
  console.log("fail");
}


if (dep == "Cafeteria") {
  console.log("works");
  document.getElementById("department").innerHTML = "Cafeteria";
  document.getElementById("dep-info").innerHTML =
    "The Mater Dei Treetop Café is open every school day before school and at recess and lunch. We cook and produce fresh food daily. The Café operates to supply healthy meals and snacks for students and staff. The Cafeteria aims to keep prices to a minimum. The Café operates Monday to Saturday 8am to 8pm. The café features a variety of sandwiches , salads and drinks.";
  document.getElementById("depimg").src = "images/cafeteriaMap.png";
} else {
  console.log("fail");
}
