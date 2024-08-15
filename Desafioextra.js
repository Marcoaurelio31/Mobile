function encontrarMenorNumero(numeros) {
    if (numeros.length === 0) {
        throw new Error("O array está vazio");
    }
    
    let menorNumero = numeros[0];
    
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menorNumero) {
            menorNumero = numeros[i];
        }
    }
    
    return menorNumero;
}

const numeros = [12, 2, 9, 20, 3];
console.log("O menor número é:", encontrarMenorNumero(numeros));
