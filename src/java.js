//Functions

//Function to transform time to AM-PM
function toAmPm() {
  let currentHour = now.getHours();
  if (currentHour > 12) {
    currentHour = currentHour - 12;
    return [currentHour, "pm"];
  } else {
    return [currentHour, "am"];
  }
}

//Function to transform time (formating)
function transformTime(timeStamp) {
  let date = new Date(timeStamp);
  let currentHour = toAmPm(date.getHours());
  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let reply = `${days[date.getDay()]}, ${currentHour[0]}:${currentMinutes} ${
    currentHour[1]
  }`;
  return reply;
}

//Function to update emojis for forecast days
function updateEmojis(outcome) {
  let index = outcome[0];
  let newClass = outcome[1];
  document
    .querySelector(`#weatherEmogi-${index}`)
    .setAttribute("class", newClass);
}

//Function to get forecast based on coordinates obtained from current city
function getForecast(result) {
  let i;
  for (i = 1; i < 6; i++) {
    let maxTemp = Math.round(result.data.daily[i].temp.max);
    let minTemp = Math.round(result.data.daily[i].temp.min);
    document.querySelector(`#max-day-${i}`).innerHTML = maxTemp;
    document.querySelector(`#min-day-${i}`).innerHTML = minTemp;
    let currentClass = updateIcon(result.data.daily[i].weather[0].id);
    let outcome = [i, currentClass];
    updateEmojis(outcome);
  }
}

//Function to get coordinates of current city displayed, for weather forecast
function getCoordinates(result) {
  let lon = result.data.coord.lon;
  let lat = result.data.coord.lat;
  let forecastApiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,current&appid=${apiKey}&units=metric`;
  axios.get(forecastApiUrl).then(getForecast);
}

//Code to update data on webpage according city user input

let apiKey = "7682c2be43d876a63c355131eaac1953";
let defaultCityApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}&units=metric`;

axios.get(defaultCityApiUrl).then(updateCity);

