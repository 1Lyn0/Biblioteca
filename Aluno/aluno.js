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
            <tr>
                <td>${aluno.id}</td>
                <td>${aluno.nome}</td>
                <td>${aluno.cpf}</td>
                <td>${aluno.email}</td>
                <td>${aluno.tel}</td>
                <td>${aluno.datacadastro}</td>
                <td>
                    <button class="btn btn-sm btn-info text-white me-1">
                        <i class="bi bi-eye-fill"></i>
                    </button>
                    <button class="btn btn-sm btn-warning text-white me-1">
                        <i class="bi bi-pencil-fill"></i>
                    </button>
                    <button class="btn btn-sm btn-danger">
                        <i class="bi bi-trash-fill"></i>
                    </button>
                </td>
            </tr>
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


