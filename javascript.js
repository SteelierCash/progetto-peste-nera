const bottoneSwitch = document.querySelector("#switch-peste-covid");
const differenzePesteNera = document.querySelector("#differenze-peste-nera");
const differenzeCovid = document.querySelector("#differenze-covid");

bottoneSwitch.addEventListener("click", function () {
  bottoneSwitch.textContent = differenzePesteNera.classList.contains("nascosto")
    ? "Peste nera"
    : "Covid-19";

  differenzePesteNera.classList.toggle("nascosto");
  differenzeCovid.classList.toggle("nascosto");
});
