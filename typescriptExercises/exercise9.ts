function ChekUserName(name: string): boolean {
  let firstLetter: string = name[0]


  if (name.length < 4 || name.length > 26) {
        return false;
    } 

  if ("0123456789".includes(firstLetter)) {
        return false;
  }
  
  if ( firstLetter.includes("@" || "-")) {
        return false
  }

  return true
}

console.log(ChekUserName("Luacass"))