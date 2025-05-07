const apiKey = "1cd22a586840aada60c53d6a00c201f8";

async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.cod === 200) {
      resultDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>${data.weather[0].description}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
      `;
    } else {
      resultDiv.innerHTML = "City not found!";
    }
  } catch (err) {
    resultDiv.innerHTML = "Error fetching data.";
  }
}
