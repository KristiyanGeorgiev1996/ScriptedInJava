let peoples = parseFloat(prompt());
let maxPeople = parseFloat(prompt());

let courses = 0;
let course = peoples / maxPeople;

if (peoples % maxPeople === 0) {
    courses += course;
} else {
    courses += Math.ceil(course);
}

console.log(courses);
