$(function() {
    $(".one").on("click", function(event) {
      var id = $(this).attr("id");
      // Send the PUT request.
      console.log(id);
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
      }).then(
        function() {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#submit").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        name: $("#whatBurger").val().trim()
      };
  console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });