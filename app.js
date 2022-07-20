let numFollowers1 = document.getElementById("numFollowers1");
let numFollowers2 = document.getElementById("numFollowers2");
let numFollowers3 = document.getElementById("numFollowers3");

for (let i = 0; i < 12001; i++) {
  setTimeout(() => {
    numFollowers1.innerHTML = i;
  }, 0.083 * i);
}

for (let i = 0; i < 5001; i++) {
  setTimeout(() => {
    numFollowers2.innerHTML = i;
  }, 0.2 * i);
}

for (let i = 0; i < 7501; i++) {
  setTimeout(() => {
    numFollowers3.innerHTML = i;
  }, 0.125 * i);
}
