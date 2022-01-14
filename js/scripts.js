$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault;
    const name = $("input#name").val();
    const age = parseInt($("input#age").val());
    const song = $("input:radio:checked").val();
    const beverage = $("input#beverage").val();
    const phone = parseInt($("input#").val());
    const santa = $("input#").val();
    const color = $("input#").val();
  });
});