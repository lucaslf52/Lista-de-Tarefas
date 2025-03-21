
let botao = document.querySelector('button');
let lista = document.querySelector('.tarefas');

botao.addEventListener('click',()=>{
    let tarefa = document.querySelector('input');
    if(tarefa.value){
        adicionarTarefa(tarefa.value);
        tarefa.value="";
    }else{
        alert('Digite alguma tarefa!');
    }
});

function adicionarTarefa(tarefa){
    lista.innerHTML += `<li>${tarefa}</li>`
}