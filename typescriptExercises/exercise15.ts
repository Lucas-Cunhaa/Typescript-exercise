function checkUpperOrLowerCase (phrase : string) {
    let letter : string[] = phrase.split('')
    let upperCase : number = 0
    let lowerCase : number = 0
    let newPhrase : string = ""

    for( l of letter) {
        if( l === l.toUpperCase()) {
            upperCase += 1
            
        } else {
            lowerCase += 1
            
        }
    }

    if(upperCase > lowerCase) {
        newPhrase = phrase.toLocaleUpperCase()
    } else  {
        newPhrase = phrase.toLocaleLowerCase()
    }

    return newPhrase

}

console.log(checkUpperOrLowerCase("LUCas"))
