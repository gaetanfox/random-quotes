document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// Quotes Array
var quotes = [
  {
    'quote': 'I love you the more in that I believe you had liked me for my own sake and for nothing else.',
    'source': 'John Keats',
    'citation': 'blblblblbl',
    'year': '1994'
  },
  {
    'quote': 'But man is not made for defeat. A man can be destroyed but not defeated.',
    'source': 'Ernest Hemingway'
  },
  
  {
    'quote': 'When you reach the end of your rope, tie a knot in it and hang on.',
    'source': 'Franklin D. Roosevelt'
  },
  {
    'quote': 'There is nothing permanent except change.',
    'source': 'Heraclitus'
  },
  {
    'quote': 'You cannot shake hands with a clenched fist.',
    'source': 'Indira Gandhi'
  },

];

// Function that returns a random element from the array
function getRandomQuote() {
  var randomquote = Math.floor( Math.random() * quotes.length);
  var element = quotes[randomquote];

  return (element);
}

// Function that prints the quote in the HTML
function printQuote() {
  var randQuote = getRandomQuote();
  var myQuote = document.getElementById('quote-box');
  myQuote.innerHTML = "<p class='quote'>" + randQuote.quote + "</p>" +
      "<p class='source'>" + randQuote.source +
      "<span class='citation'>" + randQuote.citation + "</span>" +
      "<span class='year'>" + randQuote.year + "</span>" +
      "</p>" ;
}