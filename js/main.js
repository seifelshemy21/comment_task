var task_Input = document.querySelector("#comment_Input");
var add_task = document.querySelector("#comment_add");
var output_task = document.querySelector("#output_comment");
var task_form = document.querySelector("form");

var tasks = []

task_form.onsubmit = function (event) {
    event.preventDefault();
}
add_task.onclick = function () {
    
    if(task_Input.value != "")
    {
        output_task.innerHTML += `<li class="task">${task_Input.value}</li>`;
        tasks.push(task_Input.value);
    }
    else
    {
        alert("Empty task")
    }


    task_Input.value = "";
    task_Input.focus();
}