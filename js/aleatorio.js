const nomes = ["Astraea", "NEXUS-9", "Horizonte Final", "Aethelgard", "Vanguard"];

function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

const nomeDaNave = aleatorio(nomes);
