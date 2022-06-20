//getting all required elements
const inputBox = document.querySelector(".InputField input");
const addBtn = document.querySelector(".InputField button");
const todoList = document.querySelector(".TodoList");
const deleteAllBtn = document.querySelector(".footer button");

inputBox.onkeyup = ()=> {
    let userData = inputBox.value; //getting user entered value
    if (userData.trim() !=0){ //if user values aren't only spaces
        addBtn.classList.add("active"); //active the add button
    }else{
        addBtn.classList.remove("active"); //unactive the add button 
    }
}
showTask();

//if user click  on the add button
addBtn.onclick = ()=> {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("New To-do"); //getting localstorage
    if(getLocalStorage == null){ //if localStorage is null
        listArr = []; //creating blank array
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    listArr.push(userData);
    localStorage.setItem("New To-do", JSON.stringify(listArr)); //transforming js object into a json string
    showTask();
    addBtn.classList.remove("active");
}


function showTask() {
    let getLocalStorage = localStorage.getItem("New To-do"); //getting localstorage
    if(getLocalStorage == null){ //if localStorage is null
        listArr = []; //creating blank array
    } else {
        listArr = JSON.parse(getLocalStorage);
    }
    const pendingNum = document.querySelector(".pendingNum");
    pendingNum.textContent = listArr.length;
    if (listArr.length > 0) {
        deleteAllBtn.classList.add("active")
    }else {
        deleteAllBtn.classList.remove("active");
    }
    let newLiTag = '';
    listArr.forEach((element, index) => {
        newLiTag += `<li> ${element} <span onclick = deleteTask(${index}); ><i class="fas fa-trash"></i></span></li>`;
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = "";
}

function deleteTask(index){
    let getLocalStorage = localStorage.getItem("New To-do");
    listArr = JSON.parse(getLocalStorage);
    listArr.splice(index, 1);
    localStorage.setItem("New To-do", JSON.stringify(listArr)); //transforming js object into a json string
    showTask();

}
deleteAllBtn.onclick =()=> {
    listArr = [];
    localStorage.setItem("New To-do", JSON.stringify(listArr));
    showTask();
}

