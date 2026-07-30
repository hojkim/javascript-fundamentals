// counter for vowels in a string
const getVowelCount = (sentence) => {
   const vowels = "aeiou";
   let count = 0;

   for (const char of sentence.toLowerCase()) {
      if (vowels.includes(char)) {
         count++;
      }
   }
   return count;
};

const numVowels = getVowelCount("Test sentence 1");
console.log(`Vowel Count: ${numVowels}`);

// counter for consonants in a string
const getConsonantCount = (sentence) => {
   const consonants = "bcdfghjklmnpqrstvwxyz";
   let count = 0;

   for (const char of sentence.toLowerCase()) {
      if (consonants.includes(char)) {
         count++;
      }
   }
   return count;
};

const numConsonants = getConsonantCount("Test sentENCe 2");
console.log(`Consonant Count: ${numConsonants}`);

// counter for punctuations in a string
const getPunctuationCount = (sentence) => {
   const punctuations = `.,!?;:-()[]{}"'-`;
   let count = 0;

   for (const char of sentence) {
      if (punctuations.includes(char)) {
         count++;
      }
   }
   return count;
};

const numPunctuations = getPunctuationCount("Hello!?!? Are you there????");
console.log(`Punctuation Count: ${numPunctuations}`);

// counter for words in a string
const getWordCount = (sentence) => {
   // edge case for empty string
   if (sentence.trim() === "") {
      return 0;
   }

   // trims outer spaces and splits sentence into an array of strings
   const words = sentence.trim().split(" ");
   let count = 0;
   // helps visualize the array
   console.log(words);

   for (const word of words) {
      // if there are multiple spaces in a row, a "" will be added to the array as the split is done by every " "
      if (word !== "") {
         count++;
      }
   }

   return count;
};

const numWords = getWordCount("   Test sentence  number 3   ABaNG ");
console.log(`Word Count: ${numWords}`);
