const input = "Please contact us at support@example.com, admin@my-site.org, or invalid@@mail.com";

const pattern = /[^\.\-_]\b(?![\._\-])[A-Za-z0-9]+[\.\-_]*[A-Za-z0-9]+@[^\.\-](?:[A-Za-z\.\-]+\.)+[A-Za-z]+/g;

const matches = input.match(pattern) || [];

for (let match of matches) {
    console.log(match.trim().replace(/^[, ]+|[, ]+$/g, ''));
}
