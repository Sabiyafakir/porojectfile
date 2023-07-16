
const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const resetValue= document.getElementById("resetValue");
const zero = document.getElementById("zero");


decrement.addEventListener("click", () => {
  const value = Number(zero.innerText);
  if (value > 0) {
    zero.innerText = value - 1;
  } else {
    alert("Negative value not allowed");
  }
});


increment.addEventListener("click", () => {
  const value = Number(zero.innerText);
  if (value >= 10) {
    alert("10+ values are not allowed");
  } else {
    zero.innerText = value + 1;
  }
});

  const value = Number(zero.innerText);
  resetValue.addEventListener("click", () => {
  zero.innerText = 0;
});


