async function listarLivros() {
    const response = await fetch('http://localhost:3000/livros');
    const livros = await response.json();

    const tabela = document.getElementById('tabelaLivros');
    tabela.innerHTML = '';

    livros.forEach(livro => {
        tabela.insertAdjacentHTML('beforeend', `
            <tr>
                <td>${livro.id}</td>
                <td>${livro.titulo}</td>
                <td>${livro.autor}</td>
                <td>${livro.categoria}</td>
                <td>${livro.editora}</td>
                <td>${livro.ano}</td>
                <td class="text-center">
                    <button class="btn btn-sm btn-warning me-1"
                        onclick="editarLivro(${livro.id})">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn btn-sm btn-danger"
                        onclick="excluirLivro(${livro.id})">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </td>
            </tr>
        `);
    });
}

function editarLivro(id) {
    window.location.href = `edicao-livro.html?id=${id}`;
}

async function excluirLivro(id) {
    if (!confirm('Deseja realmente excluir este livro?')) return;

    await fetch(`http://localhost:3000/livros/${id}`, {
        method: 'DELETE'
    });

    listarLivros();
}

listarLivros();
