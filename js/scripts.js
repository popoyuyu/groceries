$(document).ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    let groceryList = [];
    const listString = $("#grocerylist").val().toUpperCase();
    groceryList = listString.split(" ");
    groceryList.sort();
    groceryList.forEach(function (food) {
      $("#result").append("<li>" + food + "</li>");
      $("#result").show();
      $("#formOne").hide();
    });
  });
});
