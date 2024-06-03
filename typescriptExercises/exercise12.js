function toParentheses(word) {
    let newWord = "";

    for (let index = 0; index < word.length; index++) {
    
        let repeated = false; 

        for (let j = 0; j < word.length ; j++) {
            if ( index != j && word[index] === word[j]) {
                repeated = true
                break;
            }
            
        }

        if ( !repeated) {
            newWord += ")";
        } else {
            newWord += "(";
        }
    }
    return newWord;
}
console.log(toParentheses("teste"));
