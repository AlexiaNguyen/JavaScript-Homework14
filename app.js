// from data.js

var tbody = d3.select("tbody");
data.forEach((alienReport) => {
    var row = tbody.append("tr");
    Object.entries(alienReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

var tableData = data;
var submit = d3.select("#filter-btn");
  submit.on("click", function() {
  // $("#tbodyid").empty();
  $("#ufo-table tbody").empty()
  d3.event.preventDefault();
  var inputElement = d3.select("#datetime");
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
  console.log(filteredData);
  
  filteredData.forEach((entry) => {
    var tbody = d3.select("tbody");
    var row = tbody.append("tr");
        Object.entries(entry).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
});
