const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

function addTask() {
    const text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    const task = document.createElement("div");
    task.className = "task";

    task.innerHTML = `
        <span class="task-text"></span>
        <div class="actions">
            <button class="complete">Concluir</button>
            <button class="delete">Excluir</button>
        </div>
    `;

    task.querySelector(".task-text").textContent = text;

    task.querySelector(".complete").addEventListener("click", () => {
        task.classList.toggle("completed");

        const button = task.querySelector(".complete");
        button.textContent = task.classList.contains("completed")
            ? "Concluída"
            : "Concluir";
    });

    task.querySelector(".delete").addEventListener("click", () => {
        task.remove();
    });

    taskList.appendChild(task);

    taskInput.value = "";
    taskInput.focus();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});
