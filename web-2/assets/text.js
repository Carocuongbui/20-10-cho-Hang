document.querySelector(".button").addEventListener("click", function () {
  // Show .kk and .ww
  document.querySelectorAll(".kk, .ww").forEach(function (el) {
    el.style.display = "block";
  });
  // Hide .op and .aa
  document.querySelectorAll(".er, .aa, .button").forEach(function (el) {
    el.style.display = "none";
  });
});
