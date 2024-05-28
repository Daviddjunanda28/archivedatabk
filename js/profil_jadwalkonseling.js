document
  .getElementById("schedule-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    var day = document.getElementById("day").value;
    var time = document.getElementById("time").value;
    var activity = document.getElementById("activity").value;

    // Create a new row
    var newRow = document.createElement("tr");
    newRow.innerHTML =
      "<td>" + day + "</td><td>" + time + "</td><td>" + activity + "</td>";

    // Append the new row to the table
    document.getElementById("schedule-table").appendChild(newRow);

    // Clear the form
    document.getElementById("schedule-form").reset();
  });
