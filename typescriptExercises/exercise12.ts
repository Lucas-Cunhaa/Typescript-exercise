function toParentheses ( word : string) : string {
    let newWord : string = ""
   
    for (let index : number = 0; index < word.length; index++) {
    
        let repeated : boolean = false; 

        for (let j : number = 0; j < word.length ; j++) {
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

    return newWord
}

console.log(toParentheses("teste"))