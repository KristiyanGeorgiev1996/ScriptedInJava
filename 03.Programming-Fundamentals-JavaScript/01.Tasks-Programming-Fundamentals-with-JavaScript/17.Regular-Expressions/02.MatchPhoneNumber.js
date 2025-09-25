let phones = "+359 2 222 2222, +359-2-333-3333, 12345";
let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

let matches = phones.match(pattern);
if (matches) {
    console.log(matches.join(", "));
}
