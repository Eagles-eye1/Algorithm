function analyzeSentence(sentence) {
    // Initialize counters
    let length_counter = 0;
    let word_counter = 0;
    let vowel_counter = 0;
    let in_word = false;

    // Define a set of vowels for easy checking
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);

    // Loop through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        let ch = sentence[i];

        // Increment the length counter
        length_counter++;

        // Check if the character is a vowel
        if (vowels.has(ch)) {
            vowel_counter++;
        }

        // Check for word boundaries
        if (ch !== ' ' && !in_word) {
            word_counter++;
            in_word = true;
        } else if (ch === ' ') {
            in_word = false;
        }

        // Stop the loop if a period is encountered
        if (ch === '.') {
            break;
        }
    }

    // Output the results
    console.log("Length of the sentence: " + length_counter);
    console.log("Number of words: " + word_counter);
    console.log("Number of vowels: " + vowel_counter);
}

// Example usage
const sentence = "Hello world.";
analyzeSentence(sentence);
