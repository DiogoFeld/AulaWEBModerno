const imprimirResult = function (nota) {
    switch (Math.floor(nota)) {
        case 10:case 9:
            console.log('Quadros de Honra');
            break;
        case 8:case 7:
            console.log('aprovados');
            break;
        case 6:case 5:case 4:
            console.log('reprovados');
            break;
        case 3:case 2:case 1:case 0:
            console.log('Reprovados');
            break;
    }
}

imprimirResult(9.6);
imprimirResult(8.6);
imprimirResult(6.4);
imprimirResult(3.6);
imprimirResult(-1);