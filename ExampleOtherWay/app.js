function loadData() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var request = JSON.parse(this.responseText);
      console.log(request.location.region);
      request.data.text.forEach(element => {
        var node = document.createElement("li");
        node.innerText = element;
        document.getElementById("weather").appendChild(node);
      });
    }
  };
  xhttp.open(
    "GET",
    "https://forecast.weather.gov/MapClick.php?lat=38.4247341&lon=-86.9624086&FcstType=json",
    true
  );
  xhttp.send();
}
