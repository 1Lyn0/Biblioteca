<<<<<<< HEAD
// ================== CADASTRAR ALUNO ==================
async function cadastrarAluno(event) {
    event.preventDefault();

    const aluno = {
        nome: document.getElementById('nome').value,
        cpf: document.getElementById('cpf').value,
        email: document.getElementById('email').value,
        tel: document.getElementById('tel').value,
        datacadastro: document.getElementById('datacadastro').value
    };

    await fetch('http://localhost:3000/alunos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(aluno)
    });

    window.location.href = 'alunos.html';
}

// ================== LISTAR ALUNOS ==================
async function listarAlunos() {
    const response = await fetch('http://localhost:3000/alunos');
    const alunos = await response.json();

    const tabela = document.getElementById('tabelaResultado');
    tabela.innerHTML = '';

    alunos.forEach(aluno => {
        tabela.insertAdjacentHTML('beforeend', `
=======
function cadastrarAluno(event) {
    // removo o comportamento do submit de atualizar a tela;
    event.preventDefault();

    // Busco o que foi digitado no input nome atraves do seu ID e do atributo value;
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const dataCadastro = document.getElementById('datacadastro').value;
    const endereco = document.getElementById('endereco').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;


    console.log([nome, cpf, dataCadastro, endereco, email, tel])
}

async function listarAlunos() {
    // promisse 1 (requisicao foi ok ou nao)
    const response = await fetch('http://localhost:3000/alunos');
    // promisse 2 (o resultado da requisicao)
    const alunos = await response.json(); 

    const tabelaResultado = document.getElementById('tabelaResultado');

    alunos.forEach(function (aluno) {
        tabelaResultado.insertAdjacentHTML('beforeend',
            `
>>>>>>> d123596d9d12d3046635a3d64dc7fad4f2b177fe
            <tr>
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.cpf}</td>
                <td>${aluno.email}</td>
                <td>${aluno.tel}</td>
                <td>${aluno.datacadastro}</td>
<<<<<<< HEAD
                <td class="text-center">
                    <!-- VER -->
                    <button class="btn btn-sm btn-info text-white me-1"
                        onclick="verAluno(${aluno.id})">
                        <i class="bi bi-eye-fill"></i>
                    </button>

                    <!-- EDITAR -->
                    <button class="btn btn-sm btn-warning text-white me-1"
                        onclick="editarAluno(${aluno.id})">
                        <i class="bi bi-pencil-fill"></i>
                    </button>

                    <!-- EXCLUIR -->
                    <button class="btn btn-sm btn-danger"
                        onclick="excluirAluno(${aluno.id})">
=======
                <td>
                    <button class="btn btn-sm btn-info text-white me-1">
                        <i class="bi bi-eye-fill"></i>
                    </button>
                    <button class="btn btn-sm btn-warning text-white me-1">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn btn-sm btn-danger">
>>>>>>> d123596d9d12d3046635a3d64dc7fad4f2b177fe
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </td>
            </tr>
<<<<<<< HEAD
        `);
    });
}

// ================== VER ==================
function verAluno(id) {
    window.location.href = `ver-aluno.html?id=${id}`;
}

// ================== EDITAR ==================
function editarAluno(id) {
    window.location.href = `editar-aluno.html?id=${id}`;
}

// ================== EXCLUIR ==================
async function excluirAluno(id) {
    const confirmar = confirm('Deseja realmente excluir este aluno?');
    if (!confirmar) return;

    await fetch(`http://localhost:3000/alunos/${id}`, {
        method: 'DELETE'
    });

    listarAlunos();
}

// ================== AUTO ==================
if (document.getElementById('tabelaResultado')) {
    listarAlunos();
}
=======
            `
        )
    })
}

listarAlunos();













// Maria


// function maiorIdade(idade) {
//     if (idade >= 18) {
//         console.log('é maior de idade')
//     } else {
//         console.log('é menor de idade')
//     }
// }


// maiorIdade(20) // é maior de idade
// maiorIdade(16) // é menor de idade
// maiorIdade(50)


>>>>>>> d123596d9d12d3046635a3d64dc7fad4f2b177fe
