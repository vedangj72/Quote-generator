let button = document.querySelector('.Button-next');
let written = document.querySelector('.written-by');
let quote = document.querySelector('.quote-class');
let body = document.querySelector('body');
// console.log(button);
// console.log(written);
// console.log(quote);
// console.log(body);

const quotes = [{
        quote: `"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."`,
        written: `" Ralph Waldo Emerson"`

    },
    {
        quote: `""The only way to do great work is to love what you do." `,
        written: `" Steve Jobs"`
    },
    {
        quote: `"The only thing we have to fear is fear itself."`,
        written: `"Franklin D. Roosevelt"`
    },
    {
        quote: `"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife."`,
        written: `"Jane Austen"`
    },
    {
        quote: `"The road to hell is paved with adverbs"`,
        written: `" Stephen King"`
    },
];
button.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    written.innerHTML = quotes[random].written;
})

// button.addEventListener('dblclick', function() {

// })