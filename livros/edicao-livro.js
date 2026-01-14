const params = new URLSearchParams(window.location.search);
const id = params.get('id');

if (!id) {
    alert('ID do livro não informado');
    window.location.href = 'livros.html';
}

async function carregarLivro() {
<<<<<<< HEAD
    try {
        const response = await fetch(`http://localhost:3000/livros/${id}`);

        if (!response.ok) {
            throw new Error('Erro ao carregar livro');
        }

        const livro = await response.json();

        document.getElementById('id').value = livro.id;
        document.getElementById('titulo').value = livro.titulo;
        document.getElementById('autor').value = livro.autor;
        document.getElementById('categoria').value = livro.categoria;
        document.getElementById('editora').value = livro.editora;
        document.getElementById('ano').value = livro.ano;

    } catch (error) {
        alert(error.message);
        window.location.href = 'livros.html';
    }
=======
    const response = await fetch(`http://localhost:3000/livros/${id}`);
    const livro = await response.json();

    document.getElementById('id').value = livro.id;
    document.getElementById('titulo').value = livro.titulo;
    document.getElementById('autor').value = livro.autor;
    document.getElementById('categoria').value = livro.categoria;
    document.getElementById('editora').value = livro.editora;
    document.getElementById('ano').value = livro.ano;
>>>>>>> d123596d9d12d3046635a3d64dc7fad4f2b177fe
}

async function atualizarLivro(event) {
    event.preventDefault();

    const livroAtualizado = {
<<<<<<< HEAD
        titulo: document.getElementById('titulo').value,
        autor: document.getElementById('autor').value,
        categoria: document.getElementById('categoria').value,
        editora: document.getElementById('editora').value,
        ano: Number(document.getElementById('ano').value)
    };

    if (!livroAtualizado.titulo || !livroAtualizado.autor) {
        alert('Título e Autor são obrigatórios');
        return;
    }

    try {
        const response = await fetch(`http://localhost:3000/livros/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(livroAtualizado)
        });

        if (!response.ok) {
            throw new Error('Erro ao atualizar livro');
        }

        window.location.href = 'livros.html';

    } catch (error) {
        alert(error.message);
    }
=======
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
>>>>>>> d123596d9d12d3046635a3d64dc7fad4f2b177fe
}

document.addEventListener('DOMContentLoaded', carregarLivro);
