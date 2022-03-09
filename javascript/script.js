let maleArray = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleArray = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

function findAkanName() {
  var DATE = document.getElementById("date");
  var male = document.getElementById("male");
  var female = document.getElementById("female");

  thisDateArray = DATE.value.split("-");
  console.log(thisDateArray);

  var CENTURY = parseInt(thisDateArray[0][0] + thisDateArray[0][1]);
  console.log(CENTURY);

  var YEAR = parseInt(thisDateArray[0][2] + thisDateArray[0][3]);
  console.log(YEAR);

  var MONTH = parseInt(thisDateArray[1]);
  console.log(MONTH);

  var DATE = parseInt(thisDateArray[2]);
  console.log(DATE);

  var day = parseInt(
    (CENTURY / 4 - 2 * CENTURY - 1 + (5 * YEAR) / 4 + (26 * (MONTH + 1)) / 10 + DATE) % 7
  );
  console.log(day);

  if (maleArray[day] === undefined || femaleArray[day] === undefined) {
    alert("Enter valid date");
  } else {
    if (male.selected === true) {
      console.log(maleArray[day]);
      document.getElementById("result").textContent =
        maleArray[day] + " is your Akan Name";
    } else if (female.selected === true) {
      console.log(femaleArray[day]);
      document.getElementById("result").textContent =
        femaleArray[day] + " is your Akan Name";
    }
  }

  $(".bg-primary").click(function(){
    $("#result").show();
    $('.bg-primary').off('dblclick');
  });
}