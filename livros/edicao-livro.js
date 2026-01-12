const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (!id) {
    alert('ID do livro não informado');
    window.location.href = 'livros.html';
}

async function carregarLivro() {
    const response = await fetch(`http://localhost:3000/livros/${id}`);
    const livro = await response.json();

    document.getElementById('id').value = livro.id;
    document.getElementById('titulo').value = livro.titulo;
    document.getElementById('autor').value = livro.autor;
    document.getElementById('categoria').value = livro.categoria;
    document.getElementById('editora').value = livro.editora;
    document.getElementById('ano').value = livro.ano;
}

async function atualizarLivro(event) {
    event.preventDefault();

    const livroAtualizado = {
        titulo: titulo.value,
        autor: autor.value,
        categoria: categoria.value,
        editora: editora.value,
        ano: ano.value
    };

    await fetch(`http://localhost:3000/livros/${id}`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(livroAtualizado)
    });

    window.location.replace('livros.html');
}

document.addEventListener('DOMContentLoaded', carregarLivro);
