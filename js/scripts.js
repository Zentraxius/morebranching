$(document).ready(function () {
  $("form#insurance").submit(function (event) {
    const age = parseInt($("input#age").val());
    const gender = $("select#gender").val();

    if (age) {
      const quote = (100 - age) * 3;
      if (gender === "male" && age < 26) {
        quote += 50;
      }

      $("#rate").text(quote);
      $("#quote").show();
    } else {
      alert("Please enter your age.");
    }
    event.preventDefault();
  });
});

// if (gender === 'male' || age < 26) {     This is an OR statement (if ur male OR under 26, gimme money)
//   quote += 50;
// }

// if (!under18) {  This is a NOT statement, if ur not under 18 show me ur ID
// }
// $("element").hide();
// $("#whatever").css("display","none");
