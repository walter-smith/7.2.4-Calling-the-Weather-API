$(function() {   
    $("#findBtn").click(function() {
       // Hide the results div until the API sends back results
       $("#results").hide();
       
       // Clear any previous error messages
       $("#error").html("");
       
       // Let the user know request was sent
       $("#working").show();
    
       // Get the zip from the form
       let zip = $("#zip").val();
 
       // Send weather API request
       $.ajax({
          //url: "http://api.openweathermap.org/data/2.5/weather",
          url: "https://wp.zybooks.com/weather-proxy.php",
          data: {
             zip: zip,
             units: "imperial",
             appid: "4f099878aaa0972f50064d1d0763e789"    // Replace with your API key
          }
       }).done(function(data) {
          $("#working").hide();
          $("#results").show();
          
          // Display the weather data retrieved from the API         
          $("#currentTemp").html(data.main.temp);
 
          // Add your code here
          $("#description").html(data.weather[0].description);
          $("#humidity").html(data.main.humidity);
 
       }).fail(function(jqXHR) {
          $("#working").hide();
          $("#error").html("Error retrieving the weather.");
       });
    });
 });
 