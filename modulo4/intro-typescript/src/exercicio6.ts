const calculo = (num1: number, num2: number): void => {
    if (num1 && num2){
        console.log(`a)`, num1 + num2, " b)", num1 - num2, " c)", num1 * num2, ` d)`, num1>num2? "O maior é o primeiro número": "O maior é o segundo número")
    }
}
calculo(20, 10)