let dep = sessionStorage.getItem("department");
console.log(dep);

if (dep == "Pharmacy") {
  console.log("Pharmacy");
  document.getElementById("department").innerHTML = "Pharmacy";
  document.getElementById("dep-info").innerHTML =
    "The Pharmacy Department provides a variety of services from different locations. The general public can access the dispensaries located at Mater Dei Hospital and Sir Anthony Mamo Oncology Center from the respective ground floors. <br> The dispensaries opening hours are from Monday to Friday between 8.00 hrs and 14.15 hrs, and Saturdays from 8.00 hrs till 12.15 hrs. 24 hour emergency services are provided after hours to both public and hospital. Pharmacy can be contacted on +356 25456514 in case of such an emergency. ";
  document.getElementById("depimg").src = "images/pharmacyMap.png";
} else {
  console.log("fail");
}

if (dep == "Emergency") {
  console.log("Emergency");
  document.getElementById("department").innerHTML = "Emergency Department";
  document.getElementById("dep-info").innerHTML =
    "The Emergency Department can be very busy at times and thus should be used by those patients seeking urgent medical attention only. Patients should ideally be referred by either the family doctor or health centre. This is to ensure that patients who can be treated at health centres do not need to  wait at the Emergency Department until all urgent cases are dealt with.";
  document.getElementById("depimg").src = "images/emergencyMap.png";
} else {
  console.log("fail");
}

if (dep == "Outpatient") {
  console.log("Outpatient");
  document.getElementById("department").innerHTML = "Outpatient Department";
  document.getElementById("dep-info").innerHTML =
    "The outpatient department provides diagnosis and care for patients that do not need to stay overnight. The outpatient department is an important part of the overall running of the hospital. It is normally integrated with the in-patient services and staffed by consultant physicians and surgeons who also attend inpatients in the wards. Many patients are examined and given treatment as outpatients before being admitted to the hospital at a later date as inpatients. When discharged, they may attend the outpatient clinic for follow-up treatment";
  document.getElementById("depimg").src = "images/outpatientsMap.png";
} else {
  console.log("fail");
}

if (dep == "Radiology") {
  console.log("Radiology");
  document.getElementById("department").innerHTML = "Radiology Department";
  document.getElementById("dep-info").innerHTML =
    "The Radiology department caters for both in-patients and out-patients. In order to schedule an appointment at the Medical Imaging, a doctor must fill in an appropriate online form that is available to all departments from where patients can be referred. Each request will be met according to the availability of appointment slots and according to the urgency that is expressed by the referrer. Furthermore, it may be recommended that requests are changed or cancelled if the local consultants deem it necessary; this is decided considering that the radiation dose that the patient will receive may not be justified and the information obtained from the investigation may not change the course of treatment that the patient may require.";
  document.getElementById("depimg").src = "images/radiologyMap.png";
} else {
  console.log("fail");
}

if (dep == "Pathology") {
  console.log("Pathology");
  document.getElementById("department").innerHTML = "Pathology Department";
  document.getElementById("dep-info").innerHTML =
    "The Pathology Department offers the full range of services that are generally required by the clinician. The Department’s test list consists of about 600 different tests. Laboratories as well as a large number of specialized tests that are subcontracted to our overseas supplier. The complete test menu consists of about 1700 tests. Most tests take only a few days to be carried out but some require longer time to process. Testing of an urgent nature is carried out 24x7. Tests can only be requested by hospital, health centre, or family physicians, who will order the appropriate tests after examining the patient. Patients can thus opt to go either through their private General Practitioner, through a Health Centre GP Clinic or through Hospital Outpatients’ Clinic (by appointment) to get the necessary testing carried out.";
  document.getElementById("depimg").src = "images/pathologyMap.png";
} else {
  console.log("fail");
}
