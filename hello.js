const cowsay = require("cowsay");
const Quote = require("inspirational-quotes");

console.log(
  cowsay.say({
    text: "I'm a mpduuuuule Cow ",
    e: "oO",
    T: "U ",
  })
);

// or cowsay.think()

console.log(Quote.getQuote()); // returns quote (text and author)
console.log(Quote.getQuote({ author: false })); // return quote without author
console.log(Quote.getRandomQuote()); // return any random quote
