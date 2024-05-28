function ComparsionEnd(stringA, stringB) {
    if (stringA.slice(-3) === stringB.slice(-3)) {
        return stringA.slice(-3);
    }
}

console.log(ComparsionEnd("Manga", "nga"))
