function checkUpperOrLowerCase(phrase) {
    var letter = phrase.split('');
    var upperCase = 0;
    var lowerCase = 0;
    var newPhrase = "";
    for (var _i = 0, letter_1 = letter; _i < letter_1.length; _i++) {
        l = letter_1[_i];
        if (l === l.toUpperCase()) {
            upperCase +=1;
        }
        else {
            lowerCase +=1;
        }
    }
    if (upperCase > lowerCase) {
        newPhrase = phrase.toLocaleUpperCase();
    }
    else {
        newPhrase = phrase.toLocaleLowerCase();
    }
    return newPhrase;
}
console.log(checkUpperOrLowerCase("LuCas"));
