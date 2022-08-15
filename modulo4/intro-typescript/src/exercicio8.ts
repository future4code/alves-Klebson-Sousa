const reverseString = (palavra: string) => {
    const variable = palavra.split("")
    const variableInverted = variable.reverse()
    return variableInverted.join("")
}
console.log(reverseString("palavra"))