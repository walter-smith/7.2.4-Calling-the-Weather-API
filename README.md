The web page below allows the user to enter a ZIP code. When the Find button is clicked, the jQuery code uses $.ajax() to make a CORS request to the Weather API through a proxy script. The proxy script forwards the request to api.openweathermap.org and returns the API response to the browser. Making a request to the proxy script is identical to making a request to api.openweathermap.org.

After the $.ajax() method makes the request to the API, the done() callback function executes with the API response in the data parameter. If the API sends back an error code 404, meaning the ZIP code could not be found, then an error message is displayed. Otherwise, the current temperature is displayed in the web page. If the API returns an error response, the fail() function callback executes. An error could arise if an invalid API key is used.

To make the web page operational, replace "APIKEY" with your API key. Then render the web page, type in a five digit ZIP code, and press Find. The current temperature for the ZIP code should display.

Modify the web page to display the description and humidity by adding HTML code under the "Current temperature" paragraph and by adding JavaScript code in the done() callback function.