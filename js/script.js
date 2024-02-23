"use strict";
// SELECTIONS...
const taskContainer = document.querySelector(".task-container");
const task = document.querySelector(".task");
const inp = document.querySelector(".task-adder-inp");
const addBtn = document.querySelector(".add-task-btn");
// EVENT HANDLERS...
taskContainer.addEventListener("click", function (e) {
  const clicked = e.target;
  if (clicked.closest(".task"));
  const task = clicked.closest(".task");
  task.classList.toggle("checked");
  const checkBtn = task.querySelector(".check-icon");
  checkBtn.src === `http://127.0.0.1:5500/svg/empty-circle.svg`
    ? (checkBtn.src = `svg/tick-icon.svg`)
    : (checkBtn.src = `svg/empty-circle.svg`);
  if (clicked.classList.contains("x-icon")) task.remove();
});

addBtn.addEventListener("click", function () {
  if (!inp.value) return;
  const taskHTML = `
    <div class="task p-2 text-start ms-5 d-flex align-items-center justify-content-between">
      <div class="task-content d-flex align-items-center">
        <img class="check-icon" src="svg/empty-circle.svg" alt="" />
          <p class="task-text ps-1">${inp.value}</p>
      </div>
      <i class="bi bi-x x-icon"></i>
    </div>
  `;
  taskContainer.insertAdjacentHTML("beforeend", taskHTML);
  inp.value = "";
});