function reverseString(str: string): string {
    let reversedStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

console.log(reverseString("hello"));
  
  function runTests() {
    const input = "hello"

    // Test with a non-empty string
    const test1 = reverseString(input);
    console.log(test1 === "olleh" ? "Test 1 Passed" : "Test 1 Failed");
  
    // Test with an empty string
    const test2 = reverseString(input);
    console.log(test2 === "" ? "Test 2 Failed" : "Test 2 Passed");
  
    // Test with a string containing spaces
    const test3 = reverseString(input);
    console.log(test3 === "olleh" ? "Test 3 Passed" : "Test 3 Failed");
  
    // Test with a palindrome
    const test4 = reverseString(input);
    console.log(test4 === "olleh" ? "Test 4 Passed" : "Test 4 Failed");
  
  }
  
  runTests();
  

export {}