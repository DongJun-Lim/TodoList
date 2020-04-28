"use strict";
let todoListArray = [];
const input = document.querySelector(".todo-input");
const form = document.querySelector(".form-input");
const ul = document.querySelector(".list-section");
form.addEventListener('submit', e => {
    e.preventDefault();
    let itemId = String(Date.now());
    let todoItem = input.value;
    addListToArray(itemId,todoItem);
    addListToDOM(itemId,todoItem);
    console.log(todoListArray);
    input.value="";
});

function addListToArray(itemId, todoItem){
    todoListArray.push({itemId, todoItem});
};

function addListToDOM(itemId, todoItem){
    let li = document.createElement('li');
    li.setAttribute('data-id',itemId);
    li.innerHTML=todoItem;
    ul.appendChild(li);
};