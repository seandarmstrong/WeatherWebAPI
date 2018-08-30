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
    `https://forecast.weather.gov/MapClick.php?lat=42.9634&lon=-85.6681&FcstType=json`
  )
    .then(response => response.json())
    .then(request => {
      let test = "";
      let timeArray = request.time.startPeriodName;
      let textArray = request.data.text;
      for (let i = 0; i < timeArray.length; i++) {
        test += `
        <tr>
        <td>${timeArray[i]}</td>
        <td>${textArray[i]}</td>
        </tr>
        `;
        document.querySelector("#data").innerHTML = test;
      }
      //   timeArray.forEach(item => {
      //     test += `
      //         <tr>${item}</tr>
      //         `;
      //     document.querySelector("#days").innerHTML = test;
      //   });
      //   let test2 = "";
      //   let textArray = request.data.text;
      //   textArray.forEach(item => {
      //     test2 += `
      //         <tr>${item}</tr>
      //         `;
      //     document.querySelector("#forecast").innerHTML = test2;
      //   });
    });
}
