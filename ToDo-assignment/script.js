let toggleBtnArr = document.querySelectorAll(".toggle-btn");
let listContainer = document.querySelector(".list");
let plusBtn = document.querySelector(".plus-btn");

let tasksArr = [
  {
    id: 0,
    content: "Eat Food",
    status: "pending",
  },
  {
    id: 1,
    content: "Listen music",
    status: "completed",
  },
  {
    id: 2,
    content: "Make Notes",
    status: "pending",
  },
  {
    id: 3,
    content: "Do class",
    status: "completed",
  },
];

// Complete the code to load the list of given category with proper icon. 
// The code iterates over tasksArr to generate UI for tasks of required category/status.
// tasksArr contains objects with props of id, status (pending or completed) and content. 
// Here icon is determined by google-material icons. We add the name of icon and google-material api helps us generate that icon.
// Each task is a div that is contained inside a listContainer, declared on line-2 
let loadList = (category) => {
  listContainer.innerHTML = "";
  let icon =
    category === "completed"
      ? "assignment_turned_in"
      : "check_box_outline_blank";

  for (let i = 0; i < tasksArr.length; i++) {
    let task = tasksArr[i];
    if (task.status == category) {
      let taskDiv = document.createElement("div");
      taskDiv.innerHTML = `
             <div class="task" id=${task.id}>
               <span class="material-icons done-btn"> ${icon} </span>
               <div class="task-content" contenteditable="true">${task.content}</div>
               <span class="material-icons delete-btn"> dangerous </span>
             </div>`;

      listContainer.appendChild(taskDiv);
    }
  }


};

loadList("pending");


// Adding toggle between pending and completed tasks based on btn click.
// NOTE: 'inactive-btn' class takes care of the styles that is applied on the inactive-btn.
//        We call loadlist(category) function with the category of the list we want to currently load. 
//        category is determined by the class of the button: can either be 'pending' or 'completed'
for (let i = 0; i < toggleBtnArr.length; i++) {
  toggleBtnArr[i].addEventListener("click", (e) => {
    e.target.classList.remove("inactive-btn");
    toggleBtnArr[(i + 1) % toggleBtnArr.length].classList.add("inactive-btn");

    let category = e.target.classList[0];
    loadList(category);
  });
}

plusBtn.addEventListener("click", (e) => {
  // Add code to create
});
