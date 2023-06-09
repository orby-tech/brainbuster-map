export function generateRandomPrettyName() {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const consonants = [
      'b',
      'c',
      'd',
      'f',
      'g',
      'h',
      'j',
      'k',
      'l',
      'm',
      'n',
      'p',
      'q',
      'r',
      's',
      't',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    const syllableCount = Math.floor(Math.random() * 2) + 2;
    let prettyName = '';
    for (let i = 0; i < syllableCount; i++) {
      const consonant = consonants[Math.floor(Math.random() * consonants.length)];
      const vowel = vowels[Math.floor(Math.random() * vowels.length)];
      prettyName += i === 0 ? consonant.toUpperCase() : consonant + vowel;
    }
    return prettyName;
  }