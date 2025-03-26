
let adicionar = document.querySelector('.adicionar');
let lista = document.querySelector('.tarefas');

adicionar.addEventListener('click',()=>{
    let tarefa = document.querySelector('input');
    if(tarefa.value){
        adicionarTarefa(tarefa.value);
        tarefa.value="";
    }else{
        alert('Digite alguma tarefa!');
    }
});

document.addEventListener('click', (e)=>{
if(e.target.classList[0]=='apagar'){
    apagarTarefa(e.target.parentNode )
}
})

function adicionarTarefa(tarefa){
    lista.innerHTML += `<li>${tarefa} <button class="apagar">x</button></li>`;
}

function apagarTarefa(tarefa){
    tarefa.remove();

}