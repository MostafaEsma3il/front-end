let task = document.getElementById("task");

function done() {
    task.style.textDecoration = "line-through";
}

task.addEventListener("click", done);