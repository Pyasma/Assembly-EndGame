export function getFarewellMessage(language) {
  const options = [
    `Farewell, ${language}. It's been a ride! 👋`,
    `Adios, ${language}! May your code compile on the first try. 👋`,
    `RIP, ${language}. You're now a legend in your own mind. 👻`,
    `So long, ${language}! Don't let the door hit you on the way out. 🤠`,
    `Hasta la vista, baby ${language}! Keep those bugs guessing. 😎`,
    `Game Over for ${language}. Insert coin to continue... oh wait, you're gone. 🎮`,
    `Bye Felicia! Or, you know, bye ${language}! 👋😂`,
    `Don't cry because it's over, ${language}, smile because it happened. See ya in the next sprint! 😊`,
    `May your commits be many and your merge conflicts few. Farewell, ${language}! ✨`,
    `Poof! And just like that, ${language} vanished into thin air. Or maybe just to lunch. 💨`,
  ];
  const randomIndex = Math.floor(Math.random() * options.length);
  return options[randomIndex];
}
