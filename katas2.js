function sum(sumOne, sumTwo) {
    return sumOne + sumTwo
}

function multiply(multiplyOne, multiplyTwo) {
    let resultado = 0
    if (multiplyOne == 0) {
        return 0
    } else if (multiplyTwo == 0) {
        return 0
    }
    for (let i = 0; i < multiplyOne; i++) {
        resultado = sum(resultado, multiplyTwo)
    }
    return resultado
}


function power(powerOne, powerTwo) {
    let result = 1
    for (let i = 0; i < powerTwo; i++) {
        result = multiply(result, powerOne)
    }
    return result
}


function fatorial(fatUm) {
    let holder = 1

    for (let i = fatUm; i > 0; i--) {
        holder = multiply(holder, i)
    }
    return holder
}



