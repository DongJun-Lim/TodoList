"use strict";

let todoListArray = [];
const input = document.querySelector(".todo-input");
const form = document.querySelector(".form-input");
const ul = document.querySelector(".list-section");
const listCnt = document.querySelector(".item-count");
const todoList = document.querySelector(".todo-list");
const chooseOption = document.querySelector(".choose-option");
const clearBtn = document.querySelector(".clear.Btn");
let message = " items";

form.addEventListener('submit', e => {
    e.preventDefault();
    todoList.style.display="block";
    let itemId = String(Date.now());
    let todoItem = input.value;
    addListToArray(itemId,todoItem,true);
    addListToDOM(itemId,todoItem);
    input.value="";
});


ul.addEventListener('click',e=>{
    let itemId = e.target.getAttribute('data-id');
    e.target.classList.toggle('toggle');
    todoListArray.find(item=>{
        if(item.itemId===itemId){
            item.flag=!item.flag;
        }
    });
    console.log(todoListArray);
});


chooseOption.addEventListener('click', e=>{
    ul.classList.add(e.target.innerHTML);
    for(let i=0; i<chooseOption.children.length; i++){
        if(chooseOption.children[i]===e.target){
            chooseOption.children[i].classList.add("selected");
            ul.classList.add(e.target.innerHTML);
        }
        else{
            chooseOption.children[i].classList.remove("selected");
            ul.classList.remove(chooseOption.children[i].innerHTML);
        }
    }
    

});


clearBtn.addEventListener('click', e=>{
    todoListArray.forEach(todoItem =>{
        if(todoItem.flag===false){
            var li = document.querySelector('[data-id="'+todoItem.itemId+'"]');
            ul.removeChild(li);
        }
        
    });
    removeItemFromArray();
    listCnt.innerHTML = todoListArray.length+message;
});
function removeItemFromArray(){
    todoListArray=todoListArray.filter(Item=>Item.flag===true);
    console.log(todoListArray);
}

function addListToArray(itemId, todoItem, flag){
    todoListArray.push({itemId, todoItem, flag});
    console.log(todoListArray);
    
};

function addListToDOM(itemId, todoItem){
    let li = document.createElement('li');
    li.setAttribute('data-id',itemId);
    li.innerHTML=todoItem;
    ul.appendChild(li);
    listCnt.innerHTML = todoListArray.length+message;
};

