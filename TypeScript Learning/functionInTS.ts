// const greet = (): string => {
//     return "hii";
// }
// console.log(greet());

const isPalindrome = (str: string): boolean => {
    let reverserStr = str.split(``).reverse().join(``);
    return reverserStr === str;
}

console.log(isPalindrome("my ym "));  // true