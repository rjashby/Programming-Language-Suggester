$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const age = parseInt($("input#age").val());
    const song = $("input:radio:checked").val();
    const beverage = document.getElementById("beverage").value;
    const cool = $("input#cool").val();
    const phone = $("input#phone").val();
    const santa = $("input#santa").val();
    const color = $("input#color").val();
    $("#javascript").hide();
    $("#python").hide();
    $("#swift").hide();
    $("#csharp").hide();
    $("#toocool").hide();
    $("#old").hide();
    $("#messed-up").hide();
    $("#output").show();

    if (cool >= 90) {
      $("#toocool").show();
    } else if (age >= 70) {
      $("#old").show();
    } else {
      if (song === "shoot" && beverage === "beer") {
        $("#javascript").show();
      } else if (song === "shoot" && beverage === "wine") {
        $("#python").show();
      } else if (song === "shoot" && beverage === "booze") {
        $("#swift").show();
      } else if (song === "shoot" && beverage === "seltzer") {
        $("#csharp").show();
      } else if (song === "back" && beverage === "beer") {
        $("#csharp").show();
      } else if (song === "back" && beverage === "wine") {
        $("#swift").show();
      } else if (song === "back" && beverage === "booze") {
        $("#python").show();
      } else if (song === "back" && beverage === "seltzer") {
        $("#javascript").show();
      } else if (song === "thunder" && beverage === "beer") {
        $("#javascript").show();
      } else if (song === "thunder" && beverage === "wine") {
        $("#python").show();
      } else if (song === "thunder" && beverage === "booze") {
        $("#swift").show();
      } else if (song === "thunder" && beverage === "seltzer") {
        $("#csharp").show();
      } else if (song === "highway" && beverage === "beer") {
        $("#csharp").show();
      } else if (song === "highway" && beverage === "wine") {
        $("#swift").show();
      } else if (song === "highway" && beverage === "booze") {
        $("#python").show();
      } else if (song === "highway" && beverage === "seltzer") {
        $("#javascript").show();
      } else {
        $("#messed-up").show();
      }
    }
  window.scrollTo(0,document.body.scrollHeight);
  });
});

