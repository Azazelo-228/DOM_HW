let items = document.querySelectorAll(".item");
let btns = document.querySelectorAll(".btn");
let btns1 = document.querySelectorAll(".btn1");
let bg = document.querySelector("body");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function () {
//     // let col = this.dataset.col;
//     // items.forEach(function (item) {
//     //   item.style.backgroundColor = col;
//     // });
//   });
// });

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    items.forEach((item) => {
      item.style.background = e.target.dataset.col;
    });
  });
});

btns1.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    bg.style.background = e.target.dataset.col; // e.target.getAttribute("data-col")
  });
});
