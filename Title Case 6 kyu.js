function titleCase(title, minorWords) {
  if (title == "") {
    return "";
  }
  mw = minorWords != null ? minorWords.toLowerCase().split(" ") : [];
  wordList = title.toLowerCase().split(" ");
  for (let i = 0; i < wordList.length; i++) {
    if (!mw.includes(wordList[i])) {
      wordList[i] = capitalize(wordList[i]);
    }
  }
  return capitalize(wordList.join(" "));
}
const capitalize = (word) => {
  return word.charAt(0).toUpperCase() + word.slice(1);
};

console.log(titleCase("a clash of KINGS", "a an the of"));
//console.log(capitalize("hempa"));
console.log(titleCase("THE WIND IN THE WILLOWS", "The In"));
console.log(titleCase("the quick brown fox"));
