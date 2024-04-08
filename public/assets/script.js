const inputItem = document.querySelector("#item");
const lisItem = document.querySelector("#list");
inputItem.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addToList(this.value);
    this.value = "";
  }
});
const addToList = (inputItem) => {
  const todoItem = document.createElement("li");
  todoItem.innerHTML = `
   ${inputItem}
   <i class="fa fa-times"></i>
   `;
  todoItem.addEventListener("click", function () {
    this.classList.toggle("done");
  });

  todoItem.querySelector("i").addEventListener("click", function () {
    todoItem.remove();
  });
  lisItem.appendChild(todoItem);
};
