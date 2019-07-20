function getLocation(ele) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    ele.innerHTML = "Geolocation is not supported by this browser.";
  }

  function showPosition(position) {
    ele.value = position.coords.latitude + "," + position.coords.longitude;
  }
}
