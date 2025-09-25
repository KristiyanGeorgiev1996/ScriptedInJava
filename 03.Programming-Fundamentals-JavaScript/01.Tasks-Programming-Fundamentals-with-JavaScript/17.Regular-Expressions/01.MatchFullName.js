let input = "John Doe, jane Smith, Alice Johnson"; 
let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+/g;
let matches = input.match(pattern);

if (matches) {
    console.log(matches.join(" "));
}
