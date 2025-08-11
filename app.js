let amigos = [];

// adicionar nome
function adicionarAmigo() {
  let valor = document.getElementById("amigo").value.trim();

  if (valor === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(valor);
  limparCampo();
  atualizarLista();
}

// limpar campo
function limparCampo() {
  document.getElementById("amigo").value = "";
}

// atualizar lista
function atualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement("li");
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

// função sortear amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert(
      "Não há amigos para sortear. Por favor, adicione pelo menos um amigo."
    );
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  resultado(amigoSorteado);

  //limpa a lista

  amigos = [];
  atualizarLista();
}

// mostrar resultado
function resultado(nomeSorteado) {
  const resultadoElemento = document.getElementById("resultado");
  resultadoElemento.innerHTML = `O amigo sorteado é: <strong>${nomeSorteado}</strong>`;
}
