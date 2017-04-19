# Weather Getter.

Weather getter is the simplest weather app I could make. I literally made this app to play with the weather API from openweathermap.com. Nothing more, nothing less. With that, I thought I would share my work on GitHub because that's what a good little developer should do, right?

It's very straight forward; I create a couple `const` declarations containing the "never changing" query URL followed by a `const` for an API key provided for free by Open Weather Maps. Then I create variables for the unit type, set to imperial for because I'm in the US and don't know how to read in kelvin. I set these as variables instead of just hardcoding it into the query because eventually I'd like to add a dropdown menu for users to select the unit type they'd prefer to see. From there I have a `getWeather()` function that is called when the button in the `index.html` is clicked propagating the data below the form.

I will refactor and refine the features for this over time, like I'm pretty sure I can find a better way of printing this data to the DOM that doesn't include 4 lines of `document.getElementById('');`.

## See it in action:
[Weather Getter](http://www.gsarpy.com/weather)

# Future Plans
  - Create custom icons/artwork to visually represent the weather and conditions
  - Hide the titles of each weather condition until the data is printed to the DOM
  - Ability to create an account and save your preferred location
  - Once account creation is in place I'll add the ability to create multiple locations so you can see more than one at a time.
  - Eventually I'll add 5-day forecasts.


### Technology Used:
- ES6 JavaScript for primary app
- jQuery for grabbing API data
- OpenWeatherMap.com as my API resource
- Bootstrap CSS for low-effort layout design
