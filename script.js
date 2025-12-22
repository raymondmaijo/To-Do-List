const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("task-list");

function addTask() {
  const text = input.value.trim();
  if (!text) return;

  const li = document.createElement("li");
  li.className = "task-item";

  const span = document.createElement("span");
  span.textContent = text;

  const del = document.createElement("button");
  del.textContent = "✕";
  del.className = "delete-btn";

  // toggle done
  span.addEventListener("click", () => {
    li.classList.toggle("done");
  });

  // delete task
  del.addEventListener("click", () => {
    list.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(del);
  list.appendChild(li);

  input.value = "";
  input.focus();
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});
