function getTheBiggetsWord ( phrase : string ) {
    let all : string[] = phrase.split(' ') 
    let big : string = ""

    all.forEach( word => {
        if ( word > big ) {
            big = word
        }
    })

    return big

    

}

console.log(getTheBiggetsWord("I love Leticia Luna"))

