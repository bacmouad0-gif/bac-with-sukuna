let xp = Number(localStorage.getItem("xp") || 0);
let badge = document.querySelector(".xp-badge");

if (badge) badge.innerText = xp + " XP";

let tasks = JSON.parse(localStorage.getItem("tasks") || "{}");

function addXP(v){
    xp += v;
    localStorage.setItem("xp", xp);
    if (badge) badge.innerText = xp + " XP";
}

function update(){
    document.querySelectorAll(".task-item").forEach(t=>{
        let key = t.dataset.task;
        let icon = t.querySelector(".task-checkbox");

        if(tasks[key]){
            t.classList.add("done");
            icon.classList.remove("fa-circle");
            icon.classList.add("fa-circle-check");
        }else{
            t.classList.remove("done");
            icon.classList.add("fa-circle");
            icon.classList.remove("fa-circle-check");
        }
    });
}

document.querySelectorAll(".task-item").forEach(t=>{
    t.addEventListener("click", ()=>{
        let key = t.dataset.task;

        if(!tasks[key]){
            tasks[key]=true;
            addXP(10);
        }else{
            tasks[key]=false;
        }

        localStorage.setItem("tasks", JSON.stringify(tasks));
        update();
    });
});

update();