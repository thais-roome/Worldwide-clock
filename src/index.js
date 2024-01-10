function updateTime() {
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisTime.format("h:mm:ss[<small>]A[</small>]");

  let houstonElement = document.querySelector("#houston");
  let houstonDateElement = houstonElement.querySelector(".date");
  let houstonTimeElement = houstonElement.querySelector(".time");
  let houstonTime = moment().tz("Europe/Paris");

  houstonDateElement.innerHTML = houstonTime.format("MMMM Do YYYY");
  houstonTimeElement.innerHTML = houstonTime.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
