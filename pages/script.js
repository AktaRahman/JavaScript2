const factor_indonesia = 13000;

//Bagian Dollar
const usd = document.getElementById("usd");
//Bagian Dunia
const idr = document.getElementById("idr");
const sgd = document.getElementById("usd");

usd.addEventListener("input", function (ev) {
  const value = ev.currentTarget.value;
  const valueIDR = value * factor_indonesia;
  idr.value = valueIDR;
});
usd.addEventListener("input", function (ev) {
  const value = ev.currentTarget.value;
  const valueIDR = value * factor_singapura;
  idr.value = valueIDR;
});

idr.addEventListener("input", function (ev) {
  const value = ev.currentTarget.value;
  const valueUSD = value / factor_indonesia;
  usd.value = valueUSD;
});
sgd.addEventListener("input", function (ev) {
  const value = ev.currentTarget.value;
  const valueUSD = value / factor_singapura;
  usd.value = valueUSD;
});
