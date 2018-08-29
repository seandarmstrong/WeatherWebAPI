// document.querySelector(".longitude").addEventListener("keyup", getLongitude);

// function getLongitude(event) {
//   let longitude = event.target.value;
//   fetch(
//     `https://forecast.weather.gov/MapClick.php?lat=42.9634&lon=${longitude}&FcstType=json`
//   )
//     .then(res => res.json())
//     .then(req => {
//       return req;
//     });
// }

// document.querySelector(".latitude").addEventListener("keyup", getLatitude);

// function getLatitude(event) {
//   let latitude = event.target.value;
//   fetch(
//     `https://forecast.weather.gov/MapClick.php?lat=${latitude}&lon=${longitude}&FcstType=json`
//   )
//     .then(res => res.json())
//     .then(req => {
//       return req;
//     });
// }

function loadData() {
  fetch(
    `https://forecast.weather.gov/MapClick.php?lat=${
      document.getElementById("latitude").value
    }&lon=${document.getElementById("longitude").value}&FcstType=json`
  )
    .then(response => response.json())
    .then(request => {
      let test = "";
      let timeArray = request.time.startPeriodName;
      timeArray.forEach(item => {
        test += `
            <th>${item}</th>
            `;
        document.querySelector("#header").innerHTML = test;
      });
      let test2 = "";
      let textArray = request.data.text;
      textArray.forEach(item => {
        test2 += `
            <td>${item}</td>
            `;
        document.querySelector("#weather").innerHTML = test2;
      });
    });
}
