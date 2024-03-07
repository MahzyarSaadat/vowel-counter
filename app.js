const inputElement = document.getElementById("text");
const resultElement = document.querySelector(".result-vowel");
const resultBtn = document.getElementById("result-btn");

const countVowel = () => {
  const inputVal = inputElement.value;
  let valueList;
  let count = 0;
  let vowelList = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"];

  if (inputVal === "") {
    alert("please enter a value ...");
    return;
  }

  if (inputVal.trim() !== "") {
    valueList = inputVal.split(" ");
  }

  valueList.forEach((word) => {
    vowelList.forEach((vowel) => {
      for (let i = 0; i < word.length; i++) {
        const element = word[i];
        if (element === vowel) {
          count += 1;
        }
      }
    });
  });

  addResult(inputVal, count);
  count = 0;
};

resultBtn.addEventListener("click", (e) => {
  countVowel();
});

const addResult = (str, number) => {
  resultElement.style.display = "block";
  let finalStrin = str.substring(0, 10);
  let result = `${finalStrin}... have : ${number} ${
    number > 1 ? "vowels" : "vowel"
  }`;
  resultElement.textContent = result;
};

console.log(resultElement);
