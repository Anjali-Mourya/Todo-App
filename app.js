
let list = document.querySelector(".list-group");
let msg = document.querySelector("#para");

let myInput = document.querySelector(".container input[type='text']");
const para = document.querySelector("#msg");


myInput.addEventListener("keydown",(e)=>{
  const storage = e.target.value;
  para.innerHTML = storage;
});

const myFunction = ()=>{
  const newTodoItem = myInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `<ul class="list-group">
  <li class="list-group-item">${newTodoItem}<button class="btn btn-info remove">Remove</button> <button class="btn btn-info done">Add</button></li>
  </ul> `
  newLi.innerHTML = newLiInnerHtml;
  list.append(newLi);
  myInput.value = "";
  newLi.style.listStyleType = "none";
  newLi.classList.add("btn_gap");
}



myInput.addEventListener("keypress",(e)=>{
  if(e.keyCode == 13){
    myFunction();
  }
});



list.addEventListener("click",(e)=>{
  if(e.target.classList.contains("remove")){
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
  };
  if(e.target.classList.contains("done")){
    const liSpan = e.target.parentNode.parentNode;
    liSpan.style.textDecoration = "line-through";
};
})