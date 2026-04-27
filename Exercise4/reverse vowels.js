function reverseVowels(str) {
  const vowels = "aeiouAEIOU";

  let foundVowels = [];
  for (let ch of str) {
    if (vowels.includes(ch)) {
      foundVowels.push(ch);
    }
  }
  foundVowels.reverse();

  let result = "";
  let index = 0;

  for (let ch of str) {
    if (vowels.includes(ch)) {
      result += foundVowels[index];
      index++;
    } else {
      result += ch;
    }
  }

  return result;
}