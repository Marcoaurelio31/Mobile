function encontrarMaiorNumero(numeros) {
    if (numeros.length === 0) {
        throw new Error("O array está vazio");
    }
    
    let maiorNumero = numeros[0];
    
    
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > maiorNumero) {
            maiorNumero = numeros[i];
        }
    }
    
    return maiorNumero;
}

const numeros = [1, 5, 7, 22, 3];
console.log("O maior número é:", encontrarMaiorNumero(numeros));
