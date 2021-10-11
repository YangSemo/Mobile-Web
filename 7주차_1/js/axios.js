$(function () {
    $(".confirm").click(async () => {
      const city = $("input").val();
      const api_key = "43ef3a569a97482b457ed3a76dc170f5";
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=metric&appid=${api_key}`;

      try {
        const response = await axios.get(url);
        if (response.status === 200) {
          console.log(response.data);
          alert("Success!");
          viewMapping(response.data);
        } else {
          throw new Error("Error");
        }
      } catch (error) {
        console.log(error);
        alert(error);
      }
      
    });

    
    //날씨 정보 표시 함수
  function viewMapping(data) {
    //날씨 아이콘
    var icon = `<i class="wi wi-owm-${data.weather[0].id}"></i>`;
    $(".result-wrapper").html(icon);

    //일출시간
    const sunrise = data.sys.sunrise;
    const sunriseTime = new Date(sunrise * 1000);
    console.log("일출시간 : " + sunriseTime);

    //일몰시간
    const sunset = data.sys.sunset;
    const sunsetTime = new Date(sunset * 1000);
    console.log("일몰시간 : " + sunsetTime);
    
    //날씨 종합 정보 생성
    const w_info = `
        <b>Country: </b> ${data.name} <i>${data.sys.country}</i><br/>
        <b>Current Temperature: </b> ${data.main.temp}&deg;C<br/>
        <b>Current Humidity: </b> ${data.main.humidity}%<br/>
        <b>Current Wind Speed: </b> ${data.wind.speed}m/s<br/>
        <b>Weather Conditions: </b> ${data.weather[0].description}<br/>
        <b>Clouds: </b> ${data.clouds.all}%<br/>
        <b>Sunrise: </b> ${sunriseTime}<br/>
        <b>Sunset: </b> ${sunsetTime}<br/>
    `;
    $("#weather-info").html(w_info);
  } //end of viewMapping

})