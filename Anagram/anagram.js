"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function anagramStr(str1, str2) {
    var sortedStr1 = str1.split("").sort().join("");
    var sortedStr2 = str2.split("").sort().join("");
    if (sortedStr1.length === sortedStr2.length) {
        return true;
    }
    else {
        return false;
    }
}
console.log(anagramStr("anagram", "nagaram"));
