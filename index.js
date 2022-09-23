const btn = document.querySelector("button");
const lists = document.querySelector(".nav");
const btn2 = document.querySelector(".btn2");
const input = document.querySelector(".form-control");
const p = document.querySelector("#poCo");

btn.addEventListener("click", (e) => {
  if (e) {
    lists.style.display = "flex";
    btn2.style.display = "block";
    btn2.style.background = "blue";
    btn2.style.borderRadius = "10px";
    btn2.style.width = "170px";
    btn2.style.height = "50px";
    btn.style.display = "none";
    input.style.width = "50em";
    lists.style.width = "62.5em";
  }
});
btn2.addEventListener("click", (e) => {
  lists.style.display = "none";
  btn2.style.display = "none";
  btn.style.display = "block";
  input.style.width = "50em";
  p.style.display = "none";
});

const list = document.querySelectorAll(".nav-item");

list.forEach((el) => {
  el.addEventListener("click", (event) => {
    document.getElementById(
      "poCo"
    ).innerHTML = `You selected ${event.target.innerHTML}`;
  });
});
