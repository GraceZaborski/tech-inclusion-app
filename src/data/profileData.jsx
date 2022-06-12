export const ADJECTIVES = [
  "Happy",
  "Curious",
  "Clever",
  "Pretty",
  "Jolly",
  "Fancy",
  "Magic",
  "Brave",
  "Cool",
  "Speedy",
  "Intelligent",
  "Savvy",
  "Bubbly",
];

export const ANIMALS = [
  "cat",
  "dog",
  "mouse",
  "hamster",
  "penguin",
  "bear",
  "fox",
  "frog",
  "monkey",
  "horse",
  "lion",
];

export const HOBBIES = [
  "reading",
  "videogames",
  "knitting",
  "dancing",
  "horse riding",
  "coding",
  "movies",
  "painting",
  "cooking",
  "exploring",
];

export const CONFIDENCE_LEVELS = [
  {
    emoji: "sweat_smile",
    level: 0,
    tooltip: "I'd appreciate help!",
  },
  { emoji: "smiley", level: 50, tooltip: "I might need a hint!" },
  { emoji: "grin", level: 100, tooltip: "I'm confident at this!" },
];

export const DEFAULT_USER = {
  username: "Happy Cat",
  emoji: "cat",
  hobbiesList: ["reading", "dancing", "videogames"],
  role: "tech newbie",
  confidence: 50,
};

export const DEFAULT_MATCH = {
  username: "Savvy Mouse",
  emoji: "mouse",
  hobbiesList: ["reading", "knitting", "movies"],
  role: "tech champion",
  confidence: 100,
};
