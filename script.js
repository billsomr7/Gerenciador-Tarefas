const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

button.addEventListener("click", addTask);
input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

function addTask() {
    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    li.addEventListener("dblclick", () => {
        li.remove();
    });

    taskList.appendChild(li);
    input.value = "";
}