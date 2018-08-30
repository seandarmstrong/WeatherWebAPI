function loadData() {
  fetch(
    `https://forecast.weather.gov/MapClick.php?lat=${
      document.getElementById("latitude").value
    }&lon=-${document.getElementById("longitude").value}&FcstType=json`
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
    });
}

function loadStockData() {
  fetch(
    `https://api.iextrading.com/1.0/stock/${
      document.getElementById("stocksymbol").value
    }/batch?types=quote,news,chart&range=1m&last=10`
  )
    .then(response => response.json())
    .then(request => {
      let test = "";
      let stockArray = [
        request.quote.latestTime,
        request.quote.symbol,
        request.quote.previousClose,
        request.quote.close,
        request.quote.change
      ];
      stockArray.forEach(item => {
        test += `
      <td>${item}</td>
      `;
        document.querySelector("#stock").innerHTML = test;
      });
    });
}
