$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const age = parseInt($("input#age").val());
    const song = $("input:radio:checked").val();
    // const beverage = $("input#beverage").val();
    const beverage = document.getElementById("beverage").value;
    const cool = $("input#cool").val();
    const phone = parseInt($("input#phone").val());
    const santa = $("input#santa").val();
    const color = $("input#color").val();
    $("#javascript").hide();
    $("#python").hide();
    $("#swift").hide();
    $("#csharp").hide();
    console.log(name);
    console.log(age);
    console.log(song);
    console.log(beverage);
    console.log(cool);
    console.log(phone);
    console.log(santa);
    console.log(color);

    // if (a=b) {

    // }
  });
});