const date = document.getElementById("date");
const form = document.getElementById("myForm");
const gender = document.getElementById("gender");

const akanMale = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const akanFemale = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

form.addEventListener("submit", function (e){
  e.preventDefault();


  let output = "";
  let thisArray = [];
  const newGenderValue = gender.value;
  const newDateValue = date.value;

  const day = new Date(newDateValue);
  const dayOfWeek = day.getDay();

  if(newGenderValue === male){
    thisArray = akanMale;
  }
  else{
    thisArray = akanFemale;
  }

  output = `Your akan name is ${arr[dayOfWeek]}`;

});