const form = document.getElementById('form');
const input = document.getElementById('input');
const todo=document.getElementById('todo');

form.addEventListener('submit',(e) => {
    e.preventDefault();
    const todotext = input.value;
    if(todotext)
    {
        const todoEl=document.createElement("li");
        todoEl.innerText = todotext;

        todoEl.addEventListener('click',() =>
        {
            todoEl.classList.toggle('completed');
        });
        todoEl.addEventListener('contextmenu',(e) =>
        {
            e.preventDefault();
            todoEl.remove();
        });
        todo.appendChild(todoEl);
        input.value = "";
    }
});
