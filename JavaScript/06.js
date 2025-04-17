for (let contador = 30; contador >= 1; contador--) {
    if (contador % 4 == 0) {
        console.log(`Número: "${[contador]}"`);
    } else {
        console.log("Número", contador);
    }
}
console.log("FIM");