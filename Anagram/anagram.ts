function anagramStr(str1: string, str2: string): boolean {
  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  if (sortedStr1.length === sortedStr2.length) {
    return true;
  } else {
    return false;
  }
}

console.log(anagramStr("anagram", "nagaram"));

export {}

