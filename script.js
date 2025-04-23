document.querySelectorAll(".child").forEach(function (element) {
  if (element.innerText.toLowerCase().includes("rat")) {
    element.style.backgroundColor = "blue";
  } else {
    element.style.backgroundColor = "black";
  }
});
