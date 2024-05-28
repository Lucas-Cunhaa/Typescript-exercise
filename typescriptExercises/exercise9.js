function ChekUserName(name) {
    let firstLetter = name[0]

    if (name.length < 4 || name.length > 26) {
        return false;
    }
    if ("0123456789".includes(firstLetter)) {
        return false;
    }
    if (name.includes("@") || name.includes("-")) {
        return false;
    }
    return true;
}
console.log(ChekUserName("@luacass"));
