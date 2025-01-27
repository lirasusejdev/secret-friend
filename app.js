// Array para armazenar os amigos
let listaAmigos = [];

// Função para adicionar um amigo
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    let inputNome = document.getElementById("amigo");
    let nome = inputNome.value.trim(); // Remover espaços em branco extras

    // Validação: Verificar se o campo não está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Verificar se o nome já foi adicionado
    if (listaAmigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }

    // Adicionar o nome ao array de amigos
    listaAmigos.push(nome);

    // Atualizar a exibição da lista na tela
    atualizarLista();

    // Limpa o campo de entrada
    inputNome.value = "";
}

// Função para atualizar a exibição da lista na página
function atualizarLista() {
    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = ""; // Limpa a lista antes de atualizar

    // Percorre o array e cria itens na lista
    listaAmigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;

        // Botão para remover nome da lista
        let btnRemover = document.createElement("button");
        btnRemover.textContent = "X";
        btnRemover.classList.add("remove-button");
        btnRemover.onclick = function () {
            removerAmigo(index);
        };

        li.appendChild(btnRemover);
        listaElement.appendChild(li);
    });
}

// Função para remover um amigo da lista
function removerAmigo(index) {
    listaAmigos.splice(index, 1); // Remove o amigo pelo índice
    atualizarLista(); // Atualiza a lista na tela
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Adicione pelo menos dois amigos para o sorteio.");
        return;
    }

    let sorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];

    // Exibir resultado na tela
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = `<li>🎉 Amigo Secreto: <strong>${sorteado}</strong> 🎁</li>`;
}
